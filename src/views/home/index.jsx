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
import Carousel from "react-grid-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  useDocumentTitle("Qoqiqaz | Home");
  useScrollTop();
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [activeButton, setActiveButton] = useState("");

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
  const [all, setAll] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [music, setMusic] = useState(false);
  const [design, setDesign] = useState(false);
  const [illustration, setIllustration] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [installation, setInstallation] = useState(false);
  const [D, setD] = useState(false);

  const allFilter = () => {
    setAll(true);
    setPhoto(false);
    setMusic(false);
    setDesign(false);
  };

  return (
    <main className="content">
      <div className="home">
        <h2 style={{ marginLeft: "2rem" }}>Мероприятия</h2>
        <EventList {...store2}>
          <Carousel scrollSnap={true} cols={3} rows={1} gap={10} loop>
            {store2.filteredEvents.map((event, index) => (
              <Carousel.Item key={index}>
                <EventGrid events={[event]} />
              </Carousel.Item>
            ))}
          </Carousel>
        </EventList>
        <div style={{ marginLeft: "2rem" }}>
          <h2>Галерея лучших работ</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              style={{
                width: "30%",

                backgroundColor: "white",
                borderRadius: "10px",
                height: "5rem",
                border: "1px solid black",
              }}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </Button>
            <Button
              className={
                activeButton === "" ? "filter-buttons-active" : "filter-buttons"
              }
              onClick={() => handleBrandSelect("")}
            >
              Все категории
            </Button>
            <Button
              className={
                activeButton === "фотографии"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("фотографии")}
            >
              Фотографии
            </Button>
            <Button
              className={
                activeButton === "музыка"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("музыка")}
            >
              Музыка
            </Button>
            <Button
              className={
                activeButton === "дизайн"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("дизайн")}
            >
              Дизайн
            </Button>
            <Button
              className={
                activeButton === "иллюстрации"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("иллюстрации")}
            >
              Иллюстрации
            </Button>
            <Button
              className={
                activeButton === "анимации"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("анимации")}
            >
              Анимации
            </Button>
            <Button
              className={
                activeButton === "инсталяции"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("инсталяции")}
            >
              Инсталяции
            </Button>
            <Button
              className={
                activeButton === "3D"
                  ? "filter-buttons-active"
                  : "filter-buttons"
              }
              onClick={() => handleBrandSelect("3D")}
            >
              3D
            </Button>
          </div>
        </div>
        <br />
        <ProductList {...store}>
          <div className="scrollable-carousel">
            <Carousel scrollSnap={true} cols={3} rows={2} gap={2} loop>
              {store.filteredProducts.map((product, index) => (
                <Carousel.Item key={index}>
                  <ProductShowcaseGrid products={[product]} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </ProductList>
        <h2 style={{ marginLeft: "2rem" }}>Лучшее за неделю</h2>
        <ProductList {...store}>
          <div className="scrollable-carousel">
            <Carousel scrollSnap={true} cols={2} rows={1} gap={10} loop>
              {store.filteredProducts.map((product, index) => (
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
