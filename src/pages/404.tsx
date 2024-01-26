import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
