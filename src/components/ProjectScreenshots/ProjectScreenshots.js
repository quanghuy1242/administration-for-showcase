import React from 'react';
import { Stack, Text, IconButton, css } from 'office-ui-fabric-react';
import { getStyle } from './ProjectScreenshots.style';

export class ProjectScreenshots extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectScreenshotsWrapper}>
        <IconButton
          iconProps={{ iconName: "Edit" }}
          className={css('iconButton')}
        />
        <Text variant="xLarge" className={classNames.headerText}>Screenshots</Text>
        <Stack
          horizontal 
          tokens={{ childrenGap: 5 }}
          className={classNames.screenshotItemsWrapper}
        >
          {[...Array(8)].map((v, i) => (
            <img
              src="https://via.placeholder.com/1920x1080"
              alt="hmmmm" key={i}
              className={classNames.screenshotItem}
            />
          ))}
        </Stack>
      </Stack>
    );
  }
}