import React, {
  useState, useEffect, useRef, useMemo
} from 'react';
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
  const [brandOption, setBrandOption] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {
    featuredProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(200);

  const otherProducts = products.filter(
    (product) => !featuredProducts.some((fp) => fp.id === product.id)
  );


  const sortProductsByUserPreference = (products) => {
    // Map to track the count of brands visited by users
    const brandVisitsMap = new Map();

    // Iterate through the products to track brand visits
    products.forEach((product) => {
      if (product.viewed) {
        product.viewed.forEach((userId) => {
          const { brand } = product;
          // Increment the count of the brand visited by this user
          brandVisitsMap.set(brand, (brandVisitsMap.get(brand) || 0) + 1);
        });
      }
    });

    // Sort products based on the brands visited by users
    const sorted = [...products].sort((a, b) => {
      const brandAVisits = brandVisitsMap.get(a.brand) || 0;
      const brandBVisits = brandVisitsMap.get(b.brand) || 0;
      return brandBVisits - brandAVisits;
    });

    return sorted;
  };

  console.log('selectedBrand', selectedBrand);
  console.log('activeButton', activeButton);

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
    setBrandOption(true);
  };


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
  const store = useSelector(
    (state) => ({
      filteredProducts: selectFilter(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading
    }),
    shallowEqual
  );

  const sortedProducts = useMemo(() => {
    let filteredProducts = otherProducts; // Start with all otherProducts

    // Apply sorting based on user preferences, likes/views, or date added
    if (rect) {
      filteredProducts = sortProductsByUserPreference(filteredProducts);
    } else if (pop) {
      filteredProducts = filteredProducts.sort((a, b) => {
        const likesA = a.liked.length;
        const likesB = b.liked.length;
        const viewsA = a.viewed.length;
        const viewsB = b.viewed.length;
        return (likesB + viewsB) - (likesA + viewsA);
      });
    } else if (res) {
      filteredProducts = sortProductsByDateAdded(filteredProducts);
    }
    if (selectedBrand) {
      filteredProducts = filteredProducts.filter((product) => product.brand.toLowerCase() === selectedBrand);
    }

    return filteredProducts;
  }, [rect, pop, res, otherProducts, selectedBrand]);

  useEffect(() => {
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
    toggleRect();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              {rect || res || pop ? sortedProducts.map((product, index) => (
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
              {rect || res || pop ? sortedProducts.map((product, index) => (
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
