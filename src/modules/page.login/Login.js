import "./index.css";

import React from "react";
import { Form, Icon, Input, Button } from "antd";
import Cookies from "js-cookie";

const FormItem = Form.Item;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      let { username } = values;
      console.log(values);

      Cookies.set("username", username, { path: "/" });
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    // const { history } = this.props;

    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      // history.push({
      //   pathname: "/"
      // });
      window.location.href = '/';
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="login-box">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "请输入用户名!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码!" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const Login = Form.create()(LoginPage);
export default Login;
