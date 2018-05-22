import "./index.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { toggleSide } from "./action";

import { Icon } from "antd";

class HeaderBar extends Component {
  logout = () =>{
    Cookies.remove('username', {path: '/'});
    Cookies.remove('password', {path: '/'});
    window.location.href = './login';
  }
  render() {
    const username = Cookies.get("username");
    const { collapsed, toggle } = this.props;
    return (
      <div className="header-box">
        <Icon
          style={{ fontSize: 16, color: "#fff" }}
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
        />
        <div className="header-author">
            <Icon style={{ fontSize: 16, color: "#fff" }} type="user" />
            <span className="header-usename">{username}</span>
            <a className="header-logout" onClick={() =>this.logout()}>退出</a>
        </div>
      </div>
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
