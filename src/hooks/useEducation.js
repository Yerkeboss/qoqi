import { useDidMount } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from '@/services/firebase';

const useEducation = (id) => {
  // get and check if product exists in store
  const storeEducations = useSelector((state) => state.educations); // Get the entire jobs state
  const storeEducation = storeEducations ? storeEducations.items.find((item) => item.id === id) : null;
  const [education, setEducation] = useState(storeEducation);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!education || education.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleEducation(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setEducation(data);
              setLoading(false);
            }
          } else {
            setError('Education not found.');
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

  return { education, isLoading, error };
};

export default useEducation;
