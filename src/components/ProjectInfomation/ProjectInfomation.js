import React from 'react';
import { getStyle } from './ProjectInfomation.style';
import { Stack, TextField, ComboBox, DatePicker, DayOfWeek, Text } from 'office-ui-fabric-react';

export class ProjectInfomation extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.wrapper}>
        <Stack.Item>
          <Text variant="xxLarge">Infomations</Text>
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal tokens={{ childrenGap: 40 }}>
            <Stack.Item grow disableShrink>
              <Stack className={classNames.leftWrapper}>
                <TextField label="Project's name" />
                <DatePicker firstDayOfWeek={DayOfWeek.Sunday} label="Date created" />
                <TextField label="Project's website" />
                <ComboBox label="Technology" />
                <TextField multiline={true} label="Bref Description" resizable={false} />
              </Stack>
            </Stack.Item>
            <Stack.Item>
              <Stack className={classNames.rightWrapper}>
                <div className={classNames.imgPreview}></div>
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }
}