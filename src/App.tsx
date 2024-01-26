
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './pages/Login';
import { MainLayout } from './layout/MainLayout';
import { NotFound } from './pages/404';
import NewsPage from './pages/NewsPage';
import AdminPage from './pages/AdminPage';
import { RequireAuth } from './components/RequireAuth';
import UserPage from './pages/UserPage';
import { WithPaginationTable } from './pages/Pagination';
import CompoundPattern from './pages/CompoundPattern';

const ROLES = {
  'User': 2020,
  'Admin': 2323
}

function App() {


  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        {/* Rutas Publicas */}
        <Route path='/' element={<WithPaginationTable/>} />
        <Route path='/login' element={<LoginView/>} />
        <Route path='/news' element={<CompoundPattern/>} />

        {/* Rutas Privadas */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path='/adminPanel' element={<AdminPage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path='/userPanel' element={<UserPage />} />
        </Route>


        <Route path='*' element={<NotFound/>}/>

      </Route>
    </Routes>
  )
}

export default App
