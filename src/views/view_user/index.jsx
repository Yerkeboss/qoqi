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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  useScrollTop();
  useDocumentTitle(`Обзор ${user?.fullname || 'Item'}`);


  return (
    <>
      {windowWidth <= 767 ? (
        <main className="content">
          <div
            className="user-profile-container"
          >
            {isLoading && (
            <div className="loader">
              <br />
              <LoadingOutlined style={{ fontSize: '3rem' }} />
            </div>
            )}
            {user && !isLoading && (
            <div className="user-profile-wrap">
              <div className="user-account-container">
                <Suspense fallback={<Loader />}>
                  <Account windowWidth={windowWidth} />
                </Suspense>
              </div>
              <div className="user-orders-container">
                <Suspense fallback={<Loader />}>
                  <Orders windowWidth={windowWidth} />
                </Suspense>
              </div>
            </div>
            )}

          </div>
        </main>
      ) : (
        <main className="content">
          <div
            className="user-profile-container"
          >
            {isLoading && (
            <div className="loader">
              <br />
              <LoadingOutlined style={{ fontSize: '3rem' }} />
            </div>
            )}
            {user && !isLoading && (
            <div className="user-profile-wrap">
              <div className="user-profile-banner-wrapper" style={{ height: '18vw' }}>
                <ImageLoader
                  alt="Banner"
                  className="user-profile-banner-img"
                  src={user?.banner}
                />
              </div>
              <div className="user-orders-container">
                <Suspense fallback={<Loader />}>
                  <Orders />
                </Suspense>
              </div>
            </div>
            )}
            <div className="user-account-container">
              <Suspense fallback={<Loader />}>
                <Account />
              </Suspense>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ViewUser;
