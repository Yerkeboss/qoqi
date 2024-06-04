/* eslint-disable indent */
import PropType from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { displayDate } from '@/helpers/utils';
import { ACCOUNT_EDIT, SAVED } from '@/constants/routes';
import { ImageLoader } from '@/components/common';

const UserProfile = ({ props, windowWidth }) => {
  const profile = useSelector((state) => state.profile);
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
                  src={profile.avatar}
                />
              </div>
              <div className="profile-actions">
                <Button
                  onClick={() => props.history.push(ACCOUNT_EDIT)}
                  className="profile-button"
                >
                  <p className="profile-btn-txt">Редактировать</p>
                </Button>
                <Button
                  onClick={() => props.history.push(SAVED)}
                  className="profile-button"
                >
                  <p className="profile-btn-txt">
                    Сохраненные
                  </p>
                </Button>
              </div>
            </div>
            <div className="user-profile-details">
              <h2 className="user-profile-name">{profile.fullname}</h2>
              {profile.position ? (
                <p className="user-profile-position">{profile.position}</p>
          ) : (<p className="text-subtle text-italic">Позиция не указана</p>)}
              <div className="profile-icons-container">
                <div className="profile-icons-column">
                  <div className="profile-item">
                    <FontAwesomeIcon icon={faBriefcase} className="profile-icon" />
                    {profile.position ? (
                      <p className="profile-text">{profile.position}</p>
      ) : (
        <p className="profile-text">Позиция не указана</p>
      )}
                  </div>
                  <div className="profile-item">
                    <FontAwesomeIcon icon={faLocationDot} className="profile-icon" />
                    {profile.address ? (
                      <p className="profile-text">{profile.address}</p>
      ) : (
        <p className="profile-text">Адрес не указан</p>
      )}
                  </div>
                  <div className="profile-item">
                    <FontAwesomeIcon icon={faGlobe} className="profile-icon" />
                    {profile.portfolio ? (
                      <p className="profile-text">{profile.portfolio}</p>
      ) : (
        <p className="profile-text">Портфолио не указан</p>
      )}
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
            src={profile.avatar}
          />
        </div>
      </div>
      <div className="user-profile-details">
        <h2 className="user-profile-name">{profile.fullname}</h2>
        {profile.position ? (
          <p className="user-profile-position">{profile.position}</p>
          ) : (<p className="text-subtle text-italic">Позиция не указана</p>)}
        <div className="profile-icons-container">
          <div className="profile-icons-column">
            <div className="profile-item">
              <FontAwesomeIcon icon={faBriefcase} className="profile-icon" />
              {profile.position ? (
                <p className="profile-text">{profile.position}</p>
      ) : (
        <p className="profile-text">Позиция не указана</p>
      )}
            </div>
            <div className="profile-item">
              <FontAwesomeIcon icon={faLocationDot} className="profile-icon" />
              {profile.address ? (
                <p className="profile-text">{profile.address}</p>
      ) : (
        <p className="profile-text">Адрес не указан</p>
      )}
            </div>
            <div className="profile-item">
              <FontAwesomeIcon icon={faGlobe} className="profile-icon" />
              {profile.portfolio ? (
                <p className="profile-text">{profile.portfolio}</p>
      ) : (
        <p className="profile-text">Портфолио не указан</p>
      )}
            </div>

          </div>
        </div>
        <p className="profile-descr">Графический дизайнер с 6+ годами опыта в игровой индустрии</p>
        <div className="profile-actions">
          <Button
            onClick={() => props.history.push(ACCOUNT_EDIT)}
            className="profile-button"
          >
            <p className="profile-btn-txt">Редактировать</p>
          </Button>
          <Button
            onClick={() => props.history.push(SAVED)}
            className="profile-button"
          >
            <p className="profile-btn-txt">
              Сохраненные
            </p>
          </Button>
        </div>
      </div>
    </div>
  </Card>
    )}
    </>
  );
};

UserProfile.propTypes = {
  history: PropType.shape({
    push: PropType.func
  }).isRequired
};

export default withRouter(UserProfile);
