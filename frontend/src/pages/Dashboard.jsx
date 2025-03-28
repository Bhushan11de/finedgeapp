import React, { useEffect } from 'react';
import { 
  Grid, 
  Box, 
  Typography, 
  CircularProgress,
  useMediaQuery,
  useTheme 
} from '@mui/material';
import { 
  PortfolioSummary, 
  Watchlist, 
  MarketTrends 
} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolio } from '../store/actions/portfolioActions';
import { useGetMarketDataQuery } from '../store/apiSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // RTK Query for market data
  const { 
    data: marketData, 
    isLoading: marketLoading, 
    error: marketError 
  } = useGetMarketDataQuery();
  
  // Redux state for portfolio
  const { 
    holdings, 
    watchlist, 
    loading: portfolioLoading, 
    error: portfolioError 
  } = useSelector(state => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  if (portfolioLoading || marketLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (portfolioError || marketError) {
    return (
      <Box p={3}>
        <Typography color="error">
          {portfolioError?.message || marketError?.message || 'Error loading data'}
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={isMobile ? 1 : 3}>
      <Typography variant="h4" gutterBottom>
        Investment Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <PortfolioSummary 
            holdings={holdings} 
            totalInvestment={calculateTotal(holdings)}
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Watchlist 
            items={watchlist} 
            marketData={marketData}
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <MarketTrends 
            data={marketData} 
            loading={marketLoading}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

// Helper function to calculate total portfolio value
function calculateTotal(holdings) {
  return holdings.reduce((total, item) => total + (item.quantity * item.currentPrice), 0);
}
