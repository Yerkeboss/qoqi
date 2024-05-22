import PropType from 'prop-types';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ImageLoader } from '@/components/common';
import Firebase from '../../services/firebase';
import { useUserId } from '@/hooks';

const ProductFeatured = ({ product }) => {
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState(null);
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [viewsCount, setViewsCount] = useState(0);
  const [isViewed, setIsViewed] = useState(false);
  const userId = useUserId();

  useEffect(() => {
    let isMounted = true; // Add a variable to track component mount status

    if (product && product.userId) {
      Firebase.getUser(product.userId)
        .then((doc) => {
          if (isMounted) { // Check if the component is still mounted before updating state
            if (doc.exists) {
              setUser(doc.data());
            } else {
              console.log('No such user!');
            }
          }
        })
        .catch((error) => {
          console.error('Error getting user:', error);
        });
    }

    return () => {
      isMounted = false; // Cleanup function to update component mount status
    };
  }, [product]);


  const liked = product.liked || [];
  const viewed = product.viewed || [];

  useEffect(() => {
    if (product && product.liked) {
      setLikesCount(product.liked.length);
      setIsLiked(product.liked.includes(userId)); // Check if the user liked the product
    }

    if (product && product.viewed) {
      setViewsCount(product.viewed.length);
      setIsViewed(product.viewed.includes(userId)); // Check if the user liked the product
    }
  }, [product, liked, userId, viewed]); // Include userId as a dependency

  const onLikeClick = async () => {
    if (!product || !userId) return;

    try {
      let updatedLiked = liked; // Create a copy of liked array

      if (isLiked) {
        // If user has already liked the product, remove the like
        updatedLiked = liked.filter((id) => id !== userId);
      } else {
        // If user hasn't liked the product yet, add the like if it doesn't already exist
        if (!liked.includes(userId)) {
          updatedLiked.push(userId);
        }
      }

      // Update the liked array in Firebase
      await Firebase.editProduct(product.id, { liked: updatedLiked });

      // Update likes count directly from the updated liked array
      setLikesCount(updatedLiked.length); // Update likes count directly from liked array length
      setIsLiked(!isLiked); // Toggle isLiked state
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };


  const onClickItem = async () => {
    if (!product || !userId) return;

    if (product.id) {
      history.push(`/product/${product.id}`);
    }

    try {
      let updatedViewed = viewed;

      if (isViewed) {
        updatedViewed = viewed.filter((id) => id !== userId);
      } else if (!viewed.includes(userId)) {
        updatedViewed.push(userId);
      }

      await Firebase.editProduct(product.id, { viewed: updatedViewed });


      setViewsCount(updatedViewed.length);
      setIsViewed(!isViewed);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className="product-display"
        role="presentation"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product-display-img" onClick={onClickItem}>
          {product.image ? (
            <ImageLoader src={product.image} />
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
        {isHovered ? (
          <div className="product-display-details">
            <div style={{ display: 'inline-block', justifyContent: 'center', alignItems: 'center' }} onClick={onClickItem}>
              <h2 className="product-name">{product.name || <Skeleton width={80} />}</h2>
            </div>
            <div className="product-brand" onClick={onClickItem}>
              <p className="product-brand-name">{product.brand || <Skeleton width={40} />}</p>
            </div>
            <div
              className="product-wrap"
            >
              <div style={{
                display: 'flex', justifySelf: 'flex-start', alignItems: 'center'
              }}
              >
                <p className="user-name">{user?.fullname}</p>
              </div>
              <div style={{
                justifySelf: 'flex-end', flexDirection: 'row', display: 'flex', alignItems: 'center'
              }}
              >
                <div style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
                >
                  <FontAwesomeIcon icon={faThumbsUp} className="white-icon" onClick={onLikeClick} />
                  <p className="like-count">
                    {likesCount}
                  </p>
                </div>
                {' '}
                {/* Display likes count */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faEye} className="white-icon" />
                  <p className="like-count">
                    {viewsCount}
                  </p>
                </div>
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
    brand: PropType.string,
    liked: PropType.array // Add liked propType
  }).isRequired
};

export default ProductFeatured;
