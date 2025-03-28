import { marketAPI } from '../../services/api';

export const fetchMarketData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_MARKET_REQUEST' });
  try {
    const [stocks, indices] = await Promise.all([
      marketAPI.getStocks(),
      marketAPI.getIndices()
    ]);
    dispatch({
      type: 'FETCH_MARKET_SUCCESS',
      payload: { stocks, indices }
    });
  } catch (error) {
    dispatch({ type: 'FETCH_MARKET_FAILURE', payload: error.message });
  }
};
