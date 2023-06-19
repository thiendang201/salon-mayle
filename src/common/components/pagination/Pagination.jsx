import ReactPaginate from 'react-paginate';
import cx from 'classnames';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import {
  container,
  pageLink,
  active,
  breakPage,
  hide
} from 'src/common/components/pagination/pagination.module.css';

// https://github.com/AdeleD/react-paginate#readme
export const Pagination = ({
  onPageChange,
  pageRangeDisplayed = 5,
  pageCount = 0,
  nextLabel = <MdKeyboardArrowRight size={24} />,
  previousLabel = <MdKeyboardArrowLeft size={24} />,
  breakLabel = '...',
  containerClassName,
  pageLinkClassName,
  activeClassName,
  previousLinkClassName,
  nextLinkClassName,
  breakClassName,
  currentPage,
  ...others
}) => {
  return (
    <ReactPaginate
      breakLabel={breakLabel}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      onPageChange={onPageChange}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      forcePage={currentPage}
      renderOnZeroPageCount={null}
      containerClassName={cx(container, containerClassName)}
      breakClassName={cx(breakPage, breakClassName)}
      pageLinkClassName={cx(pageLink, pageLinkClassName)}
      activeClassName={cx(active, activeClassName)}
      previousLinkClassName={cx(
        pageLink,
        previousLinkClassName,
        currentPage === 0 && hide
      )}
      nextLinkClassName={cx(
        pageLink,
        nextLinkClassName,
        currentPage === pageCount - 1 && hide
      )}
      {...others}
    />
  );
};

Pagination.propTypes = ReactPaginate.propTypes;
