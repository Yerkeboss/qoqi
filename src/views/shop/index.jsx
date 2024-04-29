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

  const onClickJob = (jobId) => {
    history.push(`/job/${jobId}`);
  };

  const onClickUser = (userId) => {
    history.push(`/user/${userId}`);
  };

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

          <h2 style={{ marginLeft: '2rem', height: '20%' }}>Маркетплейс</h2>

          {/* {creator && (
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>Найти креатора</h2>
          )}
          {vac && <h2 style={{ marginLeft: '2rem', height: '20%' }}>Вакансии</h2>}
          {order && (
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>
            Разместить заказ
          </h2>
          )}
          {tender && (
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>
            Конкурсы/тендеры
          </h2>
          )}
          {croud && (
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>Краудсорсинг</h2>
          )}
          {charity && (
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>
            Благотворительность
          </h2>
          )} */}

          {/* <section className="product-list-wrapper"> */}
          <div
            style={{
              display: 'flex',
              marginBottom: '4rem',
              marginLeft: '1.5rem',
              width: '97.5%'
            }}
          >
            <Button
              onClick={onClickArt}
              style={{
                backgroundColor: '#F28290',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem'
              }}
            >
              <p style={{
                color: 'white'

              }}
              >
                Купить работу
              </p>
            </Button>
            <Button
              onClick={onClickCreators}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}> Найти креатора</p>
            </Button>
            <Button
              onClick={onClickVacancies}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}> Вакансии</p>

            </Button>
            <Button
              onClick={onClickOrder}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Разместить заказ</p>

            </Button>
            <Button
              onClick={onClickTender}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                width: '100%',
                height: '4rem',
                marginLeft: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Конкурсы/тендеры</p>
            </Button>
            <Button
              onClick={onClickCroud}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Краудсорсинг</p>
            </Button>
            <Button
              onClick={onClickCharity}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Благотворительность</p>
            </Button>
          </div>
          <div style={{
            width: '97.5%', marginLeft: '2rem'
          }}
          >
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
