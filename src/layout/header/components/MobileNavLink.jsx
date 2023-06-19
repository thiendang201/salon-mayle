import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import {
  mobileNavLink,
  active
} from 'src/layout/header/styles/mobileHeader.module.css';

export const MobileNavLink = ({ text, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => cx(mobileNavLink, isActive && active)}
    >
      {text}
    </NavLink>
  );
};

MobileNavLink.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string
};
