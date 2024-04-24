import PropType from 'prop-types';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ImageLoader } from '@/components/common';
import Firebase from '../../services/firebase';

const ProductFeatured = ({ product }) => {
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    if (product && product.userId) {
      Firebase.getUser(product.userId)
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data());
          } else {
            console.log('No such user!');
          }
        })
        .catch((error) => {
          console.error('Error getting user:', error);
        });
    }
  }, [product]);

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
            <div style={{
              display: 'inline-block', justifyContent: 'center', alignItems: 'center'
            }}
            >
              <h2>{product.name || <Skeleton width={80} />}</h2>
            </div>
            <div className="product-brand">
              <p>
                {product.brand || <Skeleton width={40} />}
              </p>
            </div>
            <div style={{
              width: '26vw',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'space-between',
              marginTop: '1vw'
            }}
            >
              <h4 style={{ flex: '5' }}>
                {user?.fullname}
              </h4>
              <div style={{
                justifySelf: 'flex-end'
              }}
              >
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
