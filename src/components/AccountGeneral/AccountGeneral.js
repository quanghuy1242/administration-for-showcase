import React from 'react';
import { Stack, Text, TextField, Image, ImageFit, PrimaryButton } from 'office-ui-fabric-react';
import { getStyle } from './AccountGeneral.style';

class AccountGeneral extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.wrapper}>
        <Text variant='xLarge'>General</Text>
        <Text>Các thông tin cơ bản</Text>
        <Stack horizontal tokens={{ childrenGap: 32 }}>
          <Stack.Item>
            <Stack style={{ width: 500 }} className={classNames.mainInput}>
              <TextField
                label='Name'
              />
              <TextField
                label='Display Name'
              />
              <TextField
                label='Image'
              />
              <TextField
                label='Cover Image'
              />
              <TextField
                label='Facebook'
              />
              <TextField
                label='Twitter'
              />
              <TextField
                label='Instagram'
              />
              <TextField
                label='Wordpress'
              />
              <TextField
                label='Github'
              />
              <Stack horizontalAlign='end' style={{ marginTop: 8 }}>
                <PrimaryButton
                  text='Save'
                />
              </Stack>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack>
              <Image
                alt='Image Preview'
                src='https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
                imageFit={ImageFit.cover}
                width={200}
                height={200}
              />
              <Text variant='xxLarge'>Quang Huy</Text>
              <Text variant='medium'>@quanghuy1242</Text>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }
}

export default AccountGeneral;