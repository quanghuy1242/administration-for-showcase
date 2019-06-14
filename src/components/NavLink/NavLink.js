import React, { Component } from 'react';
import { style } from './NavLink.style';
import { Link } from 'react-router-dom';
import { css } from '@uifabric/utilities';

export class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.href} className={css(style.navLink, this.props.className)}>
        {this.props.children}
      </Link>
    );
  }
}
