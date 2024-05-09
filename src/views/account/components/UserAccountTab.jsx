/* eslint-disable indent */
import PropType from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { displayDate } from '@/helpers/utils';
import { ACCOUNT_EDIT, SAVED } from '@/constants/routes';
import { ImageLoader } from '@/components/common';

const UserProfile = (props) => {
  const profile = useSelector((state) => state.profile);

  return (
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
            <p style={{ marginTop: '0', color: '#12141799' }}>{profile.position}</p>
          ) : (<p className="text-subtle text-italic">Позиция не указана</p>)}
          <div style={{
 display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '5rem'
}}
          >
            <div style={{
 display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
}}
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{ color: '#F28290', fontSize: '2.5rem', marginBottom: '1.5rem' }}
              />
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: '#F28290', fontSize: '2.5rem', marginBottom: '1.5rem' }}
              />
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ color: '#F28290', fontSize: '2.5rem' }}
              />
            </div>
            <div style={{
 display: 'inline-block', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: '2rem'
}}
            >
              {profile.position ? (
                <p style={{ color: '#12141799' }}>{profile.position}</p>
          ) : (<p className="text-subtle text-italic">Позиция не указана</p>)}
              {profile.address ? (
                <p style={{ color: '#12141799' }}>{profile.address}</p>
          ) : (
            <p style={{ color: '#12141799' }} className="text-subtle text-italic">Адрес не указан</p>
          )}
              {profile.portfolio ? (
                <p style={{ color: '#12141799' }}>{profile.portfolio}</p>
          ) : (<p>Портфолио не указан</p>)}
            </div>

          </div>
          <p style={{ marginLeft: '3vw' }}>Графический дизайнер с 6+ годами опыта в игровой индустрии</p>
          <div style={{
 display: 'flex', width: '100%', marginTop: '1rem', justifyContent: 'center', alignItems: 'center'
}}
          >
            <Button
              onClick={() => props.history.push(ACCOUNT_EDIT)}
              style={{
 border: '2px solid #F28290', borderRadius: '2rem', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw'
}}
            >
              <p style={{ color: '#F28290', whiteSpace: 'nowrap' }}>Редактировать профиль</p>
            </Button>
            <Button
              onClick={() => props.history.push(SAVED)}
              style={{
 border: '2px solid #F28290', borderRadius: '2rem', marginLeft: '2rem', width: 'fit-content'
}}
            >
              <p style={{
 color: '#F28290', whiteSpace: 'nowrap', paddingLeft: '1vw', paddingRight: '1vw'
}}
              >
                Сохраненные
              </p>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

UserProfile.propTypes = {
  history: PropType.shape({
    push: PropType.func
  }).isRequired
};

export default withRouter(UserProfile);
