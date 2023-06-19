import cx from 'classnames';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { MobileNavLink } from './MobileNavLink';
import { useToggle } from '@uidotdev/usehooks';
import { GroupNavShape } from 'src/layout/header/components/GroupNavLink';
import {
  groupLink,
  collapseButton,
  groupList,
  groupButton,
  active
} from 'src/layout/header/styles/mobileHeader.module.css';

export const MobileGroupNavLink = ({ subNavList, ...navLinkProps }) => {
  const [on, toggle] = useToggle(false);
  const isGroup = subNavList?.length > 0;

  return (
    <div className={groupLink}>
      <div className={groupButton}>
        <MobileNavLink {...navLinkProps} />
        {isGroup && (
          <button className={cx('btn', collapseButton)} onClick={toggle}>
            {on ? <IoRemove size={20} /> : <IoAdd size={20} />}
          </button>
        )}
      </div>
      <div
        className={cx(groupList, on && active)}
        style={{ maxHeight: on ? 500 : 0 }}
      >
        {subNavList?.map(({ id, children, ...nav }) => (
          <MobileGroupNavLink key={id} subNavList={children} {...nav} />
        ))}
      </div>
    </div>
  );
};

MobileGroupNavLink.propTypes = GroupNavShape;
