import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from '@/services/firebase';

const useCharity = (id) => {
  // get and check if product exists in store
  const storeCharities = useSelector((state) => state.charities); // Get the entire jobs state
  const storeCharity = storeCharities ? storeCharities.items.find((item) => item.id === id) : null;
  const [charity, setCharity] = useState(storeCharity);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!charity || charity.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleCharity(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setCharity(data);
              setLoading(false);
            }
          } else {
            setError('Charity not found.');
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

  return { charity, isLoading, error };
};

export default useCharity;
