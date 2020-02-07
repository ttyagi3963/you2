import React, { Component} from 'react';

import 'antd/dist/antd.css';
import './ContactForm.css'
import {
    Form,
    Input,
   
    Cascader,
    Select,
  
    Button,
   
  } from 'antd';

const { Option } = Select;
const { TextArea } = Input;


class  ContactForm extends Component{
    state={
        confirmDirty: false,
        autoCompleteResult: [],
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };

    render(){
        const { getFieldDecorator } = this.props.form;
        

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };


          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };

        return(
            <div className="ContactForm">
                 <div className="heading">
                        <h1>Leave us a Message</h1> 
                        </div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    
                    <input type="hidden" name="formType" value={this.props.formType} />

                    <Form.Item label="Name">   
                        {getFieldDecorator('name', {
                            rules: [
                        
                            {
                                required: true,
                                message: 'Please input your Full Name!',
                            },
                            ],
                        })(<Input />)}
                    </Form.Item>
                            <Form.Item label="E-mail">       
                                {getFieldDecorator('email', {
                                        rules: [
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                        ],
                                    })(<Input />)} 
                                </Form.Item>

                                <Form.Item label="Phone Number">
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Please input your phone number!' }],
                                    })(<Input/>)}
                                    </Form.Item>

                                    <Form.Item label="Comments or Questions">
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'This field is required!' }],
                                    })(<TextArea rows={4} />)}
                                    </Form.Item>

                                   
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Contact Azita!
                                    </Button>
                                </Form.Item>
                </Form>
               
            </div>
        )
    }
}
const WrappedContactForm = Form.create({ name: 'contact' })(ContactForm);
export default WrappedContactForm;