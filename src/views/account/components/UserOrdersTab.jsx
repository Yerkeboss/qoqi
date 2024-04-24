import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase/app'; // Import Firebase
import { useFeaturedProducts, useUserId } from '@/hooks'; // Import the useUserId hook
import { ProductGrid, ProductList, ProductShowcaseGrid } from '../../../components/product';
import { MessageDisplay } from '@/components/common';
import { selectFilter } from '@/selectors/selector';
import 'firebase/firestore'; // Import Firestore

const UserOrdersTab = (props) => {
  const [products, setProducts] = useState([]);
  const userId = useUserId(); // Get the user's ID using the custom hook
  const {
    isLoading, requestStatus, children
  } = props;
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
  if (userProducts.length === 0 && !isLoading) {
    return (
      <MessageDisplay
        message={requestStatus?.message || 'Работы не найдены'}
      />
    );
  }
  return (
    <div className="loader" style={{ height: '80vh' }}>
      <h3>Портфолио</h3>
      <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '110%' }}>
        {/* <ProductGrid products={userProducts} style={{ height: '100%' }} /> */}
        <ProductShowcaseGrid products={userProducts} />
      </div>
    </div>
  );
};

export default UserOrdersTab;
