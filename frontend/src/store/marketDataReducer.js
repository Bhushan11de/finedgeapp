const initialState = {
  stocks: [],
  mutualFunds: [],
  goldPrice: 0,
  loading: false
};

export default function marketDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MARKET_DATA_SUCCESS':
      return {
        ...state,
        stocks: action.payload.stocks,
        mutualFunds: action.payload.mutualFunds,
        goldPrice: action.payload.goldPrice
      };
    default:
      return state;
  }
}
