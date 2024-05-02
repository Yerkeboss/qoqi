import React, { useState, useEffect, useRef } from 'react';
import {
  useParams, useHistory
} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app';
import { ContactlessOutlined, HistoryRounded } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
import Firebase from '../../services/firebase';
import {
  useUserId, useUser
} from '@/hooks';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';

const Chat = () => {
  const userId = useUserId();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  const { user } = useUser(id);
  const [chats, setChats] = useState([]);
  const [receivers, setReceivers] = useState([]);
  const history = useHistory();

  // Function to handle click on user


  const { profile } = useSelector((state) => ({
    profile: state.profile
  }));
  // await this.db.collection('chats').doc(conversationId).collection('messages').add(messageData);

  useEffect(() => {
    const fetchChatsAndUsers = async () => {
      try {
        // Query chats where the current user is the sender
        const senderChatsSnapshot = await Firebase.db.collection('chats')
          .where('senderId', '==', userId)
          .get();

        // Query chats where the current user is the receiver
        const receiverChatsSnapshot = await Firebase.db.collection('chats')
          .where('receiverId', '==', userId)
          .get();

        const senderChatsData = senderChatsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const receiverChatsData = receiverChatsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Combine sender and receiver chats
        const chatsData = [...senderChatsData, ...receiverChatsData];
        setChats(chatsData);

        // Extract unique senderIds and receiverIds from combined chats
        const senderIds = Array.from(new Set(chatsData.map((chat) => chat.senderId)));
        const receiverIds = Array.from(new Set(chatsData.map((chat) => chat.receiverId)));
        const allUserIds = [...senderIds, ...receiverIds];

        // Fetch users whose ids are in allUserIds
        const usersData = await Promise.all(allUserIds.map((userId) => Firebase.db.collection('users').doc(userId).get()));
        const usersDataFormatted = usersData.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Exclude the currently logged-in user from the list of users
        const filteredUsers = usersDataFormatted.filter((user) => user.id !== userId);

        setReceivers(filteredUsers);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChatsAndUsers();
  }, [userId, chats]);


  const uniqueReceivers = receivers.filter((receiver, index) => receivers.findIndex((r) => r.id === receiver.id) === index);

  console.log('uniqueReceivers', uniqueReceivers);


  console.log('chats', chats);

  console.log('userId', userId);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    await Firebase.sendMessage(userId, user?.id, message);
    setMessage('');
  };

  const handleChoose = (userId) => {
    history.push(`/chat/${userId}`);
  };

  const handleBack = () => {
    history.push('/creators');
  };

  const onClickUser = (userId) => {
    history.push(`/user/${userId}`);
  };


  return (
    <div>
      {user && (
      <div className="main-page">
        <div className="container-page">
          {/* {isLoading && (
          <div className="loader">
            <br />
            <LoadingOutlined style={{ fontSize: '3rem' }} />
          </div>
          )} */}
          <div className="sidebar">
            <div className="navbar">
              <div className="user">
                <Image src={profile?.avatar} alt="" style={{ width: '3vw', height: '3vw' }} />
                <p style={{ color: 'white', fontSize: '1vw' }}>{profile?.fullname}</p>
                <Button
                  style={{
                    width: '4vw', height: '4vw', background: 'white', borderRadius: '1vw'
                  }}
                  onClick={handleBack}
                >
                  <p style={{ color: '#F28290', fontSize: '1vw' }}>Назад</p>
                </Button>
              </div>
            </div>
            {uniqueReceivers?.map((receiver) => {
            // Find all messages between the current user and this receiver
              const messagesWithReceiver = chats.filter((chat) => (chat.senderId === userId && chat.receiverId === receiver.id) || (chat.senderId === receiver.id && chat.receiverId === userId));
              // Sort messages by timestamp to get the latest one
              const sortedMessages = messagesWithReceiver.sort((a, b) => b.timestamp - a.timestamp);
              // Get the last message
              const lastMessage = sortedMessages.length > 0 ? sortedMessages[0].message : '';
              // Get the sender's ID of the last message
              // Determine if the user has been clicked

              return (
                <div className="chats" key={receiver?.id}>
                  <div className="userChat" onClick={() => handleChoose(receiver?.id)}>
                    <Image src={receiver?.avatar} />
                    <div className="userChatInfo">
                      <p>{receiver?.fullname}</p>
                      <p className="lastMessage">{lastMessage}</p>
                    </div>
                    {/* You can add the notification circle logic here */}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="chat">
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#F28290', height: '6vw'
            }}
            >
              <Image src={user?.avatar} style={{ width: '4vw', height: '4vw' }} onClick={() => onClickUser(user.id)} />
              <p style={{ color: 'white', marginLeft: '1vw' }} onClick={() => onClickUser(user.id)}>{user?.fullname}</p>
            </div>
            <div className="messages">
              {/* Sort chats by timestamp before rendering */}
              {chats
                .filter((chat) => (chat.senderId === userId && chat.receiverId === user.id)
      || (chat.senderId === user.id && chat.receiverId === userId))
                .sort((a, b) => a.timestamp - b.timestamp)
                .map((chat, index) => (
                  <div key={index} className={`message ${chat.senderId === userId && 'owner'}`}>
                    <div className="messageInfo">
                      <Image src={chat.senderId === userId ? profile.avatar : user.avatar} alt="" />
                    </div>
                    <div className="messageContent">
                      <p>{chat.message}</p>
                    </div>
                  </div>
                ))}
            </div>


            <div className="input">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%', height: '3vw', borderRadius: '1vw', fontSize: '1.2vw', resize: 'vertical'
                }}
              />
              <Button
                style={{
                  borderRadius: '1vw', marginLeft: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
                className="creators-button"
                onClick={handleSendMessage}
              >
                <p style={{ color: 'white' }}>Отправить</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Chat;
