import { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import HomeSidebar from './Home/Sidebar';
import RequestsTable from './Home/RequestsTable';

const { Content, Footer } = Layout;

class ConnectedLayout extends Component {
  state = { 
    collapsed: false 
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }; 
  
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <HomeSidebar />
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <RequestsTable />
          </Content>
          <Footer style={{ textAlign: 'center' }}> ©2019 Created by pettyCash</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ConnectedLayout);
