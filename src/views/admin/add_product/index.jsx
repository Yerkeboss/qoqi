import { LoadingOutlined } from '@ant-design/icons';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import { addProduct } from '@/redux/actions/productActions';

const ProductForm = lazy(() => import('../components/ProductForm'));

const AddProduct = () => {
  useScrollTop();
  useDocumentTitle('Add New Product | Qoqiqaz');
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const onSubmit = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <main
      className="content"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-5vw'
      }}
    >
      <div className="product-form-container">
        <Suspense
          fallback={(
            <div className="loader" style={{ minHeight: '80vh' }}>
              <br />
              <LoadingOutlined />
            </div>
        )}
        >
          <ProductForm
            isLoading={isLoading}
            onSubmit={onSubmit}
            product={{
              name: '',
              brand: '',
              price: 0,
              maxQuantity: 0,
              description: '',
              keywords: [],
              sizes: [],
              image: '',
              isFeatured: false,
              isRecommended: false,
              availableColors: [],
              imageCollection: []
            }}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default withRouter(AddProduct);
