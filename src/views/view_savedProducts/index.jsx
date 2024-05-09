import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase/app'; // Import Firebase
import {
  withRouter, Link, useParams, useHistory
} from 'react-router-dom';
import { useFeaturedProducts, useUserId, useUser } from '@/hooks'; // Import the useUserId hook
import { ProductGrid, ProductList, ProductShowcaseGrid } from '../../components/product';
import { MessageDisplay } from '@/components/common';
import { selectFilter } from '@/selectors/selector';
import 'firebase/firestore';
import Button from 'react-bootstrap/Button';

const SavedProducts = () => {
  const [products, setProducts] = useState([]);
  const userId = useUserId();
  const history = useHistory();
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

        const filteredProducts = productsData.filter((product) => product.saved && product.saved.includes(userId));
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [userId]);

  const BackToSavedList = () => {
    history.push('/saved');
  };


  return (
    <main className="content" style={{ marginTop: '2vw', marginLeft: '2vw' }}>
      <div style={{ width: '97%' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
            <Button
              style={{
                backgroundColor: 'white',
                border: '2px solid #F28290 ',
                borderRadius: '1vw',
                width: 'fit-content',
                height: '4vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '1vw',
                paddingRight: '1vw',
                position: 'relative',
                marginBottom: '2vw'

              }}
              onClick={BackToSavedList}
            >
              <p style={{ color: '#F28290' }}>Назад</p>
            </Button>
            <h2 style={{ marginLeft: '1.5vw', height: '20%' }}> Сохраненные работы</h2>
          </div>
          <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
            {/* <ProductGrid products={userProducts} /> */}
            <ProductShowcaseGrid products={products} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default SavedProducts;
