import React, { useState, useEffect } from 'react';
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop
} from '@/hooks';
import { ProductShowcaseGrid, ProductGrid } from '../../../components/product';
import { MessageDisplay } from '@/components/common';
// Just add this feature if you want :P

const UserOrdersTab = () => {
  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(100);

  return (
    <div className="loader" style={{ height: '80vh' }}>
      <h3>Портфолио</h3>
      <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '100%' }}>
        <ProductGrid products={featuredProducts} style={{ height: '100%' }} />
      </div>
    </div>
  );
};

export default UserOrdersTab;
