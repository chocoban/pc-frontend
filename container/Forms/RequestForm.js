import  { Component } from  'react';
import { Form, Input, Radio } from 'antd';

const { TextArea } = Input;

class RequestForm extends Component {
  
  render() {
    const { handleChange } = this.props;
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

    return (
      <Form {...formItemLayout}>
        <Form.Item label="Amount required">
          {getFieldDecorator('amount', {
            rules: [
              {
                required: true,
                message: 'Please add the amount. Amount should be a number',
              }
            ],
          })(
          <Input
            type='number'
            name='amount'
            onChange={handleChange}
          />)}
        </Form.Item>
        <Form.Item label="Description of Need">
          {getFieldDecorator('reason',{
            rules: [
              {
                required: true,
                message: 'Please add the reason',
              }
            ]
          })(
          <TextArea rows={4}
            type="text"
            name='reason'
            onChange={handleChange}
          />
          )}
        </Form.Item>
        <Form.Item label="Mode of payment">
          {getFieldDecorator('payment', {
            rules: [
              {
                required: true,
                message: 'Please check the appropriate payment',
              }
            ]
          })(
            <Radio.Group onChange={handleChange} name='payment'>
              <Radio value="cash"> Cash </Radio>
              <Radio value="mobileMoney"> Moblie Money </Radio>
            </Radio.Group>,
          )}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRequestForm = Form.create({ name: 'formContent' })(RequestForm);

export default WrappedRequestForm;
