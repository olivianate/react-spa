import "./index.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Table, Popconfirm, Spin } from "antd";
import {
  fetchRequirement,
  openModal,
  openEditModal,
  closeModal
} from "./action";
import HttpUtils from "../../utils/ajax";

import DetailModal from "./components/DetailModal";
import EditModal from "./components/EditModal";
import SearchBar from "./components/SearchBar";

class PageReqManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      pageSize: 10,
      currentPage: 1
    };
  }
  componentDidMount() {
    this.onSearch();
  }
  //表格分页切换
  handleTableChange = (pagination, filters, sorter) => {
    this.onSearch();
  };
  //搜索列表
  onSearch = (fields, currentPage) => {
    const values = this.state.fields;
    fields = fields || values;

    const { fetchData } = this.props;
    const { pageSize } = this.state;
    if (currentPage) {
      this.setState({ currentPage })
    }
    currentPage = currentPage || this.state.currentPage


    const skipCount = (currentPage - 1) * pageSize;
    fetchData({
      ...fields,
      pageSize,
      skipCount
    });
  };
  onDelete = key => {
    const deletedata = "/deletedata";
    const data = {
      key
    };

    HttpUtils({ url: deletedata, data })
      .then(json => {
        this.setState({
          currentPage: 1
        });
        this.onSearch();
      })
      .catch(error => {});
  };

  onDetailModal = item => {
    this.props.openModal({ item, detailModalVisible: true });
  };

  onEditModal = item => {
    this.props.openEditModal({ item, editModalVisible: true });
  };

  handleCancel = modalType => {
    const { closeModal } = this.props;
    if (modalType === "edit") {
      closeModal({ editModalVisible: false });
    } else if (modalType === "detail") {
      closeModal({ detailModalVisible: false });
    }
  };

  tabelColumns = deleteText => [
    {
      title: "Number",
      dataIndex: "number",
      key: "number"
    },
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
      title: "Time",
      dataIndex: "time",
      key: "time"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="table-action">
          <a onClick={() => this.onDetailModal(record)}>Detail</a>
          <Popconfirm
            placement="bottom"
            title={deleteText}
            onConfirm={() => this.onDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
          <a onClick={() => this.onEditModal(record)}>Edit</a>
        </div>
      )
    }
  ];

  render() {
    const {
      reqData,
      item,
      isFetching,
      detailModalVisible,
      editModalVisible
    } = this.props;
    const dataSource = reqData.data;
    const deleteText = "Are you sure delete this task?";

    return (
      <div>
        <Spin spinning={isFetching}>
          <SearchBar
            onSubmit={this.onSearch}
           />
          <Table
            columns={this.tabelColumns(deleteText)}
            dataSource={dataSource}
            onChange={this.handleTableChange}
          />
          <DetailModal
            visible={detailModalVisible}
            onOk={() => this.handleCancel("detail")}
            onCancel={() => this.handleCancel("detail")}
            item={item}
          />
          <EditModal
            visible={editModalVisible}
            onOk={() => this.handleCancel("edit")}
            onCancel={() => this.handleCancel("edit")}
            item={item}
          />
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reqData: state.requirement.reqData,
  item: state.requirement.item,
  isFetching: state.requirement.isFetching,
  detailModalVisible: state.requirement.detailModalVisible,
  editModalVisible: state.requirement.editModalVisible
});
const mapDispatchToProps = dispatch => ({
  fetchData: params => {
    dispatch(fetchRequirement(params));
  },
  openModal: payload => {
    dispatch(openModal(payload));
  },
  openEditModal: payload => {
    dispatch(openEditModal(payload));
  },
  closeModal: payload => {
    dispatch(closeModal(payload));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageReqManage)
);
