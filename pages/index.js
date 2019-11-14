import { connect } from 'react-redux';
import LandingPage from '../container/LandingPage';

const Index = () => (
  <div>
    <LandingPage />
  </div>
);
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Index);
