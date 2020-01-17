import { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

class SignUpPage extends Component {
  state = { size: 'large', };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;

    return (
      <div style={{
        minHeight: '100vh',
        backgroundImage: 'url(../public/static/landingPage/what-is-petty-cash.png)',
        backgroundSize: 'cover'
      }}>
        <div style={{ marginLeft: '25vw', paddingTop: '35vw' }}>
          <Button
            type='primary'
            shape='round'
            size={ size }
            style={{ width: '10vw', height: '3vw' }}
          >
            <a href='http://localhost:8080/google'>
              Sign up
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SignUpPage);
