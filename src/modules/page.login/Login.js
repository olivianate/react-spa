import './index.css';

import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import HttpUtils from '../../utils/ajax';
import Cookies from 'js-cookie';
// import config from '../../config';
const FormItem = Form.Item;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      seconds: 30,
      isFetching: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      let { username, password, identifycode } = values;

      const url = '/login';
      HttpUtils({ url, data:{
        username: username,
        password: password,
        identifycode: identifycode
      }}).then(json => {
        const data = json.data;
        Cookies.set('username', data.username, { path: '/' });
        this.setState({ redirectToReferrer: true });
      });
    });
  };
  fetchCaptcha = () => {
    const url = '/loginIdentify';
    const { form } = this.props;
    const { username, password } = form.getFieldsValue();

    HttpUtils({
      url, data:{
        username: username,
        password: password
      }
    }).then(json => {
      this.setState({
        isFetching: true
      });
      this.countdown(this.state.seconds);
    });
  };

  countdown = seconds => {
    this.timer = setTimeout(() => {
      if (seconds > 1) {
        this.setState({ seconds: --seconds });
        this.countdown(this.state.seconds);
      } else {
        clearTimeout(this.timer);
        this.resetCount();
      }
    }, 1000);
  };
  resetCount = () => {
    this.setState({
      seconds: 30,
      isFetching: false
    });
  };
  render() {
    // const { history } = this.props;
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      // const homepath = config.host ? `/${config.host}/home` : '/home';
      // history.push({
      //   pathname: '/'
      // });
      window.location.href = './home';
    }
    const { getFieldDecorator } = this.props.form;
    const { seconds, isFetching } = this.state;

    return (
      <div className='login-container'>
        <div className='login-box'>
          <Form onSubmit={this.handleSubmit} className='login-form'>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input
                  prefix={
                    <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='123'
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  prefix={
                    <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type='password'
                  placeholder='123'
                />
              )}
            </FormItem>
            <FormItem>
              <Row gutter={10}>
                <Col span={14}>
                  {getFieldDecorator('identifycode', {
                    rules: [{ required: true, message: '请输入验证码!' }]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type='safety'
                          style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                      }
                      placeholder='1234'
                    />
                  )}
                </Col>
                <Col span={10}>
                  <Button onClick={this.fetchCaptcha}>
                    {isFetching ? `${seconds}秒后重新获取` : '获取手机验证码'}
                  </Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                登录
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
