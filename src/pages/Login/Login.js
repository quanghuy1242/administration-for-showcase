import React from 'react';
import { Stack, TextField, PrimaryButton, Text } from 'office-ui-fabric-react';
import { getStyle } from './Login.style';
import { AuthApi } from '../../api/auth.api';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hasUsernameErr: true,
      hasPasswordErr: true,
    };
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
    if (this.hasError()) { return; }
    const checkLogin = await AuthApi.login({
      username: this.state.username,
      password: this.state.password
    });
    if (!checkLogin) {
      alert('Đăng nhập không thành công');
    } else {
      alert('Đăng nhập thành công!');
      this.props.history.push('/');
    }
  }

  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.loginWrapperOuter}>
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
              disabled={this.state.hasUsernameErr || this.state.hasPasswordErr}
            >
              Login
            </PrimaryButton>
          </Stack>
        </Stack>
      </div>
    );
  }
}

export default withRouter(Login);