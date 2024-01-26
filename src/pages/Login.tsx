import { Grid, Box, Typography, TextField, FormControlLabel, Checkbox, Button, Paper, Link } from '@mui/material'
import React from 'react'
import { LoginFormControlled } from '../components/LoginForm/LoginForm.component'

export const LoginView = () => {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <LoginFormControlled />
            
        </Grid>
    )
}
