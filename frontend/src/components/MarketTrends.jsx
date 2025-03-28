import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MarketTrends({ data }) {
  const chartData = {
    labels: data?.stocks?.map(stock => stock.symbol) || [],
    datasets: [
      {
        label: 'Current Price',
        data: data?.stocks?.map(stock => stock.price) || [],
        borderColor: '#00d09c',
        tension: 0.1
      }
    ]
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Market Trends</Typography>
        <div style={{ height: '300px' }}>
          <Line data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
}
