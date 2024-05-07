/* eslint-disable indent */
import PropType from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, useHistory, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { displayDate } from '@/helpers/utils';
import { ACCOUNT_EDIT } from '@/constants/routes';
import { ImageLoader } from '@/components/common';
import { useDocumentTitle, useScrollTop, useUser } from '@/hooks';

const Account = () => {
  const { id } = useParams();
  const { user, isLoading, error } = useUser(id);
  const history = useHistory();

  const handleSendMessage = (userId) => {
    history.push(`/chat/${userId}`);
  };

  return (
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
            <p style={{ marginTop: '0', color: '#12141799' }}>{user?.position}</p>
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
              {user?.position ? (
                <p style={{ color: '#12141799' }}>{user?.position}</p>
          ) : (<p className="text-subtle text-italic">Позиция не указана</p>)}
              {user?.address ? (
                <p style={{ color: '#12141799' }}>{user?.address}</p>
          ) : (
            <p style={{ color: '#12141799' }} className="text-subtle text-italic">Адрес не указан</p>
          )}
              {user?.portfolio ? (
                <p style={{ color: '#12141799' }}>{user?.portfolio}</p>
          ) : (<p>Портфолио не указан</p>)}
            </div>

          </div>
          <p style={{ marginLeft: '3vw' }}>Графический дизайнер с 6+ годами опыта в игровой индустрии</p>
          <div style={{
 display: 'flex', width: '100%', marginTop: '1rem', justifyContent: 'center', alignItems: 'center'
}}
          >
            <Button
              style={{ border: '2px solid #F28290', borderRadius: '2rem', width: '100%' }}
            >
              <p style={{ color: '#F28290', width: '100%' }}>Подписаться</p>
            </Button>
            <Button
              style={{
 border: '2px solid #F28290', borderRadius: '2rem', marginLeft: '2rem', width: '50%'
}}
              onClick={() => handleSendMessage(user.id)}
            >
              <p style={{ color: '#F28290', width: '100%' }}>Сообщение</p>
            </Button>
          </div>
        </div>

      </div>
    </Card>
  );
};

Account.propTypes = {
  history: PropType.shape({
    push: PropType.func
  }).isRequired
};

export default withRouter(Account);
