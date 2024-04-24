import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';

const Creators = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from Firestore
    const fetchUsers = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const filteredUsers = usersData.filter((user) => user.role !== 'ADMIN' && user.person);
      setUsers(filteredUsers);
    };

    fetchUsers();
  }, []);

  const onClickUser = (userId) => {
    history.push(`/user/${userId}`);
  };

  // Function to handle sending a message
  const handleSendMessage = (user) => {
    // Implement your logic here to handle sending a message to the user
    console.log('Sending message to:', user.name);
    // Redirect to a messaging page or implement your messaging functionality
    // history.push(`/message/${user.id}`);
  };


  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
      <div className="creators-grid">
        {users?.map((user) => (
          <div className="creators-card" key={user?.id} onClick={() => onClickUser(user.id)}>
            <div className="creators-card-content">
              <div className="creators-card-img-wrapper">
                <Image src={user?.avatar} />
              </div>
              <div className="creators-details">
                <h2 className="creators-card-name">{user.fullname}</h2>
                <h5 className="creators-card-position">{user.position}</h5>
                <Button className="creators-button" onClick={() => handleSendMessage(user)}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                  Сообщение
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default Creators;
