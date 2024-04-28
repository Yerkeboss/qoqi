import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from '@/services/firebase';

const useTender = (id) => {
  // get and check if product exists in store
  const storeTenders = useSelector((state) => state.tenders); // Get the entire jobs state
  const storeTender = storeTenders ? storeTenders.items.find((item) => item.id === id) : null;
  const [tender, setTender] = useState(storeTender);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!tender || tender.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleTender(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setTender(data);
              setLoading(false);
            }
          } else {
            setError('Order not found.');
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

  return { tender, isLoading, error };
};

export default useTender;
