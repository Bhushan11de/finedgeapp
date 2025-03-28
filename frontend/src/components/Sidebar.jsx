import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  AccountBalanceWallet as PortfolioIcon,
  TrendingUp as MarketsIcon,
  WatchLater as WatchlistIcon
} from '@mui/icons-material';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Portfolio', icon: <PortfolioIcon />, path: '/portfolio' },
  { text: 'Markets', icon: <MarketsIcon />, path: '/markets' },
  { text: 'Watchlist', icon: <WatchlistIcon />, path: '/watchlist' }
];

export default function Sidebar() {
  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        {menuItems.map(item => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
