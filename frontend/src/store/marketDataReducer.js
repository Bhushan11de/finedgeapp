const initialState = {
  stocks: [],
  mutualFunds: [],
  goldPrice: 0,
  indices: {
    nifty50: 0,
    sensex: 0,
    niftyBank: 0
  },
  topGainers: [],
  topLosers: [],
  sectorPerformance: [],
  loading: false,
  error: null,
  lastUpdated: null
};

export default function marketDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MARKET_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };

    case 'FETCH_MARKET_DATA_SUCCESS':
      return {
        ...state,
        ...action.payload,
        loading: false,
        lastUpdated: new Date().toISOString()
      };

    case 'FETCH_MARKET_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case 'UPDATE_STOCK_PRICE':
      return {
        ...state,
        stocks: state.stocks.map(stock => 
          stock.symbol === action.payload.symbol 
            ? { ...stock, ...action.payload } 
            : stock
        )
      };

    case 'UPDATE_GOLD_PRICE':
      return {
        ...state,
        goldPrice: action.payload
      };

    case 'RESET_MARKET_DATA':
      return initialState;

    default:
      return state;
  }
}
