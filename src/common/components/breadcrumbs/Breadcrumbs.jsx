import PropTypes from 'prop-types';
import cx from 'classnames';
import { Children, Fragment } from 'react';
import { breadcrumbs } from 'src/common/components/breadcrumbs/breadcrumbs.module.css';

export const Breadcrumbs = ({ children, separate = '/', className = '' }) => {
  const childList = Children.toArray(children);

  return (
    <div className={cx(breadcrumbs, className)}>
      {childList.map((item, index) => (
        <Fragment key={index}>
          {item}
          {index < childList.length - 1 && separate}
        </Fragment>
      ))}
    </div>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  separate: PropTypes.node,
  className: PropTypes.string
};
