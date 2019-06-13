import React from 'react';
import { Stack, TextField, PrimaryButton, Text } from 'office-ui-fabric-react';
import { getStyle } from './Login.style';

export class Login extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.loginWrapperOuter}>
        <Stack className={classNames.loginWrapper}>
          <Stack horizontalAlign='center'>
            <Text variant="superLarge">Login</Text>
          </Stack>
          <Stack>
            <TextField
              label="Username"
              errorMessage="Tên người dùng không hợp lệ"
            />
            <TextField
              label="Password"
              errorMessage="Mật khẩu không hợp lệ"
            />
          </Stack>
          <Stack horizontalAlign='end' className={classNames.loginAction}>
            <PrimaryButton>
              Login
            </PrimaryButton>
          </Stack>
        </Stack>
      </div>
    );
  }
}