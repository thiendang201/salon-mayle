import PropTypes from 'prop-types';
import {
  serviceTitle,
  serviceWrapper,
  serviceImage
} from 'src/features/services/styles/serviceItem.module.css';

export const ServiceItem = ({ title, imgUrl, onClick }) => {
  return (
    <div className={serviceWrapper} onClick={onClick}>
      <img className={serviceImage} src={imgUrl} alt='service' />
      <h3 className={serviceTitle}>{title}</h3>
    </div>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  onClick: PropTypes.func
};
