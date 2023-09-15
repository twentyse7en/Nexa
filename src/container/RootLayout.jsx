import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

const RootLayout = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path='*' element={<PrivateRoute />} />
      </Routes>
    </Router>
  );
}

export default RootLayout;
