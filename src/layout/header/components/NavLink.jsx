import PropTypes from 'prop-types';
import { NavLink as NavLinkComponent } from 'react-router-dom';
import cx from 'classnames';
import { navLink, active } from 'src/layout/header/styles/header.module.css';

export const NavLink = ({ text, path, children, className }) => {
  return (
    <NavLinkComponent
      to={path}
      className={({ isActive }) => cx(navLink, className, isActive && active)}
    >
      {text}
      {children}
    </NavLinkComponent>
  );
};

NavLink.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
