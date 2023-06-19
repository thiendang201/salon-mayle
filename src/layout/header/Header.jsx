import cx from 'classnames';
import { FiClock } from 'react-icons/fi';
import { FaPhone } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { NavList } from 'src/common/constants';
import { GroupNavLink } from 'src/layout/header/components/GroupNavLink';
import {
  headerTop,
  logo,
  openMsg,
  contacts,
  clockIcon,
  phoneIcon,
  mailIcon,
  bookBtn,
  navList
} from 'src/layout/header/styles/header.module.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className=''>
      <div className={headerTop}>
        <div onClick={() => navigate('/')}>
          <img
            className={logo}
            src='https://theme.hstatic.net/1000181446/1000235350/14/image_header_logo.png?v=1745'
            alt='logo'
          />
        </div>
        <div>
          <p className={openMsg}>
            <FiClock size={16} className={clockIcon} />
            Giờ mở cửa: Từ 8:00 - 22:00 tất cả các ngày trong tuần (trừ ngày lễ,
            ngày Tết).
          </p>
        </div>
        <div className={contacts}>
          <a href='tel:0934 323 882'>
            <FaPhone size={16} className={phoneIcon} /> 0934 323 882
          </a>
          <a href='mailto:support@suplo.vn'>
            <GrMail size={16} className={mailIcon} />
            support@suplo.vn
          </a>
        </div>
        <div>
          <button className={cx('btn primary', bookBtn)}>ĐẶT LỊCH</button>
        </div>
      </div>
      <div className={navList}>
        {NavList.map(({ id, children, ...navProps }) => (
          <GroupNavLink key={id} subNavList={children} {...navProps} />
        ))}
      </div>
    </header>
  );
};
