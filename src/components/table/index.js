import React, { Component } from "react";
import { Table } from "antd";

export default class AntTable extends Component {

  render() {
    const { total, columns, dataSource, onChange } = this.props;
    const pagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      total,
      showTotal:(total) => {
        return (
          <span>
            Total {total} items
          </span>
        )
      }
    };

    return (
      <Table
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
        pagination={pagination}
      />
    );
  }
}
