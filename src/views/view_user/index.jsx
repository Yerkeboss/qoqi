/* eslint-disable react/no-multi-comp */
import { LoadingOutlined } from '@ant-design/icons';
import React, {
  lazy, Suspense, useEffect, useRef, useState
} from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDocumentTitle, useScrollTop, useUser } from '@/hooks';
import { ImageLoader } from '@/components/common';
import Orders from './Orders';

const Account = lazy(() => import('./Account'));


const Loader = () => (
  <div className="loader" style={{ minHeight: '80vh', background: 'red' }}>
    <LoadingOutlined />
    <h6>Loading ... </h6>
  </div>
);

const ViewUser = () => {
  const { id } = useParams();
  const { user, isLoading, error } = useUser(id);

  useScrollTop();
  useDocumentTitle(`Обзор ${user?.fullname || 'Item'}`);


  return (

    <div
      className="content"
      style={{
        width: '100%', display: 'flex', position: 'relative', marginLeft: '2rem', marginTop: '3rem', height: '80vw'
      }}
    >
      {isLoading && (
      <div className="loader">
        <br />
        <LoadingOutlined style={{ fontSize: '3rem' }} />
      </div>
      )}
      {user && !isLoading && (
      <div style={{
        flex: '1', width: '70%'
      }}
      >
        <div className="user-profile-banner-wrapper" style={{ height: '18vw' }}>
          <ImageLoader
            alt="Banner"
            className="user-profile-banner-img"
            src={user?.banner}
          />
        </div>
        <div>
          <Suspense fallback={<Loader />}>
            <Orders />
          </Suspense>
        </div>
      </div>
      )}
      <div style={{
        display: 'flex', marginLeft: '2rem', width: '30%', height: '50rem'
      }}
      >
        <Suspense fallback={<Loader />}>
          <Account />
        </Suspense>
      </div>
    </div>

  );
};

export default ViewUser;
