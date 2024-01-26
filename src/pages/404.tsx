import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export const NotFound = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">

      <Typography variant="h2" component="h1" gutterBottom>
        Ooops!
      </Typography>
      <Typography variant="body1">   Nothing can't be found here.</Typography>
    </Container>

  </Box>
  )
}
