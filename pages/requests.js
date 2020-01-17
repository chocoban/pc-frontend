import { Component } from 'react';
import { connect } from 'react-redux';
import RequestsView from '../container/Home/RequestsTable';
import ConnectedLayout from '../container/Layout';

const Requests = () => (
  <div>
    <ConnectedLayout>
      <RequestsView />
    </ConnectedLayout>
  </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Requests);
