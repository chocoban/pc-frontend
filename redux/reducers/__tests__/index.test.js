import reducers from '..';

describe('reducers', () => {
  it('initial state', () => {
    const state = reducers(undefined, {});
    expect(state).toEqual({
      modalReducer: {
        visible: false,
        error: []
      },
      requestReducer: {
        amount: '',
        err: [],
        payment: '',
        reason: '',
        data: [],
        loading: false
      }
    });
  });
});
