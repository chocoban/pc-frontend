import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LandingPage from '../../LandingPage';

const initialState = {};
const mockStore = configureStore();
const store = mockStore(initialState);
describe('Landing page', () => {
  it('should test the landing page', () => {
    const landingPage = shallow(
      <Provider store={ store }>
        <LandingPage />
      </Provider>
    );
    expect(landingPage).toMatchSnapshot();
  });
});
