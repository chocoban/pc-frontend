import { Component } from 'react';
import {
  Form, Input, Radio
} from 'antd';

const { TextArea } = Input;

class RequestForm extends Component {
  validateAmountAsNumber = async (rule, value, callback) => {
    const { form } = this.props;
    if (value < 50) {
      throw new Error('The amount should be greater than 50!');
    }
  };

  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  render() {
    const { handleChange } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form {...this.formItemLayout}>
        <Form.Item label="Amount required">
          {getFieldDecorator('amount', {
            rules: [
              {
                required: true,
                message: 'Please add the amount',
              },
              { validator: this.validateAmountAsNumber }
            ],
          })(
            <Input name='amount' type='number' onChange={handleChange}/>
          )}
        </Form.Item>
        <Form.Item label="Reason : ">
          {getFieldDecorator('reason', {
            rules: [
              {
                required: true,
                message: 'Please add the reason',
              },
              {
                min: 10,
                message: 'The reason should be more than 10 characters!',
              }
            ]
          })(
            <TextArea rows={4} name='reason' onChange={handleChange}/>
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
