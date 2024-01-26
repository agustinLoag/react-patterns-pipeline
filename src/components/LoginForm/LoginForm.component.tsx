/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Box, Typography, TextField, FormControlLabel, Checkbox, Button, Paper, Link } from '@mui/material'
import React from 'react'
import WithControllerForm from '../../hocs/controlledForm.component'
import { useLogin } from './useLoginForm'

interface UseLoginResult {
    formValues: any;
    handleChange: (val: unknown, key: string) => void;
}
const LoginForm: React.FC<UseLoginResult> = ({ formValues, handleChange }) => {
    const { handleSubmit } = useLogin(formValues);
    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={() => console.log('Hola')} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={({ target: { value } }) => handleChange(value, 'email')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={({ target: { value } }) => handleChange(value, 'password')}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button

                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleSubmit()}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}


export const LoginFormControlled = WithControllerForm(LoginForm, {
    email: '',
    password: ''
})
