import { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import HomeSidebar from './Home/Sidebar';

const {
  Content, Footer
} = Layout;

class ConnectedLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <HomeSidebar />
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            { children }
          </Content>
          <Footer style={{ textAlign: 'center' }}> ©2019 Created by pettyCash</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ConnectedLayout);
