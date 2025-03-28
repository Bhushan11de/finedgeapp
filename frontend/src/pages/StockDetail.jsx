import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Tabs, Tab, Paper } from '@mui/material';
import { stockAPI } from '../services/api';
import StockChart from '../components/StockChart';
import OrderModal from '../components/OrderModal';

export default function StockDetail() {
  const { symbol } = useParams();
  const [stock, setStock] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await stockAPI.getStockDetails(symbol);
      setStock(data);
    };
    fetchData();
  }, [symbol]);

  return (
    <Box sx={{ p: 3 }}>
      {stock && (
        <>
          <Typography variant="h4">{stock.name} ({stock.symbol})</Typography>
          <Typography>Current Price: ₹{stock.price}</Typography>
          
          <Paper sx={{ mt: 3 }}>
            <StockChart symbol={symbol} />
          </Paper>

          <Tabs value={tabValue} onChange={(e, newVal) => setTabValue(newVal)}>
            <Tab label="Overview" />
            <Tab label="Financials" />
            <Tab label="News" />
          </Tabs>

          <OrderModal stock={stock} />
        </>
      )}
    </Box>
  );
}
