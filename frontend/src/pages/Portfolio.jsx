import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolio } from '../store/actions/portfolioActions';
import PortfolioSummary from '../components/PortfolioSummary';
import Watchlist from '../components/Watchlist';

export default function Portfolio() {
  const dispatch = useDispatch();
  const { holdings, watchlist } = useSelector(state => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>My Portfolio</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <PortfolioSummary holdings={holdings} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Watchlist stocks={watchlist} />
        </Grid>
      </Grid>
    </Container>
  );
}
