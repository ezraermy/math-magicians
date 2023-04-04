import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <h1 style={{ padding: '0 5rem' }}>Math Magicians</h1>
    <Outlet />
  </div>
);
export default Layout;
