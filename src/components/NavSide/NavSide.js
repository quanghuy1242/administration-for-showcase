import React from 'react';
import { Nav, Icon, initializeIcons, TooltipHost, DirectionalHint } from 'office-ui-fabric-react';
import { getStyle } from './NavSide.style';
import { Link, withRouter } from 'react-router-dom';

initializeIcons();

class NavSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: 'Welcome',
          url: '/',
          key: "keyDashboard",
          icon: 'Taskboard'
        },
        {
          name: 'Projects',
          url: '/projects',
          key: 'keyprojects',
          icon: 'OEM'
        },
        {
          name: 'Categories',
          url: '/categories',
          key: 'keyCategories',
          icon: 'Stack'
        },
        {
          name: 'About',
          url: '/about',
          key: 'keyAbout',
          icon: 'Info'
        }
      ],
      selectedKey: null
    };
  }

  componentDidMount() {
    const currentRoute = this.state.links.find(link => link.url === this.props.location.pathname);
    this.props.onNavTopTextChanged(currentRoute.name);
    this.props.history.listen((location, action) => {
      const currentRoute = this.state.links.find(link => link.url === location.pathname);
      if (currentRoute) {
        this.setState({
          selectedKey: currentRoute.key
        });
        this.props.onNavTopTextChanged(currentRoute.name);
        this.props.isOverlay && !this.props.isCollapsed && this.props.onDismiss(); // đóng navside chỉ khi navside đang mở
      };
    })
  }

  onRenderLink = (props) => {
    return (
      <TooltipHost content={props.title} calloutProps={{ directionalHint: DirectionalHint.rightTopEdge }}>
        <Link className={props.className} style={{color: 'inherit', boxSizing: 'border-box'}} to={props.href}>
          <span style={{display: 'flex'}}>
            { props.iconProps && <Icon style={{margin: '0 10px', fontSize: '20px'}} {...props.iconProps} /> }
            {/* {props.children} */}
          </span>
        </Link>  
      </TooltipHost>
    );
  }

  render() {
    let selectedKey = this.state.selectedKey ? this.state.selectedKey : null;
    const classNames = getStyle(this.props);
    return (
      <div>
        <div className={classNames.navWrapper}>
          <Nav
            expandedStateText="expanded"
            collapsedStateText="collapsed"
            {...selectedKey}
            onLinkClick={() => {}}
            styles={{
              root: {
                width: this.props.isCollapsed ? 0 : 45,
                height: '100%',
                boxSizing: 'border-box',
                overflowY: 'auto',
                transition: '0.2s',
                zIndex: 98
              }
            }}
            className={classNames.navInnerWrapper}
            groups={[{ links: this.state.links }]}
            linkAs={this.onRenderLink}
          />
        </div>
        {
          this.props.isOverlay
            ? !this.props.isCollapsed
              ? <div className={classNames.navOverlay} onClick={this.props.onDismiss}></div>
              : <></>
            : <></>
        }
      </div>
    );
  }
}

export default withRouter(NavSide);