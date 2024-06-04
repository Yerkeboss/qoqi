import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app'; // Import Firebase
import { useParams } from 'react-router-dom';
import { useFeaturedProducts, useUser } from '@/hooks'; // Import the useUserId hook
import { ProductShowcaseGrid } from '../../components/product';
import { MessageDisplay, ImageLoader } from '@/components/common';
import 'firebase/firestore';


const Orders = ({ windowWidth }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const {
    user, isLoading, error, requestStatus
  } = useUser(id);

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(100);

  useEffect(() => {
    // Fetch products data from Firestore
    const fetchProducts = async () => {
      try {
        const productsCollection = await firebase.firestore().collection('products').get();
        const productsData = productsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const userProducts = products.filter((product) => product.userId === user?.id);
  if (userProducts.length === 0 && !isLoading) {
    return (
      <MessageDisplay
        message={requestStatus?.message || 'Работы не найдены'}
      />
    );
  }
  return (
    <>
      {windowWidth <= 767 ? (
        <div>
          <h3>Портфолио</h3>
          <div className="user-profile-banner-wrapper" style={{ marginBottom: '1rem' }}>
            <ImageLoader
              alt="Banner"
              className="user-profile-banner-img"
              src={user?.banner}
            />
          </div>
          <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
            {/* <ProductGrid products={userProducts} /> */}
            <ProductShowcaseGrid products={userProducts} />
          </div>
        </div>
      ) : (
        <div>
          <h3>Портфолио</h3>
          <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
            {/* <ProductGrid products={userProducts} /> */}
            <ProductShowcaseGrid products={userProducts} />
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
