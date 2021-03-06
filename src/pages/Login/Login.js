import React from 'react';
import { Stack, TextField, PrimaryButton, Text, Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react';
import { getStyle } from './Login.style';
import { AuthApi } from '../../api/auth.api';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hasUsernameErr: true,
      hasPasswordErr: true,
      isLoading: true,
      isSubmitting: false,
      isDialogOpen: false,
      dialogContent: '',
    };
  }

  async componentWillMount() {
    if (await AuthApi.isAuthenticated(false)) {
      this.props.history.push('/');
    }
    this.setState({ isLoading: false })
  }

  handleUsernameError = (value) => {
    if (value.length === 0) {
      this.setState({ hasUsernameErr: true });
      return 'Không để trống tên đăng nhập';
    } else {
      this.setState({ hasUsernameErr: false });
      return '';
    }
  }

  handlePasswordError = (value) => {
    if (value.length === 0) {
      this.setState({ hasPasswordErr: true });
      return 'Không để trống mật khẩu';
    } else {
      this.setState({ hasPasswordErr: false });
      return '';
    }
  }

  handleUsernameChanged = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChanged = (event) => {
    this.setState({ password: event.target.value });
  }

  hasError = () => {
    if (this.state.hasUsernameErr || this.state.hasPasswordErr) {
      return true;
    }
  }

  handleSubmitForm = async () => {
    this.setState({ isSubmitting: true });
    if (this.hasError()) { return; }
    const checkLogin = await AuthApi.login({
      username: this.state.username,
      password: this.state.password
    });
    if (!checkLogin) {
      this.handleOpenDialog('Đăng nhập không thành công');
    } else {
      await this.context.getUserLoginInformation(); // Gọi lại hàm để lấy thông tin đăng nhập
      this.props.history.push('/');
    }
    this.setState({ isSubmitting: false });
  }

  handleDisableLoginButton = () => {
    return this.state.hasUsernameErr || this.state.hasPasswordErr || this.state.isSubmitting;
  }

  handleOpenDialog = content => {
    this.setState({ isDialogOpen: true, dialogContent: content });
  }

  handleCloseDialog = () => {
    this.setState({ isDialogOpen: false });
  }

  render() {
    const classNames = getStyle();
    return (
      <>
        <div className={classNames.loginWrapperOuter}>
          {this.state.isLoading
            ? <></>
            : (
                <Stack className={classNames.loginWrapper}>
                  <Stack horizontalAlign='center'>
                    <Text variant="superLarge">Login</Text>
                  </Stack>
                  <Stack.Item grow disableShrink>
                    <Stack verticalAlign="center" style={{ height: '100%' }}>
                      <TextField
                        label="Username"
                        onGetErrorMessage={this.handleUsernameError}
                        value={this.state.username}
                        onChange={this.handleUsernameChanged}
                      />
                      <TextField
                        type="password"
                        label="Password"
                        onGetErrorMessage={this.handlePasswordError}
                        value={this.state.password}
                        onChange={this.handlePasswordChanged}
                      />
                    </Stack>
                  </Stack.Item>
                  <Stack horizontalAlign='end' className={classNames.loginAction}>
                    <PrimaryButton
                      onClick={this.handleSubmitForm}
                      disabled={this.handleDisableLoginButton()}
                    >
                      Login
                    </PrimaryButton>
                  </Stack>
                </Stack>
            )}
        </div>
        <Dialog
          hidden={!this.state.isDialogOpen}
          onDismiss={this.handleCloseDialog}
          modalProps={{
            className: classNames.dialog
          }}
          dialogContentProps={{
            type: DialogType.normal,
            title: 'Thông báo',
            subText: this.state.dialogContent
          }}
        >
          <DialogFooter>
            <PrimaryButton text="OK" onClick={this.handleCloseDialog} />
          </DialogFooter>
        </Dialog>
      </>
    );
  }
}
Login.contextType = AppContext;

export default withRouter(Login);