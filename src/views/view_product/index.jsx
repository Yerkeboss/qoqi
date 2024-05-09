import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faBookmark,
  faShare,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';
import Firebase from '../../services/firebase';
import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useFeaturedProducts,
  useScrollTop,
  useUserId
} from '@/hooks';
import { displayMoney } from '@/helpers/utils';
import { SHOP } from '@/constants/routes';
import { ImageLoader, MessageDisplay } from '@/components/common';

const ViewProduct = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const { addToBasket, isItemOnBasket } = useBasket(id);
  const [isLiked, setIsLiked] = useState(false);
  const liked = product?.liked || [];
  const [isSaved, setIsSaved] = useState(false);
  const saved = product?.saved || [];
  const userId = useUserId();

  useScrollTop();
  useDocumentTitle(`Обзор ${product?.name || 'Item'}`);

  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [rating, setRating] = useState(0); // State to store the rating
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true; // Add a variable to track component mount status
    if (product && product.liked) {
      setIsLiked(product.liked.includes(userId)); // Check if the user liked the product
    }
    if (product && product.saved) {
      setIsSaved(product.saved.includes(userId)); // Check if the user liked the product
    }
    setSelectedImage(product?.image);
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
  }, [product, liked, userId, saved]);

  // Function to handle click on a star
  const handleStarClick = (value) => {
    setRating(value);
  };

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
      setIsLiked(!isLiked); // Toggle isLiked state
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const onSaveClick = async () => {
    if (!product || !userId) return;

    try {
      let updatedSaved = saved; // Create a copy of liked array

      if (isSaved) {
        // If user has already liked the product, remove the like
        updatedSaved = saved.filter((id) => id !== userId);
      } else {
        // If user hasn't liked the product yet, add the like if it doesn't already exist
        if (!saved.includes(userId)) {
          updatedSaved.push(userId);
        }
      }

      // Update the liked array in Firebase
      await Firebase.editProduct(product.id, { saved: updatedSaved });

      // Update likes count directly from the updated liked array
      setIsSaved(!isSaved); // Toggle isLiked state
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };


  const { profile } = useSelector((state) => ({
    profile: state.profile
  }));

  const {
    featuredProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(100);

  const handleAddToBasket = () => {
    addToBasket({
      ...product
    });
  };

  return (
    <main className="content">
      {isLoading && (
        <div className="loader">
          <br />
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      )}
      {error && <MessageDisplay message={error} />}
      {product && !isLoading && (
        <div className="product-view">
          <Link to={SHOP}>
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Вернуться в Маркетплэйс
            </h3>
          </Link>
          <div className="product-modal" style={{ background: 'white' }}>
            <div className="product-modal-image-wrapper">
              <ImageLoader
                alt={product.name}
                className="product-modal-image"
                src={selectedImage}
              />
            </div>
            <div className="product-modal-details">
              <br />
              <h1 className="margin">{product.name}</h1>
              <div style={{ height: '2px', backgroundColor: 'black' }} />
              <div
                style={{
                  border: '2px solid black',
                  height: '4rem',
                  borderRadius: '3rem',
                  width: 'fit-content',
                  paddingLeft: '1vw',
                  paddingRight: '1vw',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  marginTop: '2rem'
                }}
              >
                <p>{product.brand}</p>
              </div>
              <br />
              <br />
              <div
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '1rem'
                }}
              >
                <div
                  className="user-nav-img-wrapper"
                  style={{ marginLeft: '0' }}
                >
                  <img alt="" className="user-nav-img" src={user?.avatar} />
                </div>
                <h5
                  style={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    marginLeft: '2rem'
                  }}
                >
                  {user?.fullname}
                </h5>
                <Button
                  style={{
                    borderRadius: '5rem',
                    background: '#F28290',
                    fontWeight: '500',
                    height: '4rem',
                    width: 'fit-content',
                    paddingLeft: '1vw',
                    paddingRight: '1vw',
                    border: 'none',
                    marginLeft: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <p style={{ color: 'white' }}>
                    Подписаться
                  </p>
                </Button>
              </div>
              <div style={{ marginTop: '2rem' }}>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      cursor: 'pointer',
                      color: index < rating ? '#F28290' : 'gray',
                      fontSize: '3rem'
                    }}
                    onClick={() => handleStarClick(index + 1)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex' }}>
                <Button
                  style={{
                    width: '4rem',
                    height: '4rem',
                    marginTop: '1rem',
                    borderRadius: '5rem',
                    background: isLiked ? 'black' : '#F28290',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none'
                  }}
                  onClick={onLikeClick}
                >
                  <FontAwesomeIcon
                    style={{
                      color: isLiked ? '#F28290' : 'white',
                      width: '2rem',
                      height: '2rem'
                    }}
                    icon={faThumbsUp}
                  />
                </Button>
                <Button
                  style={{
                    width: '4rem',
                    height: '4rem',
                    marginTop: '1rem',
                    borderRadius: '5rem',
                    background: isSaved ? 'black' : '#F28290',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    marginLeft: '1rem'
                  }}
                  onClick={onSaveClick}
                >
                  <FontAwesomeIcon
                    style={{
                      color: isSaved ? '#F28290' : 'white',
                      width: '2rem',
                      height: '2rem'
                    }}
                    icon={faBookmark}
                  />
                </Button>
                <Button
                  style={{
                    width: '4rem',
                    height: '4rem',
                    marginTop: '1rem',
                    borderRadius: '5rem',
                    background: '#F28290',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    marginLeft: '1rem'
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      width: '2rem',
                      height: '2rem'
                    }}
                    icon={faShare}
                  />
                </Button>
                <Button
                  style={{
                    width: '4rem',
                    height: '4rem',
                    marginTop: '1rem',
                    borderRadius: '5rem',
                    background: '#F28290',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    marginLeft: '1rem'
                  }}
                  type="button"
                  className={`button button-small ${
                    isItemOnBasket(product.id)
                      ? 'button-border button-border-gray'
                      : ''
                  }`}
                  onClick={handleAddToBasket}
                >
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      width: '2rem',
                      height: '2rem'
                    }}
                    icon={faCartShopping}
                  />
                  {isItemOnBasket(product.id) ? '+' : ''}
                </Button>
              </div>
              <div style={{ display: 'flex', marginTop: '3rem' }}>
                <div
                  className="user-nav-img-wrapper"
                  style={{ marginLeft: '0' }}
                >
                  <img alt="" className="user-nav-img" src={profile.avatar} />
                </div>
                <Form.Group style={{ marginLeft: '2rem' }}>
                  <Form.Control
                    style={{
                      height: '25rem',
                      width: '50rem',
                      borderRadius: '2rem',
                      textAlign: 'left',
                      paddingLeft: '2rem',
                      paddingBottom: '20rem'
                    }}
                    type="text"
                    placeholder="Поделитесь ваши личными
                    впечатлениями"
                  />
                </Form.Group>
              </div>
              {featuredProducts.some((fp) => fp.id === product.id) && (
                <>
                  <h1>{displayMoney(product.price)}</h1>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ViewProduct;
