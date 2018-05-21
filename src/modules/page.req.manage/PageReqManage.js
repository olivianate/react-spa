import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Table, Icon } from "antd";
import {
    fetchRequirement
} from './action';


const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="/">Action 一 {record.name}</a>
        <span className="ant-divider" />
        <a href="/">Delete</a>
        <span className="ant-divider" />
        <a href="/" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    )
  }
];

class PageReqManage extends Component {
  constructor(props) {
      super(props)
      this.state = {
          fields: {},
          pageSize: 10,
          currentPage: 1,
      }
  }
  componentDidMount() {
    this.onSearch();
  }
  //表格分页切换
  handleTableChange = (pagination, filters, sorter) =>{
    console.log(pagination, filters, sorter);
    this.onSearch();
  }
  //搜索列表
  onSearch = () =>{
    const { fetchData } = this.props;
    const { fields, pageSize, currentPage } = this.state;
    const skipCount = (currentPage - 1) * pageSize;

    fetchData({
        ...fields,
        pageSize,
        skipCount,
      })
  }
  render() {
    const {
        reqData
    } = this.props;
    console.log('data:',reqData);

    return (
      <Table columns={columns} dataSource={reqData.data} onChange={this.handleTableChange} />
    );
  }
}

const mapStateToProps = state => ({
    reqData: state.requirement.reqData,
    isFetching: state.requirement.isFetching,
});
const mapDispatchToProps = dispatch => ({
    fetchData: params => {
        dispatch(fetchRequirement(params))
    }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageReqManage)
);
