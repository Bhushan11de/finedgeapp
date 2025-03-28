import { portfolioAPI } from '../../services/api';

export const fetchPortfolio = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PORTFOLIO_REQUEST' });
  try {
    const response = await portfolioAPI.getHoldings();
    dispatch({ type: 'FETCH_PORTFOLIO_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'PORTFOLIO_ERROR', payload: error.message });
  }
};

export const addToPortfolio = (investment) => async (dispatch) => {
  try {
    const response = await portfolioAPI.addInvestment(investment);
    dispatch({ type: 'ADD_TO_PORTFOLIO', payload: response.data });
  } catch (error) {
    dispatch({ type: 'PORTFOLIO_ERROR', payload: error.message });
  }
};
