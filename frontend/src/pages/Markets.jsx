import { CircularProgress, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMarketData } from '../store/actions/marketActions';
import StockCard from '../components/StockCard';

export default function Markets() {
  const dispatch = useDispatch();
  const { stocks, loading } = useSelector(state => state.marketData);

  useEffect(() => {
    dispatch(fetchMarketData());
  }, [dispatch]);

  if (loading) return <CircularProgress />;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Market Overview</Typography>
      <Grid container spacing={3}>
        {stocks.map(stock => (
          <Grid item xs={12} sm={6} md={4} key={stock.symbol}>
            <StockCard stock={stock} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
