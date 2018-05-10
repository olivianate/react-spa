
import './index.css';

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { toggleSide } from "./action";

import { Layout, Icon } from "antd";
const { Header } = Layout;

class HeaderBar extends Component {
  render() {
    const username = Cookies.get("username");
    const { collapsed, toggle } = this.props;
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
        />
        <div className="header-author">
          <Icon type="user" />
          <span className="header-usename">
            {username}
          </span>
        </div>
      </Header>
    );
  }
}

const mapStateToProps = state => ({ collapsed: state.header.collapsed });
const mapDispatchToProps = dispatch => ({
  toggle: () => {
    dispatch(toggleSide());
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderBar)
);
