import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Layout, Menu } from 'antd';

import HomeSidebar from '../../Home/Sidebar';

const { Sider } = Layout;

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('Sidebar tests', () => {
  let sidebarWrapper;
  beforeAll(() => {
    sidebarWrapper = mount(
      <Provider store={ store }>
        <HomeSidebar />
      </Provider>
    );
  });

  it('sidebar snapshot', () => {
    expect(sidebarWrapper).toMatchSnapshot();
  });

  it('collapses the sidebar', () => {
    sidebarWrapper
      .find('.side_bar')
      .at(0)
      .simulate('click');
    const siderbarDisplay = sidebarWrapper.find(Sider);
    expect(siderbarDisplay).toEqual({});
  });
});
