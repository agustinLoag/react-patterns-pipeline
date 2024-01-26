import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer/Footer'

export const MainLayout = () => {
    return (
        <Grid>
            <NavBar/>
            <Outlet />
            <Footer title='Course Agustin' description='This a short description'/>
        </Grid>
    )
}
