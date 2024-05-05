import React, { useState, useEffect, useRef } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-grid-carousel';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import firebase from 'firebase/app';
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
import Sort from './Sort';
import Categories from './Categories';
import 'firebase/firestore';

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
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const {
    featuredProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(200);

  const otherProducts = products.filter(
    (product) => !featuredProducts.some((fp) => fp.id === product.id)
  );

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
    // Sort products by dateAdded when "Недавние" button is clicked
    setSortedProducts(sortProductsByDateAdded(otherProducts));
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    dispatch(applyFilter({ brand }));
    setActiveButton(brand);

    // Filter products by brand from the products state
    const filteredProductsByBrand = products.filter((product) => product.brand === brand);

    // Sort filtered products by dateAdded
    const sortedProductsByDate = sortProductsByDateAdded(filteredProductsByBrand);

    // Update sortedProducts state
    if (res) {
      setSortedProducts(sortedProductsByDate);
    } else {
      const filteredProducts = store.filteredProducts.filter(
        (product) => !featuredProducts.some((fp) => fp.id === product.id)
      );

      const sortedProductsByBrand = filteredProducts.filter((product) => product.brand === brand);
      const sortedProducts = sortProductsByDateAdded(sortedProductsByBrand);
      setSortedProducts(sortedProducts);
    }
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

  console.log('store.Filter', store.filteredProducts);


  const sortProductsByDateAdded = (products) => {
    const sorted = [...products].sort((a, b) => {
      const dateA = new Date(parseInt(a.dateAdded));
      const dateB = new Date(parseInt(b.dateAdded));
      return dateB - dateA;
    });
    return sorted;
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

  useEffect(() => {
    toggleRect();
    window.addEventListener('scroll', handleScroll);
    // Fetch products data from Firestore
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const eventsCollection = await firebase.firestore().collection('events').get();
        const eventsData = eventsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsCollection = await firebase.firestore().collection('products').get();
        const productsData = productsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchEvents();
    fetchProducts();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('otherProducts', otherProducts);
  console.log('products', products);

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
              {res ? sortedProducts.map((product, index) => (
                <Carousel.Item key={index}>
                  <ProductShowcaseGrid products={[product]} />
                </Carousel.Item>
              )) : store.filteredProducts
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
            <Carousel scrollSnap cols={3} rows={1} gap={2} loop>
              {res ? sortedProducts.map((product, index) => (
                <Carousel.Item key={index}>
                  <ProductShowcaseGrid products={[product]} />
                </Carousel.Item>
              )) : store.filteredProducts
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
