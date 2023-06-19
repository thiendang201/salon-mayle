import { useWindowScroll } from '@uidotdev/usehooks';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from 'src/common/components/breadcrumbs/Breadcrumbs';
import { Pagination } from 'src/common/components/pagination/Pagination';
import { ServiceItem } from 'src/features/services/components/serviceItem';
import {
  header,
  heading,
  breadcrumbLink,
  breadcrumbs,
  body,
  subHeading,
  serviceList,
  paginateContainer,
  paginateWrapper
} from 'src/features/services/styles/services.module.css';

const mock = [
  {
    id: Date.now() + Math.floor(Math.random() * 10000),
    title: 'CẠO MẶT ÊM ÁI - GỘI XẢ KỸ CÀNG',
    imgUrl: 'https://product.hstatic.net/1000181446/product/dv3_large.png'
  },
  {
    id: Date.now() + Math.floor(Math.random() * 10000),
    title: 'CẠO MẶT ÊM ÁI - GỘI XẢ KỸ CÀNG',
    imgUrl: 'https://product.hstatic.net/1000181446/product/dv3_large.png'
  },
  {
    id: Date.now() + Math.floor(Math.random() * 10000),
    title: 'CẠO MẶT ÊM ÁI - GỘI XẢ KỸ CÀNG',
    imgUrl: 'https://product.hstatic.net/1000181446/product/dv3_large.png'
  },
  {
    id: Date.now() + Math.floor(Math.random() * 10000),
    title: 'CẠO MẶT ÊM ÁI - GỘI XẢ KỸ CÀNG',
    imgUrl: 'https://product.hstatic.net/1000181446/product/dv3_large.png'
  },
  {
    id: Date.now() + Math.floor(Math.random() * 10000),
    title: 'CẠO MẶT ÊM ÁI - GỘI XẢ KỸ CÀNG',
    imgUrl: 'https://product.hstatic.net/1000181446/product/dv3_large.png'
  },
  {
    id: Date.now() + Math.floor(Math.random() * 10000),
    title: 'CẠO MẶT ÊM ÁI - GỘI XẢ KỸ CÀNG',
    imgUrl: 'https://product.hstatic.net/1000181446/product/dv3_large.png'
  }
];

export const Services = () => {
  const navigate = useNavigate();
  const [services] = useState(mock);
  const [searchParams, setSearchParams] = useSearchParams();
  const [, scrollTo] = useWindowScroll();
  const [currentPageIndex, setCurrentPageIndex] = useState(() => {
    const page = +searchParams.get('page') ?? 1;
    return page > 0 ? page - 1 : 0;
  });

  const updatePageURL = useCallback(
    (page) => {
      searchParams.set('page', page);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const onPageChange = ({ selected }) => {
    scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    setCurrentPageIndex(selected);
  };

  const onClickService = (id) => () => {
    navigate(`/service/${id}/details`);
  };

  useEffect(() => {
    updatePageURL(currentPageIndex + 1);
  }, [currentPageIndex, updatePageURL, scrollTo]);

  return (
    <div>
      <section
        className={header}
        style={{
          '--bg-url': `url(${'https://theme.hstatic.net/1000181446/1000235350/14/image_breadcrumb_bg.png?v=1737'})`
        }}
      >
        <h1 className={heading}>CÁC DỊCH VỤ</h1>
        <Breadcrumbs className={breadcrumbs}>
          <Link className={breadcrumbLink} to='/'>
            Trang chủ
          </Link>
          <Link className={breadcrumbLink} to='/services'>
            Các dịch vụ
          </Link>
        </Breadcrumbs>
      </section>
      <section className={body}>
        <h2 className={heading}>TRỞ THÀNH QUÝ ÔNG LỊCH LÃM CÙNG SUPLO</h2>
        <p className={subHeading}>
          Suplo hạnh phúc khi mỗi ngày đem đến cho phái mạnh toàn cầu sự tự tin
          tỏa sáng, sức khoẻ, niềm vui thư giãn; bằng những sản phẩm, dịch vụ
          chăm sóc sức khỏe, da mặt chuyên nghiệp - tạo kiểu tóc thời trang -
          gói gọn trong quy trình khoa học 30phút (không phải chờ đợi lâu) với
          giá thành rẻ nhất thế giới.
        </p>
        <div className={serviceList}>
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              onClick={onClickService(service.id)}
              {...service}
            />
          ))}
        </div>
        <div className={paginateWrapper}>
          <Pagination
            currentPage={currentPageIndex}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={10}
            onPageChange={onPageChange}
            containerClassName={paginateContainer}
          />
        </div>
      </section>
    </div>
  );
};
