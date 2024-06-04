/* eslint-disable indent */
import PropType from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, useHistory, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faBriefcase, faLocationDot, faGlobe, faUserPlus, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { displayDate } from '@/helpers/utils';
import { ACCOUNT_EDIT } from '@/constants/routes';
import { ImageLoader } from '@/components/common';
import { useDocumentTitle, useScrollTop, useUser } from '@/hooks';

const Account = ({ windowWidth }) => {
  const { id } = useParams();
  const { user, isLoading, error } = useUser(id);
  const history = useHistory();

  const handleSendMessage = (userId) => {
    history.push(`/chat/${userId}`);
  };

  return (
    <>
      {windowWidth <= 767 ? (
        <Card className="user-profile">
          <div className="user-profile-block">
            <div className="user-profile-banner">
              <div className="user-profile-avatar-wrapper">
                <ImageLoader
                  alt="Avatar"
                  className="user-profile-img"
                  src={user ? user?.avatar : 'null'}
                />
              </div>
              <div className="profile-actions">
                <Button
                  className="user-subscribe-button"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="user-btn-icon" />
                  <p className="user-btn-txt">Подписаться</p>
                </Button>
                <Button
                  className="user-message-button"
                  onClick={() => handleSendMessage(user.id)}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="user-btn-icon2" />
                  <p className="user-btn-txt2">Сообщение</p>
                </Button>
              </div>
            </div>
            <div className="user-profile-details">
              <h2 className="user-profile-name">{user?.fullname}</h2>
              {user?.position ? (
                <p className="user-profile-position">{user?.position}</p>
          ) : (<p className="text-subtle text-italic">Позиция не указана</p>)}
              <div className="profile-icons-container">
                <div className="profile-icons-column">
                  <div className="profile-item">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="profile-icon"
                    />
                    {user?.position ? (
                      <p className="profile-text">{user?.position}</p>
          ) : (<p className="profile-text">Позиция не указана</p>)}
                  </div>
                  <div className="profile-item">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="profile-icon"
                    />
                    {user?.address ? (
                      <p className="profile-text">{user?.address}</p>
          ) : (
            <p className="profile-text">Адрес не указан</p>
          )}
                  </div>
                  <div className="profile-item">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="profile-icon"
                    />
                    {user?.portfolio ? (
                      <p className="profile-text">{user?.portfolio}</p>
          ) : (<p className="profile-text">Портфолио не указан</p>)}
                  </div>

                </div>

              </div>
              <p className="profile-descr">Графический дизайнер с 6+ годами опыта в игровой индустрии</p>
            </div>

          </div>
        </Card>
) : (
  <Card className="user-profile">
    <div className="user-profile-block">
      <div className="user-profile-banner">
        <div className="user-profile-avatar-wrapper">
          <ImageLoader
            alt="Avatar"
            className="user-profile-img"
            src={user ? user?.avatar : 'null'}
          />
        </div>
      </div>
      <div className="user-profile-details">
        <h2 className="user-profile-name">{user?.fullname}</h2>
        {user?.position ? (
          <p className="user-profile-position">{user?.position}</p>
          ) : (<p className="text-subtle text-italic">Позиция не указана</p>)}
        <div className="profile-icons-container">
          <div className="profile-icons-column">
            <div className="profile-item">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="profile-icon"
              />
              {user?.position ? (
                <p className="profile-text">{user?.position}</p>
          ) : (<p className="profile-text">Позиция не указана</p>)}
            </div>
            <div className="profile-item">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="profile-icon"
              />
              {user?.address ? (
                <p className="profile-text">{user?.address}</p>
          ) : (
            <p className="profile-text">Адрес не указан</p>
          )}
            </div>
            <div className="profile-item">
              <FontAwesomeIcon
                icon={faGlobe}
                className="profile-icon"
              />
              {user?.portfolio ? (
                <p className="profile-text">{user?.portfolio}</p>
          ) : (<p className="profile-text">Портфолио не указан</p>)}
            </div>

          </div>

        </div>
        <p className="profile-descr">Графический дизайнер с 6+ годами опыта в игровой индустрии</p>
        <div className="profile-actions">
          <Button
            className="user-subscribe-button"
          >
            <FontAwesomeIcon icon={faUserPlus} className="user-btn-icon" />
            <p className="user-btn-txt">Подписаться</p>
          </Button>
          <Button
            className="user-message-button"
            onClick={() => handleSendMessage(user.id)}
          >
            <FontAwesomeIcon icon={faEnvelope} className="user-btn-icon2" />
            <p className="user-btn-txt2">Сообщение</p>
          </Button>
        </div>
      </div>

    </div>
  </Card>
    )}
    </>
  );
};

Account.propTypes = {
  history: PropType.shape({
    push: PropType.func
  }).isRequired
};

export default withRouter(Account);
