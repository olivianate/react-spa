import React, { Component } from "react";
import { Modal } from "antd";

class EditModal extends Component {
  render() {
    const { visible, onOk, onCancel, item } = this.props;
    return (
      <Modal title="Edit" visible={visible} onOk={onOk} onCancel={onCancel}>
        <p>{item.name}</p>
      </Modal>
    );
  }
}

export default EditModal;
