import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar'

export const MainLayout = () => {
    return (
        <Grid>
            <NavBar/>
            <Outlet />
            <Footer title='Course Agustin' description='This a short description'/>
        </Grid>
    )
}
