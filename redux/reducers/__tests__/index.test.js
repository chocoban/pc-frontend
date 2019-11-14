import reducers from '..';


describe('reducers', () => {
  it('reducers', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({modalReducer:{visible:false,error:[]}});
  });
})
