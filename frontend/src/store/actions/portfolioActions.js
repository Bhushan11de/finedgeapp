export const addToWatchlist = (stock) => async (dispatch) => {
  try {
    const response = await portfolioAPI.post('/watchlist', { stock });
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: response.data });
  } catch (error) {
    dispatch({ type: 'PORTFOLIO_ERROR', payload: error.message });
  }
};

export const buyStock = (stock, quantity) => async (dispatch) => {
  dispatch({ type: 'BUY_STOCK_REQUEST' });
  try {
    const response = await portfolioAPI.post('/transactions/buy', { stock, quantity });
    dispatch({ type: 'BUY_STOCK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'BUY_STOCK_FAILURE', payload: error.message });
  }
};
