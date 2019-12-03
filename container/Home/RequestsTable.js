import { Component, Fragment } from 'react';
import {connect} from "react-redux";
import { Table } from 'antd';
import ModalForm from '../Modal/index';
import HomeHeader from './HomeHeader';

const columns = [
  {
    title: 'Requests ID',
    dataIndex: 'request',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    filters: [{ text: 'Finance', value: 'finance' }, { text: 'Engineer', value: 'engineer' }],
    width: '15%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: '25%'
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
  };

  render() {
    const { visible }  = this.props;
    return (
      <Fragment>
        <HomeHeader />
        <ModalForm
          title="Title"
          visible={visible}
        >
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

export default connect(mapStateToProps)(RequestsTable);
