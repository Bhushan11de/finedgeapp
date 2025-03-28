import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#0f4a3a' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ 
          flexGrow: 1, 
          color: '#00d09c',
          textDecoration: 'none'
        }}>
          Groww Clone
        </Typography>
        
        <Button color="inherit" component={Link} to="/markets">Markets</Button>
        <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
        
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        
        <IconButton color="inherit" component={Link} to="/profile">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
