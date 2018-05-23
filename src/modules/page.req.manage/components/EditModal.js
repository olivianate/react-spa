import React, { Component } from "react";
import { Modal, Form, Input, InputNumber } from "antd";
const FormItem = Form.Item;

class ModalForm extends Component {
  
  render() {
    const { visible, onOk, onCancel, item, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal title="Edit" visible={visible} onOk={onOk} onCancel={onCancel}>
        <Form onSubmit={this.handleSubmit}>
          {item.uuid
            ? getFieldDecorator("uuid", {
                initialValue: item.uuid
              })(<Input type="hidden" />)
            : null}
          <FormItem label="name">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "name is required!" }],
              initialValue: item.name
            })(<Input />)}
          </FormItem>
          <FormItem label="age">
            {getFieldDecorator("age", {
              rules: [{ required: true, message: "age is required!" }],
              initialValue: item.age
            })(<InputNumber min={1} max={100} />)}
          </FormItem>
          <FormItem label="address">
            {getFieldDecorator("address", {
              rules: [{ required: true, message: "address is required!" }],
              initialValue: item.address
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
const EditModal = Form.create()(ModalForm);
export default EditModal;
