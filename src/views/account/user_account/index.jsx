/* eslint-disable react/no-multi-comp */
import { LoadingOutlined } from '@ant-design/icons';
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import { ImageLoader } from '@/components/common';

const UserAccountTab = lazy(() => import('../components/UserAccountTab'));
const UserOrdersTab = lazy(() => import('../components/UserOrdersTab'));

const Loader = () => (
  <div className="loader" style={{ minHeight: '80vh', background: 'red' }}>
    <LoadingOutlined />
    <h6>Loading ... </h6>
  </div>
);

const UserAccount = () => {
  useScrollTop();
  useDocumentTitle('Мой аккаунт | Qoqiqaz');

  const profile = useSelector((state) => state.profile);

  return (
    <div
      className="user-profile-container"
    >
      <div className="user-profile-wrap">
        <div className="user-profile-banner-wrapper">
          <ImageLoader
            alt="Banner"
            className="user-profile-banner-img"
            src={profile.banner}
          />
        </div>
        <div className="user-orders-container">
          <Suspense fallback={<Loader />}>
            <UserOrdersTab />
          </Suspense>
        </div>
      </div>
      <div className="user-account-container">
        <Suspense fallback={<Loader />}>
          <UserAccountTab />
        </Suspense>
      </div>
    </div>
  );
};

export default UserAccount;
