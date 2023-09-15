import {  Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';


const PrivateRoute = () => {
  return (
    <Routes>
      <Route path={'/dashboard'} element={<Dashboard />}/>
    </Routes>
  )
}

export default PrivateRoute;
