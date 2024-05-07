import React from 'react';
import {Form, Input, Select, Checkbox, Button} from 'antd';
class FormView extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

    };

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请填写姓名' }]
                    })(<Input  placeholder="姓名" />)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('area', {
                        rules: [{ required: true, message: '请选择地区' }]
                    })(
                        <Select placeholder="地区">
                            <Select.Option value="china">中国</Select.Option>
                            <Select.Option value="usa">美国</Select.Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('idcardType', {
                        rules: [{ required: true, message: '请选择身份证类型' }]
                    })(
                        <Select placeholder="身份证号">
                            <Select.Option value="1">身份证</Select.Option>
                            <Select.Option value="2">护照</Select.Option>
                            <Select.Option value="3">驾照</Select.Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('idcard', {
                        rules: [{ required: true, message: '请填身份证' }]
                    })(<Input  placeholder="身份证" />)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请填写密码' }]
                    })(<Input type="password" placeholder="密码" />)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('agree', {
                        valuePropName: 'checked',
                        initialValue: false
                    })(<Checkbox>同意</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        用户协议
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" disabled={!getFieldValue('agree')} htmlType="submit" className="submit-button">
                        确定
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const FormWarper = Form.create({})(FormView);

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="mod1">
                <FormWarper></FormWarper>
            </section>
        );
    }
}
