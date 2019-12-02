import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader, Button, Descriptions } from 'antd';
import { openModal } from '../../redux/actions';

class HomeHeader extends Component {
  render() {
    const { openModal } = this.props;
    return (
      <div
        style={{
          backgroundColor: '#F5F5F5',
          padding: 24,
        }}
      >
        <PageHeader
          ghost={false}
          /* eslint-disable no-undef */
          onBack={() => window.history.back()}
          subTitle="User's name"
          extra={[
            <Button key="2"
              onClick={ openModal }>
              MAKE REQUESTS
            </Button>
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Role">Software developer</Descriptions.Item>
            <Descriptions.Item label="Department">
              Engineering
            </Descriptions.Item>
            <Descriptions.Item label="Country">Uganda</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2018-10-10</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
    );
  }
}

HomeHeader.propTypes = {
  openModal: PropTypes.func
};

const mapStateToProps = state => state;

const actions = {
  openModal
};

export default connect(mapStateToProps, actions)(HomeHeader);
