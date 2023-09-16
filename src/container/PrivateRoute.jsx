import {  Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Transactions from './Transactions';


const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('userId');

  if (!isLoggedIn) {
    return <Navigate to={'/login'} />;
  }
  return (
    <div className='flex'>
      <Navbar/>
      <div className="h-[100vh] bg-[#F4F3FA] flex-1 pt-8 px-12">
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/dashboard'} element={<Dashboard />}/>
          <Route path={'/transactions'} element={<Transactions />} />
        </Routes>
    </div>
    </div>
  )
}

export default PrivateRoute;
