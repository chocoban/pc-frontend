import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import App from 'next/app';
import Head from 'next/head';

import makeStore from '../redux/store/index';

class MyApp extends App {
  static async getInitialProps({
    Component, ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const {
      Component, pageProps, store
    } = this.props;
    return (
      <div>
        <Head>
          <title>Petty Cash</title>
        </Head>
        <Provider store={ store }>
          <Component { ...pageProps } />
        </Provider>
      </div>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));
