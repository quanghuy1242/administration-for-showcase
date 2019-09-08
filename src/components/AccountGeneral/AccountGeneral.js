import React from 'react';
import { Stack, Text, TextField, Image, ImageFit, PrimaryButton } from 'office-ui-fabric-react';
import { getStyle } from './AccountGeneral.style';
import { AppContext } from '../../context/AppContext';

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
                  value={this.context.administrator.username}
                  description='Tên administrator, có thể hiểu là tên đăng nhập'
                />
                <TextField
                  label='Display Name'
                  value={this.context.administrator.name}
                  description='Tên hiển thị, có thể sử dụng một cái tên đẹp'
                />
                <TextField
                  label='Image'
                  value={this.context.administrator.image}
                  description='Đường dẫn đến hình ảnh của ảnh đại diện'
                />
                <TextField
                  label='Cover Image'
                  value={this.context.administrator.coverImage}
                  description='Đường dẫn đến hình ảnh của ảnh bìa'
                />
              </Stack>
              <Stack>
                <Text variant='xLarge'>Liên kết mạng xã hội</Text>
                <TextField
                  label='Facebook'
                  value={this.context.administrator.facebook}
                />
                <TextField
                  label='Twitter'
                  value={this.context.administrator.twitter}
                />
                <TextField
                  label='Instagram'
                  value={this.context.administrator.instagram}
                />
                <TextField
                  label='Wordpress'
                  value={this.context.administrator.wordpress}
                />
                <TextField
                  label='Github'
                  value={this.context.administrator.github}
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
            <Stack className={classNames.imagePanel}>
              <Image
                alt='Image Preview'
                src={this.context.administrator.image}
                imageFit={ImageFit.cover}
                width={250}
                height={250}
                className={classNames.imagePreview}
              />
              <Text variant='xxLarge'>{this.context.administrator.name}</Text>
              <Text variant='medium'>@{this.context.administrator.username}</Text>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }
}

AccountGeneral.contextType = AppContext;

export default AccountGeneral;