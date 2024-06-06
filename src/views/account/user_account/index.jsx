/* eslint-disable react/no-multi-comp */
import { LoadingOutlined } from '@ant-design/icons';
import React, {
  lazy, Suspense, useState, useEffect
} from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import { ImageLoader } from '@/components/common';
import { ACCOUNT_EDIT, SAVED } from '@/constants/routes';


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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const history = useHistory();
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);


  return (
    <>
      {showVideo && (
      <div className="video-player-container">
        <FontAwesomeIcon icon={faX} className="close-button" onClick={() => setShowVideo(false)} />
        <video autoPlay loop className="video-wrap">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/videos%2FPROFILE.MOV?alt=media&token=31fa0d9f-8f9e-408b-a07c-b4cff030f1ed"
            type="video/mp4"
            allowFullScreen
          />
        </video>
      </div>
      )}
      {windowWidth <= 767 ? (
        <div
          className="user-profile-container"
        >
          <div className="user-profile-wrap">
            <div className="user-account-container">
              <Suspense fallback={<Loader />}>
                <UserAccountTab windowWidth={windowWidth} />
              </Suspense>
            </div>
            <div className="user-orders-container">
              <Suspense fallback={<Loader />}>
                <UserOrdersTab windowWidth={windowWidth} profile={profile} />
              </Suspense>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default UserAccount;
