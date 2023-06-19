import Drawer from 'react-modern-drawer';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavList } from 'src/common/constants';
import { CgClose } from 'react-icons/cg';
import { MobileGroupNavLink } from 'src/layout/header/components//MobileGroupNavLink';
import 'react-modern-drawer/dist/index.css';
import {
  sideNav,
  custom,
  heading,
  header,
  navList,
  closeButton
} from 'src/layout/header/styles/mobileHeader.module.css';

// https://github.com/Farzin-Firoozi/react-modern-drawer#readme
export const SideNav = ({ isOpen, onClose }) => {
  return (
    <Drawer
      size={300}
      open={isOpen}
      onClose={onClose}
      direction='left'
      className={cx(sideNav, custom)}
      overlayOpacity={0}
      lockBackgroundScroll
    >
      <div className={header}>
        <h2 className={heading}>
          Suplo Hair Salon - Mỹ Phẩm Nam Chính Hãng, Giá tốt nhất thị trường
        </h2>
        <button className={cx('btn', closeButton)} onClick={onClose}>
          <CgClose size={20} />
        </button>
      </div>
      <div className={navList}>
        {NavList.map(({ id, children, ...nav }) => (
          <MobileGroupNavLink key={id} subNavList={children} {...nav} />
        ))}
      </div>
    </Drawer>
  );
};

SideNav.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};
