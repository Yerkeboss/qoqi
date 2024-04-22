/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';
import FeaturedProduct from './ProductFeatured';

const ProductShowcase = ({ products }) => (
  <div className="product-display-grid">
    {products.length === 0
      ? new Array(12).fill({}).map((product, index) => (
        <FeaturedProduct
              // eslint-disable-next-line react/no-array-index-key
          key={`product-skeleton ${index}`}
          product={product}
        />
      ))
      : products.map((product) => (
        <FeaturedProduct key={product.id} product={product} />
      ))}
  </div>
);

ProductShowcase.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropType.array.isRequired
};

export default ProductShowcase;
