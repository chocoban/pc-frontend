import reducers from '..';

describe('reducers', () => {
  it('initial state', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({
      modalReducer: {
        visible: false,
        error: []
      }
    });
  });
})
