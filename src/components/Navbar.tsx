import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to='/'>
          <Button 
            variant="contained">Login</Button>
        </Link>
        <Link to='/adminPanel'>
          <Button 
            variant="contained">Admin</Button>
        </Link>
        <Link to='/userPanel'>
          <Button 
            variant="contained">User</Button>
        </Link>

        <Link to='/news'>
          <Button 
            variant="contained">News</Button>
        </Link>


      </Toolbar>
    </AppBar>
  );
}

export default NavBar;