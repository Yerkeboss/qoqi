import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from '@/services/firebase';

const useCharity2 = (id) => {
  // get and check if product exists in store
  const storeCharities2 = useSelector((state) => state.charities2); // Get the entire jobs state
  const storeCharity2 = storeCharities2 ? storeCharities2.items.find((item) => item.id === id) : null;
  const [charity2, setCharity2] = useState(storeCharity2);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!charity2 || charity2.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleCharity2(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setCharity2(data);
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

  return { charity2, isLoading, error };
};

export default useCharity2;
