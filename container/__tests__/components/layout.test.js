import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Layout } from 'antd';

import PageLayout from '../../Layout';
import RequestsTable from '../../Home/RequestsTable';

const { Footer } = Layout;

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('With Enzyme', () => {
  let pageLayoutWrapper;
  beforeAll(() => {
    pageLayoutWrapper = mount(
      <Provider store={ store }>
        <PageLayout />
      </Provider>
    );
  });

  it('PageLayout component snapshot!"', () => {
    expect(pageLayoutWrapper).toMatchSnapshot();
  });

  it('should display requests table component within the Layout', () => {
    const requestTableWrapper = pageLayoutWrapper.find(RequestsTable);
    expect(requestTableWrapper).toBeTruthy();
  });

  it('should display footer component within the Layout', () => {
    const footerWrapper = pageLayoutWrapper.find(Footer);
    expect(footerWrapper.text()).toContain('pettyCash');
  });
});
