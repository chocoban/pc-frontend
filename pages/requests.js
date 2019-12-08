import { Component } from 'react';
import { connect } from 'react-redux';
import RequestsView from '../container/Home/RequestsTable';
import ConnectedLayout from '../container/Layout';

class Requests extends Component {
  render() {
    return (
      <div>
        <ConnectedLayout>
          <RequestsView />
        </ConnectedLayout>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Requests);
