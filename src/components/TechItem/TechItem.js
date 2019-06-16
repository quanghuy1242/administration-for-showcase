import React from 'react';
import { Stack, Text, css, IconButton } from 'office-ui-fabric-react';
import { getStyle } from './TechItem.style';

export class TechItem extends React.Component {
  render() {
    const { tech, className, selected } = this.props;
    const classNames = getStyle();
    return (
      <Stack className={css(className, classNames.projectItem)} verticalAlign="center">
        <Text variant="medium" className={classNames.projectItem_Header} nowrap>{tech.name}</Text>
        {selected === tech.nameId
          ? (
            <IconButton
              iconProps={{ iconName: 'MoreVertical' }}
              className={classNames.moreButton}
              menuProps={{
                items: [
                  {
                    key: 'edit',
                    name: 'Edit',
                    iconProps: { iconName: 'Edit' }
                  },
                  {
                    key: 'delete',
                    name: 'Delete',
                    iconProps: { iconName: 'Delete' }
                  }
                ]
              }}
              onRenderMenuIcon={ () => false }
            />
          )
          : <></>}
      </Stack>
    );
  }
}