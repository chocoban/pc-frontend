import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table, notification } from 'antd';

import ModalForm from '../Modal/index';
import HomeHeader from './HomeHeader';
import RequestForm from '../Forms/RequestForm';
import {
  fetchRequests, closeModal, postRequest
} from '../../redux/actions';

const columns = [
  {
    title: 'Requests ID',
    dataIndex: 'id',
    sorter: true,
    width: '10%',
    onClick: () => {}
  },
  {
    title: 'Name',
    dataIndex: 'author.name',
    width: '10%',
  },
  {
    title: 'Email',
    dataIndex: 'author.email',
    width: '10%'
  },
  {
    title: 'Country',
    dataIndex: 'author.country',
    filters: [
      { text: 'Uganda', value: 'ug' },
      { text: 'Kenya', value: 'ken' },
      { text: 'Nigeria', value: 'nigeria' }
    ],
    width: '10%',
  }
];

class RequestsTable extends Component {
  state = {
    pagination: {},
    values: {
      amount: '',
      reason: '',
      payment: ''
    }
  };

  handleChange = ({ target }) => {
    this.setState(state => ({
      values: {
        ...state.values,
        [target.name]: target.value
      }
    }
    ));
  };

  isFormValid = (amount, reason, payment) => {
    if (amount !== '' && payment !== '' && reason !== '') {
      return true;
    }
    return false;
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      amount, reason, payment
    } = this.state.values;
    const {
      closeModal, postRequest
    } = this.props;
    postRequest(amount, reason, payment);
    closeModal();
  };

  renderMissingFieldsNotification = () => {
    notification.open({
      message: 'Missing Fields',
      description: 'Please ensure that all the required fields are filled ',
      duration: 0
    });
  };

  componentDidMount() {
    this.props.fetchRequests();
  }

  componentDidUpdate(prevProps) {
    const { newRequest } = this.props;
    if (prevProps.newRequest !== newRequest && newRequest !== undefined) {
      this.props.fetchRequests();
    }
  }

  render() {
    const {
      amount, reason, payment
    } = this.state.values;
    const {
      visible, closeModal, data
    } = this.props;
    return (
      <Fragment>
        <HomeHeader />
        <ModalForm
          title="Request Form"
          visible={visible}
          handleSubmit={
            this.isFormValid(amount, reason, payment)
              ? this.handleSubmit
              : this.renderMissingFieldsNotification
          }
          handleCloseModal={closeModal}
        >
          <RequestForm
            handleChange={this.handleChange}
          />
        </ModalForm>
        <Table
          columns={columns}
          rowKey={data => data.id}
          dataSource={data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  modalReducer, requestReducer
}) => ({
  ...modalReducer,
  ...requestReducer
});

const actions = {
  fetchRequests,
  postRequest,
  closeModal
};

export default connect(mapStateToProps, actions)(RequestsTable);
