import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from '@/services/firebase';

const useOrder = (id) => {
  // get and check if product exists in store
  const storeJobs = useSelector((state) => state.jobs); // Get the entire jobs state
  const storeJob = storeJobs ? storeJobs.items.find((item) => item.id === id) : null;
  const [job, setJob] = useState(storeJob);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!job || job.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleOrder(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setJob(data);
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

  return { job, isLoading, error };
};

export default useOrder;
