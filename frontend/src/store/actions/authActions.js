import { authAPI } from '../../services/api';

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  try {
    const response = await authAPI.login(credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch({ type: 'REGISTER_REQUEST' });
  try {
    const response = await authAPI.register(userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
  }
};
