import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
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

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Nifty 50',
    data: [17000, 17400, 17200, 17800, 18200],
    borderColor: '#00d09c',
    tension: 0.1
  }]
};

export default function MarketTrends() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Market Trends
        </Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
}
