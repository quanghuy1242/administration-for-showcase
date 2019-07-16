import React from 'react';
import { Stack, Text, css, IconButton } from 'office-ui-fabric-react';
import { getStyle } from './TechItem.style';
import { TechDetail } from '../TechDetail/TechDetail';

export class TechItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false
    }
  }

  handleShowPanel = () => {
    this.setState({ isPanelOpen: true });
  }

  handleClosePanel = () => {
    this.setState({ isPanelOpen: false })
  }

  handleDelete = () => {
    const isConfirmed = window.confirm('Bạn có chắn chắn muốn xóa technologies này không?');
    if (isConfirmed) {
      alert('asshole');
    }
  }

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
                    iconProps: { iconName: 'Edit' },
                    onClick: this.handleShowPanel
                  },
                  {
                    key: 'delete',
                    name: 'Delete',
                    iconProps: { iconName: 'Delete' },
                    onClick: this.handleDelete
                  }
                ]
              }}
              onRenderMenuIcon={ () => false }
            />
          )
          : <></>}
        {!this.state.isPanelOpen
          ? <></>
          : (
            <TechDetail
              isOpen={this.state.isPanelOpen}
              onClosing={this.handleClosePanel}
              isAdd={false}
              onAddEditTech={this.props.onAddEditTech}
            />
          )}
      </Stack>
    );
  }
}