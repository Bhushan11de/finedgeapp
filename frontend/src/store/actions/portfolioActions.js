import { portfolioAPI } from '../../services/api';

export const fetchPortfolio = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PORTFOLIO_REQUEST' });
  try {
    const response = await portfolioAPI.getHoldings();
    dispatch({ type: 'FETCH_PORTFOLIO_SUCCESS', payload: response });
  } catch (error) {
    dispatch({ type: 'FETCH_PORTFOLIO_FAILURE', payload: error.message });
  }
};

export const addToWatchlist = (stock) => async (dispatch) => {
  try {
    const response = await portfolioAPI.addToWatchlist({ stock });
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: response });
  } catch (error) {
    dispatch({ type: 'PORTFOLIO_ERROR', payload: error.message });
  }
};
