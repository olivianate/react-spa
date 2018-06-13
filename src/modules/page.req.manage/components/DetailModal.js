import React, { Component } from "react";
import { Modal, Button, Row, Col } from "antd";

class DetailModal extends Component {
  render() {
    const { visible, onOk, onCancel, item } = this.props;
    return (
      <Modal
        title="Detail"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        footer={[
          <Button key="back" type="primary" onClick={onOk}>
            ok
          </Button>
        ]}
      >
        <div>
          <Row>
            <Col span={4}>Name</Col>
            <Col span={8}>{ item.name }</Col>
          </Row>
          <Row>
            <Col span={4}>Age</Col>
            <Col span={8}>{ item.age }</Col>
          </Row>
          <Row>
            <Col span={4}>Address</Col>
            <Col span={8}>{ item.address }</Col>
          </Row>
          <Row>
            <Col span={4}>CreateDate</Col>
            <Col span={8}>{ item.createdate }</Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

export default DetailModal;
