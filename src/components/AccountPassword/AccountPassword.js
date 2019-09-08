import React from 'react';
import { Stack, Text, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { getStyle } from './AccountPassword.style';
import { AppContext } from '../../context/AppContext';

class AccountPassword extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.wrapper}>
        <Text variant='xLarge'>Thay đổi password</Text>
        <Text>Thay đổi thông tin mật khẩu</Text>
        <Stack horizontal tokens={{ childrenGap: 32 }}>
          <Stack.Item>
            <Stack style={{ width: 500 }}>
              <TextField
                label='Mật khẩu cũ'
              />
              <TextField
                label='Mật khẩu mới'
              />
              <TextField
                label='Nhập lại mật khẩu mới'
              />
              <Stack horizontalAlign='end' style={{ marginTop: 8 }}>
                <PrimaryButton
                  text='Save'
                />
              </Stack>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }
}

AccountPassword.contextType = AppContext;

export default AccountPassword;