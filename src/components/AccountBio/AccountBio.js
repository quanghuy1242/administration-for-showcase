import React from 'react';
import { Stack, Text, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { getStyle } from './AccountBio.style';

class AccountBio extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.wrapper}>
        <Text variant='xLarge'>Bio - Introduction</Text>
        <Text>Các thông tin cơ bản</Text>
        <Stack horizontal tokens={{ childrenGap: 32 }}>
          <Stack.Item>
            <Stack style={{ width: 500 }}>
              <TextField
                label='Bio'
                multiline
                style={{ height: 400 }}
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

export default AccountBio;