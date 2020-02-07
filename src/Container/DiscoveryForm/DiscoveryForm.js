import React, { Component} from 'react';
import 'antd/dist/antd.css';
import './DiscoveryForm.css'
import {
    Form,
    Input,
  
    Cascader,
    Select,
  
    Button,
   
  } from 'antd';

const { Option } = Select;

const residences = [
    {
      value: 'Morning (9 am - Noon PST)',
      label: 'Morning (9 am - Noon PST)',
    },
    {
        value: 'Afternoon (Noon - 5 pm PST)',
        label: 'Afternoon (Noon - 5 pm PST)',
    },
    {
        value: 'Evening (5 pm - 9 pm PST)',
        label: 'Evening (5 pm - 9 pm PST)',
    }
]
class  RegistrationForm extends Component{
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
            <div className="DiscoveryForm">
                 <div className="heading">
                         Try a 30 min Discovery Session. <span className="red"> Its FREE!</span>
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
                                    <Form.Item label="Best time to reach you">
                                        {getFieldDecorator('time to call', {
                                            initialValue: [],
                                            rules: [
                                            { type: 'array', required: true, message: 'Please select the best time to call you!' },
                                            ],
                                        })(<Cascader options={residences} />)}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Book Now for FREE!
                                    </Button>
                                </Form.Item>
                </Form>
               
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
export default WrappedRegistrationForm;