import React from 'react';
import { Stack, Text, PrimaryButton, Image, ImageFit } from 'office-ui-fabric-react';
import { getStyle } from './ProjectBasicInfo.style';
import { AppContext } from '../../context/AppContext';

export class ProjectBasicInfo extends React.Component {
  render() {
    const classNames = getStyle({ image: this.context.selectedProjectDetail.image });
    return (
      <Stack className={classNames.basicInfoWrapper}>
        <Text variant="xLarge" className={classNames.headerText}>Basic Infomation</Text>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Stack.Item>
            <Stack tokens={{ childrenGap: 10 }}>
              <Image
                src={this.context.selectedProjectDetail.image}
                alt="Image Priview"
                width={120}
                height={120}
                imageFit={ImageFit.cover}
              />
            </Stack>
          </Stack.Item>
          <Stack.Item grow disableShrink>
            <Stack style={{ height: '100%', marginTop: '0.5rem' }} tokens={{ childrenGap: 5 }}>
              <Text variant="xxLarge">{this.context.selectedProjectDetail.name}</Text>
              <Text>
                {
                  this.context.selectedProjectDetail.date
                    ? new Date(this.context.selectedProjectDetail.date).toLocaleDateString()
                    : ''
                }
              </Text>
              <Text variant="large">{this.context.selectedProjectDetail.technology.name}</Text>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <PrimaryButton
              primary={true}
              onClick={() => window.open(this.context.selectedProjectDetail.url, '_blank')}
            >
              Project's website
            </PrimaryButton>
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }
}

ProjectBasicInfo.contextType = AppContext;