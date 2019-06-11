import React from 'react';
import { Stack, Text, css, IconButton } from 'office-ui-fabric-react';
import { getStyle } from './TechItem.style';

export class TechItem extends React.Component {
  render() {
    const { tech, className } = this.props;
    const classNames = getStyle();
    return (
      <Stack className={css(className, classNames.projectItem)} verticalAlign="center">
        <Text variant="large" className={classNames.projectItem_Header} nowrap>{tech.name}</Text>
        <Text variant="mediumPlus" className={classNames.projectItem_Subheader}>{tech.date.toLocaleDateString()}</Text>
        <IconButton
          iconProps={{ iconName: 'MoreVertical' }}
          className={classNames.moreButton}
        />
      </Stack>
    );
  }
}