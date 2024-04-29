import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from '@/services/firebase';

const useCroud = (id) => {
  // get and check if product exists in store
  const storeCrouds = useSelector((state) => state.crouds); // Get the entire jobs state
  const storeCroud = storeCrouds ? storeCrouds.items.find((item) => item.id === id) : null;
  const [croud, setCroud] = useState(storeCroud);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!croud || croud.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleCroud(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setCroud(data);
              setLoading(false);
            }
          } else {
            setError('Croud not found.');
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

  return { croud, isLoading, error };
};

export default useCroud;
