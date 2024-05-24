/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { ProductGrid } from '@/components/product';
import {
  useDocumentTitle,
  useFeaturedProducts,
  useScrollTop
} from '@/hooks';
import { selectFilter } from '@/selectors/selector';
import Creators from '../../components/creator/Creators';
import Vacancies from '../../components/jobs/Vacancies';
import Tender from '../../components/tender/Tender';
import Croud from '../../components/croud/Croud';
import Charity from '../../components/charity/Charity';
import MasterForm from '../../components/order/MasterForm';

const Shop = () => {
  useDocumentTitle('Shop | Qoqiqaz');
  useScrollTop();
  const history = useHistory();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(100);

  const onClickArt = () => {
    history.push('/shop');
  };

  const onClickCreators = () => {
    history.push('/creators');
  };

  const onClickVacancies = () => {
    history.push('/vacancies');
  };

  const onClickOrder = () => {
    history.push('/order');
  };

  const onClickTender = () => {
    history.push('/tenderList');
  };

  const onClickCroud = () => {
    history.push('/croudList');
  };

  const onClickCharity = () => {
    history.push('/charityList');
  };

  const store = useSelector(
    (state) => ({
      filteredProducts: selectFilter(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading
    }),
    shallowEqual
  );

  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="shop-title">Маркетплейс</h2>
          <div
            className="buttons-container"
          >
            <Button
              onClick={onClickArt}
              className="shop-button-active"
            >
              <p className="shop-text-active">
                Купить работу
              </p>
            </Button>
            <Button
              onClick={onClickCreators}
              className="shop-button"
            >
              <p className="shop-text">
                Найти креатора
              </p>
            </Button>
            <Button
              onClick={onClickVacancies}
              className="shop-button"
            >
              <p className="shop-text">
                Вакансии
              </p>

            </Button>
            <Button
              onClick={onClickOrder}
              className="shop-button"
            >
              <p className="shop-text">
                Разместить заказ
              </p>

            </Button>
            <Button
              onClick={onClickTender}
              className="shop-button"
            >
              <p className="shop-text">
                Конкурсы/тендеры
              </p>
            </Button>
            <Button
              onClick={onClickCroud}
              className="shop-button"
            >
              <p className="shop-text">
                Краудсорсинг
              </p>
            </Button>
            <Button
              onClick={onClickCharity}
              className="shop-button"
            >
              <p className="shop-text">
                Благотворительность
              </p>
            </Button>
          </div>
          <div className="shop-products">
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
