import {
  OPEN_MODAL, OPEN_MODAL_SUCCESS,
  OPEN_MODAL_FAILURE, CLOSE_MODAL,
  CLOSE_MODAL_SUCCESS
} from '../constants';

export const openModal = () => ({ type: OPEN_MODAL });

export const openModalSuccess = () => ({
  type: OPEN_MODAL_SUCCESS,
  visible: true
});

export const openModalFailure = err => ({
  type: OPEN_MODAL_FAILURE,
  err
});

export const closeModal = () => ({ type: CLOSE_MODAL });

export const closeModalSuccess = () => ({
  type: CLOSE_MODAL_SUCCESS,
  visible: false
});
