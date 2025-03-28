import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

export default function Watchlist({ stocks }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Your Watchlist</Typography>
        <List>
          {stocks.map(stock => (
            <ListItem key={stock.symbol}>
              <Typography>{stock.symbol}</Typography>
              <Typography sx={{ ml: 'auto' }}>
                ₹{stock.price.toLocaleString()}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
