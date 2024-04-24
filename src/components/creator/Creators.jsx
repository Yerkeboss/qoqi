import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app'; // Import Firebase
import 'firebase/firestore'; // Import Firestore

const Creators = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from Firestore
    const fetchUsers = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  console.log('users', users);
  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
      <div className="creators-grid">
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2020.png?alt=media&token=277abe48-2b09-492c-b1ab-ae04e4ed0f32" />
            </div>
            <div className="creators-details">
              <h2 className="creators-card-name">
                Anuar Muhamedi
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2031.png?alt=media&token=c1933a78-173f-4aed-980e-09e978eb0cf4" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Aigerim Abisheva
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2032.png?alt=media&token=cadf5462-02f0-4210-806c-516428424d70" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Aijan Tulegenova
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2033.png?alt=media&token=5b21cbe4-2548-4ae2-982b-81e0113e4760" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Arai Kassymova
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2034.png?alt=media&token=4eb0dbe1-c38d-4f8e-a6b9-b0fabee35675" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Amanjol Suleimenov
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2035.png?alt=media&token=dd40a4f7-3f2f-4aaf-900d-6ef2d5164cb8" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Abyz Tulegenov
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2036.png?alt=media&token=dacd24fa-d40f-4d04-aeaf-f86e2374f435" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Agzam Kudaibergenov
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2037.png?alt=media&token=f706f108-22c4-4f27-9fab-5d8988104378" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Bibigul Temirbekova
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2038.png?alt=media&token=bc923b3e-bb4d-43e9-a651-ad8b11ff3ffe" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Abai Abishev
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-card">
          <div className="creators-card-content">
            <div className="creators-card-img-wrapper">
              <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2039.png?alt=media&token=3b40f319-27c3-4158-9538-1e93534330e5" />
            </div>

            <div className="creators-details">
              <h2 className="creators-card-name">
                Baglan Iskakova
                {/* <Skeleton width={80} height={100} /> */}
              </h2>
              <h5 className="creators-card-position">
                Графический дизайнер
                {/* <Skeleton width={80} height={100} /> */}
              </h5>
              <Button className="creators-button">
                {' '}
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                Сообщение
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Creators;

