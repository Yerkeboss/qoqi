import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const useUserId = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return userId;
};

export default useUserId;
