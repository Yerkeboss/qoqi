import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase/app'; // Import Firebase
import { useFeaturedProducts, useUserId } from '@/hooks'; // Import the useUserId hook
import { ProductGrid, ProductList, ProductShowcaseGrid } from '../../../components/product';
import { MessageDisplay } from '@/components/common';
import { selectFilter } from '@/selectors/selector';
import 'firebase/firestore';
import { ImageLoader } from '@/components/common';

const UserOrdersTab = ({ props, windowWidth, profile }) => {
  const [products, setProducts] = useState([]);
  const userId = useUserId(); // Get the user's ID using the custom hook
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

  const userProducts = products.filter((product) => product.userId === userId);
  if (userProducts.length === 0 && !isLoadingFeatured) {
    return (
      <MessageDisplay
        message={props?.requestStatus?.message || 'Работы не найдены'}
      />
    );
  }
  return (
    <>
      {windowWidth <= 767 ? (
        <div>
          <h3>Портфолио</h3>
          <div className="user-profile-banner-wrapper">
            <ImageLoader
              alt="Banner"
              className="user-profile-banner-img"
              src={profile?.banner}
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

export default UserOrdersTab;
