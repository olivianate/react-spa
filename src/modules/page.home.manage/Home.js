import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>首页</div>
        )
    }
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);