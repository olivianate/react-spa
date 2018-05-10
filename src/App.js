import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Layout } from "antd";
import HeaderBar from "./modules/common.header";
import Contents from "./modules/common.contents";
import { menus } from "./utils/menus";
import { Menu, Icon } from "antd";

const { Header, Footer, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
    };
  }

  componentDidMount() {
    this.setState({
      current: window.location.pathname.slice(1)
    });
  }

  handleClick = e => {
    this.setState({ current: e.key });
  };
  render() {
    const defaultCurrent = menus[0];
    const selectedKeys = [
      this.state.current || (defaultCurrent && defaultCurrent.url)
    ];

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.props.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            onClick={this.handleClick}
          >
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
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
            <HeaderBar />
          </Header>
          <Contents />
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  collapsed: state.header.collapsed
});
// const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, null)(App));
