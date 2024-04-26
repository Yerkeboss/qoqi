/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
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

  const [art, setArt] = useState(false);
  const [creator, setCreator] = useState(false);
  const [vac, setVac] = useState(false);
  const [order, setOrder] = useState(false);
  const [tender, setTender] = useState(false);
  const [croud, setCroud] = useState(false);
  const [charity, setCharity] = useState(false);

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(100);

  const toggleArt = () => {
    setArt(true);
    setCreator(false);
    setVac(false);
    setOrder(false);
    setTender(false);
    setCroud(false);
    setCharity(false);
  };
  const toggleCreator = () => {
    setArt(false);
    setCreator(true);
    setVac(false);
    setOrder(false);
    setTender(false);
    setCroud(false);
    setCharity(false);
  };
  const toggleVac = () => {
    setArt(false);
    setCreator(false);
    setVac(true);
    setOrder(false);
    setTender(false);
    setCroud(false);
    setCharity(false);
  };
  const toggleOrder = () => {
    setArt(false);
    setCreator(false);
    setVac(false);
    setOrder(true);
    setTender(false);
    setCroud(false);
    setCharity(false);
  };
  const toggleTender = () => {
    setArt(false);
    setCreator(false);
    setVac(false);
    setOrder(false);
    setTender(true);
    setCroud(false);
    setCharity(false);
  };
  const toggleCroud = () => {
    setArt(false);
    setCreator(false);
    setVac(false);
    setOrder(false);
    setTender(false);
    setCroud(true);
    setCharity(false);
  };
  const toggleCharity = () => {
    setArt(false);
    setCreator(false);
    setVac(false);
    setOrder(false);
    setTender(false);
    setCroud(false);
    setCharity(true);
  };

  useEffect(() => {
    // Ensure that the first button is clicked when the page is just opened
    toggleArt();
  }, []);

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
          {art && (
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>Маркетплейс</h2>
          )}
          {creator && (
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
          )}

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
              onClick={toggleArt}
              style={{
                backgroundColor: art ? '#F28290' : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: art ? 'none' : '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem'
              }}
            >
              <p style={{
                color: art ? 'white' : 'black'

              }}
              >
                Купить работу
              </p>
            </Button>
            <Button
              onClick={toggleCreator}
              style={{
                backgroundColor: creator ? '#F28290' : 'white',
                color: creator ? 'white' : 'black',
                border: creator ? 'none' : '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: creator ? 'white' : 'black' }}> Найти креатора</p>
            </Button>
            <Button
              onClick={toggleVac}
              style={{
                backgroundColor: vac ? '#F28290' : 'white',
                color: vac ? 'white' : 'black',
                border: vac ? 'none' : '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: vac ? 'white' : 'black' }}> Вакансии</p>

            </Button>
            <Button
              onClick={toggleOrder}
              style={{
                backgroundColor: order ? '#F28290' : 'white',
                color: order ? 'white' : 'black',
                border: order ? 'none' : '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: order ? 'white' : 'black' }}>            Разместить заказ</p>

            </Button>
            <Button
              onClick={toggleTender}
              style={{
                backgroundColor: tender ? '#F28290' : 'white',
                color: tender ? 'white' : 'black',
                border: tender ? 'none' : '1px solid black',
                borderRadius: '1vw',
                width: '100%',
                height: '4rem',
                marginLeft: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: tender ? 'white' : 'black' }}>Конкурсы/тендеры</p>
            </Button>
            <Button
              onClick={toggleCroud}
              style={{
                backgroundColor: croud ? '#F28290' : 'white',
                color: croud ? 'white' : 'black',
                border: croud ? 'none' : '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: croud ? 'white' : 'black' }}>Краудсорсинг</p>
            </Button>
            <Button
              onClick={toggleCharity}
              style={{
                backgroundColor: charity ? '#F28290' : 'white',
                color: charity ? 'white' : 'black',
                border: charity ? 'none' : '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: charity ? 'white' : 'black' }}>Благотворительность</p>
            </Button>
          </div>
          <div style={{
            width: '97.5%', marginLeft: '2rem'
          }}
          >
            {art && (
            <ProductGrid products={featuredProducts} />
            )}
          </div>
          <div style={{ width: '98%' }}>
            {creator && <Creators />}
            {vac && <Vacancies />}
            {order && <MasterForm />}
            {tender && <Tender />}
            {croud && <Croud />}
            {charity && <Charity />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
