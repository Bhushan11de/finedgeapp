import { combineReducers } from 'redux';
import auth from './authReducer';
import portfolio from './portfolioReducer';
import marketData from './marketDataReducer';

export default combineReducers({
  auth,
  portfolio,
  marketData
});
