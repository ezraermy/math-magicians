import { NavLink } from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculators', text: 'Calculators' },
    { path: 'quote', text: 'Quote' },
  ];
  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? 'rgba(252, 156, 23, 1)' : undefined,
              })}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
