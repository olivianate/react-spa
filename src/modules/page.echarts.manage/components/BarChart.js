import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.initChart = this.initChart();
  }
  componentDidMount() {
    const myChart = echarts.init(this.chartbox);
    const { option } = this.props;
    myChart.setOption(option);
  }
  initChart = () => {

  }
  render() {
    const { width, height } = this.props;
    return (
      <div 
        ref={chartbox => (this.chartbox = chartbox)}
        style={{ width, height }}
      ></div>
    );
  } 
}