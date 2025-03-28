const initialState = {
  holdings: [],
  watchlist: [],
  loading: false,
  error: null
};

export default function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PORTFOLIO_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PORTFOLIO_SUCCESS':
      return { 
        ...state, 
        holdings: action.payload.holdings, 
        watchlist: action.payload.watchlist, 
        loading: false 
      };
    case 'ADD_TO_PORTFOLIO':
      return {
        ...state,
        holdings: [...state.holdings, action.payload]
      };
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      };
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(item => item.id !== action.payload)
      };
    case 'PORTFOLIO_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
