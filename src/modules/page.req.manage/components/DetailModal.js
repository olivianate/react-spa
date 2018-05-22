import React, { Component } from "react";
import { Modal } from "antd";

class DetailModal extends Component {
  render() {
    const { visible, onOk, onCancel, item } = this.props;
    return (
      <Modal title="Detail" visible={visible} onOk={onOk} onCancel={onCancel}>
        <p>{item.name}</p>
      </Modal>
    );
  }
}

export default DetailModal;
