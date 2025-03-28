import { Grid, Box } from '@mui/material';
import PortfolioSummary from '../components/PortfolioSummary';
import MarketTrends from '../components/MarketTrends';
import Watchlist from '../components/Watchlist';

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <MarketTrends />
        </Grid>
        <Grid item xs={12} md={4}>
          <PortfolioSummary />
          <Watchlist />
        </Grid>
      </Grid>
    </Box>
  );
}
