import { Card, CardContent, Typography, Button } from '@mui/material';

export default function StockCard({ stock }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{stock.symbol}</Typography>
        <Typography>₹{stock.price}</Typography>
        <Button variant="contained">Invest</Button>
      </CardContent>
    </Card>
  );
}
