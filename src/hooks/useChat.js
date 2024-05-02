import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from '@/services/firebase';

const useChat = (senderId, receiverId) => {
  // get and check if product exists in store
  const storeChats = useSelector((state) => state.chats); // Get the entire jobs state
  const storeChat = storeChats ? storeChats.items.find((item) => item.id === id) : null;
  const [chat, setChat] = useState(storeChat);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!chat || chat.id !== id) {
          setLoading(true);
          const doc = await firebase.getConversationId(senderId, receiverId);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setChat(data);
              setLoading(false);
            }
          } else {
            setError('Chat not found.');
          }
        }
      } catch (err) {
        if (didMount) {
          setLoading(false);
          setError(err?.message || 'Something went wrong.');
        }
      }
    })();
  }, [id]);

  return { chat, isLoading, error };
};

export default useChat;
