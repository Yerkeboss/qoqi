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
import { selectFilter } from "@/selectors/selector";
import { selectFilterEvents } from "@/selectors/selectorEvent";
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
import { applyFilterEvents } from "../../redux/actions/filterEventActions";
import Carousel from "react-bootstrap/Carousel";

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
      filteredEvents: selectFilterEvents(state.events.items, state.filter),
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
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesToScroll: 1,
  };

  return (
    <main className="content">
      <div className="home">
        <h2>Мероприятия</h2>
        {/* <EventAppliedFilters
          filteredEventsCount={store2.filteredEvents.length}
        /> */}
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
          <Button
            className="filter-buttons"
            onClick={() => handleBrandSelect("")}
          >
            Все категории
          </Button>
          <Button
            className="filter-buttons"
            onClick={() => handleBrandSelect("фотографии")}
          >
            Фотографии
          </Button>
          <Button
            className="filter-buttons"
            onClick={() => handleBrandSelect("музыка")}
          >
            Музыка
          </Button>
          <Button
            className="filter-buttons"
            onClick={() => handleBrandSelect("дизайн")}
          >
            Дизайн
          </Button>
          <Button
            className="filter-buttons"
            onClick={() => handleBrandSelect("иллюстрации")}
          >
            Иллюстрации
          </Button>
          <Button
            className="filter-buttons"
            onClick={() => handleBrandSelect("анимации")}
          >
            Анимации
          </Button>
          <Button
            className="filter-buttons"
            onClick={() => handleBrandSelect("инсталяции")}
          >
            Инсталяции
          </Button>
          <Button
            className="filter-buttons"
            onClick={() => handleBrandSelect("3D")}
          >
            3D
          </Button>
        </div>
        <br />
        <ProductList {...store}>
          <Slider {...settings2}>
            {store.filteredProducts.map((product, index) => (
              <div key={index}>
                <ProductShowcaseGrid products={[product]} />
              </div>
            ))}
          </Slider>
        </ProductList>
   
      </div>
    </main>
  );
};

export default Home;
