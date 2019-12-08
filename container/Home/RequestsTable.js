import { Component, Fragment } from 'react';
import {connect} from "react-redux";
import { Table } from 'antd';

import ModalForm from '../Modal/index';
import HomeHeader from './HomeHeader';
import RequestForm from '../Forms/RequestForm';
import { fetchRequests, closeModal, postRequest } from '../../redux/actions';

const columns = [
  {
    title: 'Requests ID',
    dataIndex: 'request',
    sorter: true,
    width: '15%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: '20%'
  },
  {
    title: 'Country',
    dataIndex: 'country',
    filters: [{ text: 'Uganda', value: 'ug' }, { text: 'Kenya', value: 'ken' }],
    width: '15%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '15%'
  }
];

class RequestsTable extends Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
    values: {
      amount: null,
      reason: null,
      payment: null
    }
  };

  validate = event => {
    const { constraints } = this.props;
    const { value } = event.target;

    if (!constraints) return null;

    this.setState({ errors: validate.single(value, constraints) });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(state => {
      return {
        values: {
          ...state.values,
          [name]: value
        }
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { amount, reason, payment } = this.state;
    const { closeModal, postRequest } = this.props;
    postRequest(amount, reason, payment);
    closeModal();
  };
  componentDidMount(){
    this.props.fetchRequests();
  }
  render() {
    const { visible, closeModal }  = this.props;
    return (
      <Fragment>
        <HomeHeader />
        <ModalForm
          title="Request Form"
          visible={visible}
          handleSubmit={this.handleSubmit}
          handleCloseModal={closeModal}
        >
          <RequestForm
            handleChange={this.handleChange}
          />
        </ModalForm>
        <Table
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ modalReducer }) => ({ ...modalReducer });

const actions = {
  fetchRequests,
  postRequest,
  closeModal
}
export default connect(mapStateToProps, actions)(RequestsTable);
