import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

export default function OrderModal({ stock }) {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({
    type: 'BUY',
    quantity: 1,
    price: stock?.price || 0
  });

  const handleSubmit = () => {
    // Implement order submission
    setOpen(false);
  };

  return (
    <>
      <Button 
        variant="contained" 
        sx={{ bgcolor: '#00d09c', mt: 2 }}
        onClick={() => setOpen(true)}
      >
        {order.type === 'BUY' ? 'Buy' : 'Sell'} {stock?.symbol}
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h6">{order.type} {stock?.symbol}</Typography>
          
          <Select
            value={order.type}
            onChange={(e) => setOrder({...order, type: e.target.value})}
            fullWidth
            sx={{ my: 2 }}
          >
            <MenuItem value="BUY">Buy</MenuItem>
            <MenuItem value="SELL">Sell</MenuItem>
          </Select>

          <TextField
            label="Quantity"
            type="number"
            fullWidth
            value={order.quantity}
            onChange={(e) => setOrder({...order, quantity: e.target.value})}
          />

          <Button 
            fullWidth 
            variant="contained" 
            sx={{ bgcolor: '#00d09c', mt: 2 }}
            onClick={handleSubmit}
          >
            Place Order
          </Button>
        </Box>
      </Modal>
    </>
  );
}
