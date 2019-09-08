import React from 'react';
import { Stack, Text, TextField, Image, ImageFit, PrimaryButton } from 'office-ui-fabric-react';
import { getStyle } from './AccountGeneral.style';

class AccountGeneral extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.wrapper}>
        <Text variant='xLarge'>General</Text>
        <Stack horizontal tokens={{ childrenGap: 32 }}>
          <Stack.Item>
            <Stack style={{ width: 500 }} className={classNames.mainInput} tokens={{ childrenGap: 16 }}>
              <Stack>
                <Text variant='xLarge'>Các thông tin cơ bản</Text>
                <TextField
                  label='Username'
                  description='Tên administrator, có thể hiểu là tên đăng nhập'
                />
                <TextField
                  label='Display Name'
                  description='Tên hiển thị, có thể sử dụng một cái tên đẹp'
                />
                <TextField
                  label='Image'
                  description='Đường dẫn đến hình ảnh của ảnh đại diện'
                />
                <TextField
                  label='Cover Image'
                  description='Đường dẫn đến hình ảnh của ảnh bìa'
                />
              </Stack>
              <Stack>
                <Text variant='xLarge'>Liên kết mạng xã hội</Text>
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
              </Stack>
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