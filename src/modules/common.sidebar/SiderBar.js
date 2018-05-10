import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { menus } from "../../utils/menus";

import { Menu, Icon } from "antd";
// const SubMenu = Menu.SubMenu;


class SiderBar extends Component {
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {menus.map(menu => {
          return (
            <Menu.Item key={menu.url}>
              <Link to={`/${menu.url}`}>
                <Icon type={menu.icon} />
                <span>{menu.name}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SiderBar)
);
