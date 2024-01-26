import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

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
            variant="contained">Compounds</Button>
        </Link>


      </Toolbar>
    </AppBar>
  );
}

export default NavBar;