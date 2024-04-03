import { CheckOutlined } from "@ant-design/icons";
import { ImageLoader } from "@/components/common";
import PropType from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";

const EventItem = ({ event }) => {
  const history = useHistory();

  const onClickItem = () => {
    if (!event) return;

    if (event.id) {
      history.push(`/event/${event.id}`);
    }
  };

  // const itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;

  // const handleAddToBasket = () => {
  //   if (addToBasket) addToBasket({ ...product, selectedSize: product.sizes[0] });
  // };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!event.id ? "product-loading" : ""}`}
        style={{
          border: event ? "1px solid #a6a5a5" : "",
          boxShadow: event ? "0 10px 15px rgba(0, 0, 0, .07)" : "none",
        }}
      >
        {/* {itemOnBasket && (
          <CheckOutlined className="fa fa-check product-card-check" />
        )} */}
        <div
          className="product-card-content"
          onClick={onClickItem}
          role="presentation"
        >
          <div className="product-card-img-wrapper">
            {event.image ? (
              <ImageLoader
                alt={event.name}
                className="product-card-img"
                src={event.image}
              />
            ) : (
              <Skeleton width="100%" height="90%" />
            )}
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {event.name || <Skeleton width={80} />}
            </h5>
            {/* <p className="product-card-brand">
              {product.brand || <Skeleton width={60} />}
            </p> */}
            {/* <h4 className="product-card-price">
              {product.price ? (
                displayMoney(product.price)
              ) : (
                <Skeleton width={40} />
              )}
            </h4> */}
          </div>
        </div>
        {/* {event.id && (
          <button
            className={`product-card-button button-small button button-block`}
            onClick={handleAddToBasket}
            type="button"
          >
            {itemOnBasket ? "Remove from basket" : "Add to basket"}
          </button>
        )} */}
      </div>
    </SkeletonTheme>
  );
};

// ProductItem.defaultProps = {
//   isItemOnBasket: undefined,
//   addToBasket: undefined,
// };

EventItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  event: PropType.object.isRequired,
  // isItemOnBasket: PropType.func,
  // addToBasket: PropType.func,
};

export default EventItem;
