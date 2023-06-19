import PropTypes from 'prop-types';
import { NavLink } from 'src/layout/header/components/NavLink';
import { TiArrowSortedDown } from 'react-icons/ti';
import {
  groupLink,
  groupList,
  groupButton
} from 'src/layout/header/styles/header.module.css';

export const GroupNavLink = ({ subNavList, direction, ...navProps }) => {
  const isGroup = subNavList?.length > 0;

  return (
    <div className={groupLink}>
      <NavLink {...navProps} className={groupButton}>
        {isGroup && <TiArrowSortedDown size={18} data-direction={direction} />}
      </NavLink>
      <div className={groupList} data-direction={direction}>
        {subNavList?.map(({ id, children, ...nav }) => (
          <GroupNavLink key={id} subNavList={children} {...nav} />
        ))}
      </div>
    </div>
  );
};

const GroupShape = {
  id: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  direction: PropTypes.oneOf(['bottom', 'right'])
};

export const GroupNavShape = {
  ...GroupShape,
  subNavList: PropTypes.arrayOf(PropTypes.shape(GroupShape))
};

GroupNavLink.propTypes = GroupNavShape;
