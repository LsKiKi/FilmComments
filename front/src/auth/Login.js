import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';

const FormItem = Form.Item;

class LoginForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <br/>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"

                    >
                        登录
                    </Button>
                    <br/>
                    <span className="login-form-register">
                        Or <a href="">现在注册</a>
                    </span>
                </FormItem>
            </Form>
        );
    }
}
const Login = Form.create()(LoginForm);
export default Login;