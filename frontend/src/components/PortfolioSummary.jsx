import { Card, CardContent, Typography } from '@mui/material';

export default function PortfolioSummary({ holdings }) {
  const totalValue = holdings.reduce((sum, h) => sum + h.currentValue, 0);
  const totalGain = holdings.reduce((sum, h) => sum + h.gainLoss, 0);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Portfolio Value</Typography>
        <Typography variant="h4" sx={{ color: '#00d09c' }}>
          ₹{totalValue.toLocaleString()}
        </Typography>
        <Typography color={totalGain >= 0 ? 'success.main' : 'error.main'}>
          {totalGain >= 0 ? '↑' : '↓'} ₹{Math.abs(totalGain).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
