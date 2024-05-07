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
      style={{
        width: '100%', display: 'flex', position: 'relative', marginLeft: '2rem', marginTop: '3rem', height: '100%', marginBottom: '-100vw'
      }}
    >
      <div style={{
        flex: '1', width: '70%'
      }}
      >
        <div className="user-profile-banner-wrapper" style={{ height: '18vw' }}>
          <ImageLoader
            alt="Banner"
            className="user-profile-banner-img"
            src={profile.banner}
          />
        </div>
        <div>
          <Suspense fallback={<Loader />}>
            <UserOrdersTab />
          </Suspense>
        </div>
      </div>
      <div style={{
        display: 'flex', marginLeft: '2rem', width: '30%', height: '50rem'
      }}
      >
        <Suspense fallback={<Loader />}>
          <UserAccountTab />
        </Suspense>
      </div>
    </div>
  );
};

export default UserAccount;
