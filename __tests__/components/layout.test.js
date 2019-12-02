import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import PageLayout from '../../container/Layout';

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('With Enzyme', () => {
  it('PageLayout component snapshot!"', () => {
    const pageLayout = shallow(
      <Provider store={ store }>
        <PageLayout />
      </Provider>
    );

    expect(pageLayout).toMatchSnapshot();
  });
});
