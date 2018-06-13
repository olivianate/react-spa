import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class BaiduMap extends Component {
  getOptions() {
    return ["minZoom", "maxZoom", "mapType", "enableMapClick"];
  }
  componentDidMount() {
    // 创建Map实例
    const BMap = window.BMap;
    var options = this.options;
    options = this.getOptions(options);
    if (this.props.enableMapClick !== true) {
      options.enableMapClick = false;
    }
    const map = new BMap.Map(this.refs.map, options);
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }

  render() {
    return (
      <div
        ref="map"
        style={{
          width: "100%",
          height: "100vh"
        }}
      />
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BaiduMap)
);
