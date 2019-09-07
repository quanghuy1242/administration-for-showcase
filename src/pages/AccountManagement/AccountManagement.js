import React from 'react';
import { Stack, Nav, Icon, Text } from 'office-ui-fabric-react';
import { getStyle } from './AccountManagement.style';
import { Link, withRouter, Route, Redirect } from 'react-router-dom';
import AccountGeneral from '../../components/AccountGeneral/AccountGeneral';
import AccountBio from '../../components/AccountBio/AccountBio';

class AccountManagement extends React.Component {
  onRenderLink = (props) => {
    return (
      <Link className={props.className} style={{color: 'inherit', boxSizing: 'border-box'}} to={props.href}>
        <span style={{display: 'flex'}}>
          { props.iconProps && <Icon style={{margin: '0 10px', fontSize: '20px'}} {...props.iconProps} /> }
          {props.children}
        </span>
      </Link>
    );
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.accountWrapper} horizontal tokens={{ childrenGap: 16 }}>
        <Stack tokens={{ childrenGap: 16 }}>
          <Text variant='xLarge'>Account Management</Text>
          <Nav
            expandedStateText="expanded"
            collapsedStateText="collapsed"
            // {...selectedKey}
            onLinkClick={() => {}}
            styles={{
              root: {
                width: 250,
                height: '100%',
                boxSizing: 'border-box',
                overflowY: 'auto',
                zIndex: 98
              }
            }}
            groups={[{
              links: [
                {
                  name: 'General',
                  url: `${this.props.match.url}/general`,
                  iconProps: { iconName: 'People' }
                },
                {
                  name: 'Bio',
                  url: `${this.props.match.url}/bio`,
                  iconProps: { iconName: 'ContactInfo' }
                },
                {
                  name: 'Story',
                  url: `${this.props.match.url}/story`,
                  iconProps: { iconName: 'StorageOptical' }
                }
              ]
            }]}
            className={classNames.navInnerWrapper}
            linkAs={this.onRenderLink}
          />
        </Stack>
        <Stack.Item disableShrink grow>
          <Stack style={{ width: '100%' }}>
            <Route path={`${this.props.match.path}/general`} component={AccountGeneral} />
            <Route path={`${this.props.match.path}/bio`} component={AccountBio} />
            <Route path={`${this.props.match.path}/story`} render={() => <Text variant='xLarge'>Story</Text>} />
            <Route exact path={`${this.props.match.path}`} render={() => <Redirect to={`${this.props.match.path}/general`} />} />
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }
}

export default withRouter(AccountManagement)