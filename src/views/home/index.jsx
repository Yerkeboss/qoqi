import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "@/constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import bannerImg from "@/images/banner-girl.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilter } from "@/selectors/selectorEvent";
import { AppliedFilters, ProductGrid, ProductList } from "@/components/product";
import {
  EventAppliedFilters,
  EventGrid,
  EventList,
} from "@/components/eventss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { applyFilter } from "../../redux/actions/filterActions";

const Home = () => {
  useDocumentTitle("Qoqiqaz | Home");
  useScrollTop();
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    dispatch(applyFilter({ brand }));
  };

  const store = useSelector(
    (state) => ({
      filteredProducts: selectFilter(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  const store2 = useSelector(
    (state) => ({
      filteredEvents: selectFilter(state.events.items, state.filter),
      events: state.events,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended,
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        <h2>Мероприятия</h2>
        <EventAppliedFilters
          filteredEventsCount={store2.filteredEvents.length}
        />
        <EventList {...store2}>
          <Slider {...settings}>
            {store2.filteredEvents.map((event) => (
              <div key={event.id}>
                <EventGrid events={[event]} />
              </div>
            ))}
          </Slider>
        </EventList>

        <h2>Галерея лучших работ</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button onClick={() => handleBrandSelect("")}>Все категории</Button>
          <Button onClick={() => handleBrandSelect("фотографии")}>
            Фотографии
          </Button>
          <Button onClick={() => handleBrandSelect("музыка")}>Музыка</Button>
          <Button onClick={() => handleBrandSelect("дизайн")}>Дизайн</Button>
          <Button onClick={() => handleBrandSelect("иллюстрации")}>
            Иллюстрации
          </Button>
          <Button onClick={() => handleBrandSelect("анимации")}>
            Анимации
          </Button>
          <Button onClick={() => handleBrandSelect("инсталяции")}>
            Инсталяции
          </Button>
          <Button onClick={() => handleBrandSelect("3D")}>3D</Button>
        </div>
        <br />
        <AppliedFilters filteredProductsCount={store.filteredProducts.length} />
        <ProductList {...store}>
          <ProductGrid products={store.filteredProducts} />
        </ProductList>
        {/* <div className="display">
          <div className="display-header">
            <h1>Featured Products</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {errorFeatured && !isLoadingFeatured ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div> */}
        {/* <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {errorRecommended && !isLoadingRecommended ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
