import React, { useState, useEffect, useRef } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-grid-carousel';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  EventGrid
} from '@/components/eventss';
import {
  ProductShowcaseGrid,

  ProductList
} from '@/components/product';
import { selectFilterEvents } from '@/selectors/selectorEvent';
import { selectFilter } from '@/selectors/selector';
import {
  useDocumentTitle,
  useFeaturedProducts,

  useScrollTop
} from '@/hooks';
import { applyFilter } from '../../redux/actions/filterActions';
import Firebase from '../../services/firebase';
import Sort from './Sort';
import Categories from './Categories';

const Home = () => {
  const navbar = useRef(null);
  useDocumentTitle('Qoqiqaz | Home');
  useScrollTop();
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState('');
  const [activeButton, setActiveButton] = useState('');

  const [rect, setRect] = useState(false);
  const [pop, setPop] = useState(false);
  const [res, setRes] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);


  const {
    featuredProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(100);

  const toggleRect = () => {
    setRect(true);
    setPop(false);
    setRes(false);
  };

  const togglePop = () => {
    setRect(false);
    setPop(true);
    setRes(false);
  };

  const toggleRes = () => {
    setRect(false);
    setPop(false);
    setRes(true);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    dispatch(applyFilter({ brand }));
    setActiveButton(brand);
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
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };


  const handleScroll = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-menu-scrolled');
      } else {
        navbar.current.classList.remove('is-menu-scrolled');
      }
    }
  };

  useEffect(() => {
    toggleRect();
    window.addEventListener('scroll', handleScroll);
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const { events } = await Firebase.getEvents();
        setEvents(events);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [Firebase]);

  return (
    <main className="content">
      <div className="home" style={{ marginTop: '2rem' }}>
        <h2 style={{ marginLeft: '2rem' }}>Мероприятия</h2>
        <Carousel cols={3} rows={1} gap={10} loop scrollSnap>
          {events.map((event, index) => (
            <Carousel.Item key={index}>
              <EventGrid events={[event]} />
            </Carousel.Item>
          ))}
        </Carousel>

        <div style={{ marginLeft: '2rem' }}>
          <h2>Галерея лучших работ</h2>
          <Categories
            activeButton={activeButton}
            handleBrandSelect={handleBrandSelect}
            selectedBrand={selectedBrand}
            MenuProps={MenuProps}
          />
        </div>
        <br />

        <ProductList {...store}>
          <div className="scrollable-carousel">
            <Carousel scrollSnap cols={3} rows={2} gap={2} loop>
              {store.filteredProducts
                .filter(
                  (product) => !featuredProducts.some((fp) => fp.id === product.id)
                )
                .map((product, index) => (
                  <Carousel.Item key={index}>
                    <ProductShowcaseGrid products={[product]} />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
        </ProductList>
        <Sort
          toggleRect={toggleRect}
          togglePop={togglePop}
          toggleRes={toggleRes}
          rect={rect}
          pop={pop}
          res={res}
        />

        <h2 style={{ marginLeft: '2rem' }}>Лучшее за неделю</h2>
        <ProductList {...store}>
          <div className="scrollable-carousel">
            <Carousel scrollSnap cols={2} rows={1} gap={10} loop>
              {store.filteredProducts
                .filter(
                  (product) => !featuredProducts.some((fp) => fp.id === product.id)
                )
                .map((product, index) => (
                  <Carousel.Item key={index}>
                    <ProductShowcaseGrid products={[product]} />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
        </ProductList>
      </div>
    </main>
  );
};

export default Home;
