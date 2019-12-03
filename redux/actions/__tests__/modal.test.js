import { openModal } from '../modal';

describe('Tests for modal actions', () => {
  it('should test open_modal action', () => {
    const res = openModal();
    expect(res).toEqual({ type: 'OPEN_MODAL' });
  });
});
