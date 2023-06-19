import PropTypes from 'prop-types';
import { IoMenu } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import {
  logo,
  mobileHeader
} from 'src/layout/header/styles/mobileHeader.module.css';

export const MobileHeader = ({ onToggle }) => {
  const navigate = useNavigate();

  return (
    <nav className={mobileHeader}>
      <img
        className={logo}
        src='https://theme.hstatic.net/1000181446/1000235350/14/image_header_logo.png?v=1745'
        alt='logo'
        onClick={() => navigate('/')}
      />
      <button className='btn' onClick={onToggle}>
        <IoMenu size={28} />
      </button>
    </nav>
  );
};

MobileHeader.propTypes = {
  onToggle: PropTypes.func
};
