import "./index.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";
import PageHomeManage from "../page.home.manage";
import PageMapManage from "../page.map.manage";
import PageEchartsManage from "../page.echarts.manage";
import PageReqManage from "../page.req.manage";


const { Content } = Layout;

class Contents extends Component {
  render() {
    const routes = [
      {
        exact: true,
        path: "/",
        page: PageHomeManage
      },
      {
        name: "首页",
        path: "/home",
        page: PageHomeManage
      },
      {
        name: "地图",
        path: "/map",
        page: PageMapManage
      },
      {
        name: "列表管理",
        path: "/list",
        page: PageReqManage
      },
      {
        name: "Echart",
        path: "/echarts",
        page: PageEchartsManage
      }
    ];

    return (
      <Content style={{ margin: "16px" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          {routes.map(route => {
            return route.page ? (
              <Route
                path={route.path}
                exact={route.exact}
                key={route.path}
                component={route.page}
              />
            ) : null;
          })}
        </div>
      </Content>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Contents)
);
