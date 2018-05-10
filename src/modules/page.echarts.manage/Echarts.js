import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Echarts extends Component {
    render() {
        return (
            <div>chart</div>
        )
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Echarts)
);