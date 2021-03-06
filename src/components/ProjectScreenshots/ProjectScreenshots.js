import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import { getStyle } from './ProjectScreenshots.style';
import { AppContext } from '../../context/AppContext';

export class ProjectScreenshots extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectScreenshotsWrapper}>
        <Text variant="xLarge" className={classNames.headerText}>Screenshots</Text>
        <Stack
          horizontal 
          tokens={{ childrenGap: 5 }}
          className={classNames.screenshotItemsWrapper}
        >
          {this.context.selectedProjectDetail.screenshots.length
            ? this.context.selectedProjectDetail.screenshots.map((screenshot, i) => (
                screenshot
                  ? 
                    <img
                      src={screenshot}
                      alt="hmmmm" key={i}
                      className={classNames.screenshotItem}
                    />
                  : null
              ))
            : <Text>Chưa có screenshot nào</Text>}
        </Stack>
      </Stack>
    );
  }
}

ProjectScreenshots.contextType = AppContext;