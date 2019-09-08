import React from 'react';
import { Stack, Text, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { getStyle } from './AccountBio.style';
import { AppContext } from '../../context/AppContext';

class AccountBio extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.wrapper}>
        <Text variant='xLarge'>Bio - Introduction</Text>
        <Text>Thông tin giới thiệu cơ bản</Text>
        <Stack horizontal tokens={{ childrenGap: 32 }}>
          <Stack.Item>
            <Stack style={{ width: 500 }}>
              <TextField
                label='Slogan'
                value={this.context.administrator.slogan}
                description='Một câu để giới thiệu vắn tắt về bản thân'
              />
              <TextField
                label='Bio'
                multiline
                style={{ height: 'calc(100vh - 300px)' }}
                value={this.context.administrator.introduction}
                description='Tóm tắt bản thân thành một đoạn ngắn, hỗ trợ định dạng markdown'
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

AccountBio.contextType = AppContext;

export default AccountBio;