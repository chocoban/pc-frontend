import { Component } from 'react';
import { connect } from 'react-redux';
import RequestsLayout from '../container/Layout';

class Requests extends Component {
  render() {
    return (
      <div>
        <RequestsLayout />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Requests);
