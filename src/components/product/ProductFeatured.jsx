import PropType from 'prop-types';
import React, { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ImageLoader } from '@/components/common';

const ProductFeatured = ({ product }) => {
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);

  const { profile, isAuthenticating } = useSelector((state) => ({
    profile: state.profile,
    isAuthenticating: state.app.isAuthenticating
  }));

  const onClickItem = () => {
    if (!product) return;

    if (product.id) {
      history.push(`/product/${product.id}`);
    }
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className="product-display"
        onClick={onClickItem}
        role="presentation"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="product-display-img"
        >
          {product.image ? (
            <ImageLoader
              src={product.image}
            />
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
        {isHovered ? (
          <div className="product-display-details">
            <h2>{product.name || <Skeleton width={80} />}</h2>
            <svg width="100%" height="1" style={{ marginTop: '0.5rem' }}>
              <line
                x1="0"
                y1="0"
                x2="50%"
                y2="0"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <p
              className="text-subtle text-italic"
              style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0.5rem'
              }}
            >
              {product.brand || <Skeleton width={40} />}
            </p>
            <div style={{ display: 'flex' }}>
              <h4>
                {profile.fullname}
              </h4>
              <div style={{ display: 'flex', marginTop: '-0.5rem', marginLeft: '9rem' }}>
                <FontAwesomeIcon icon={faThumbsUp} className="white-icon" />
                <FontAwesomeIcon icon={faEye} className="white-icon" />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </SkeletonTheme>
  );
};

ProductFeatured.propTypes = {
  product: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    brand: PropType.string
  }).isRequired
};

export default ProductFeatured;
