import React, { Component } from "react";
import { Modal } from "antd";
import { Button } from "antd";

class DetailModal extends Component {
  render() {
    const { visible, onOk, item } = this.props;
    return (
      <Modal
        title="Detail"
        visible={visible}
        onOk={onOk}
        footer={[
          <Button key="back" type="primary" onClick={onOk}>
            ok
          </Button>
        ]}
      >
        <p>{item.name}</p>
      </Modal>
    );
  }
}

export default DetailModal;
