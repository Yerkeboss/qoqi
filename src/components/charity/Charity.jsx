import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

const Charity = () => (
  <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
    <div className="creators-grid">
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F1.png?alt=media&token=57f6f939-7485-4371-a404-fd75f600effd" />
          </div>
          <div className="creators-details">
            <h2 className="creators-card-name">
              Рука дающего
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @ArtBySamantha
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F2.png?alt=media&token=150f8839-f32b-45da-ad77-b7ac02160fb5" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Colorful Dreams
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @CreativeVisions
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F3.png?alt=media&token=59d84baf-88b1-4166-a67e-4a4ca87fdbe2" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Together We Rise
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @ArtisticImpact
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F4.png?alt=media&token=91a10f4b-922e-4ba5-8118-54d2734e4bb1" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Nature's Beauty
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @VisionaryArtists
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F5.png?alt=media&token=7e5f8ef2-fa96-49e6-bf52-168c61936ba4" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Innovative Minds
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @GlobalArtMovement
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F6.png?alt=media&token=df8dd1c6-4144-4459-8336-ab5cd9d49b2a" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Vibrant Expressions
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @ArtistsForChange
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F7.png?alt=media&token=cc0e74de-da10-49d2-bfc2-bb0757ec2dd4" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Empowerment
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @CreativeExpressions
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F8.png?alt=media&token=33d26b29-9ead-48da-9846-69092154c548" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Unleash Creativity
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @ArtisticJourneys
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F9.png?alt=media&token=567ea672-4a60-44d0-9164-d4308d4b0c03" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Inspired Imagination
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @ImaginativeCreations
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
      <div className="creators-card">
        <div className="creators-card-content">
          <div className="creators-card-img-wrapper">
            <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F10.png?alt=media&token=8a0c0138-f58a-48f4-aecd-f9318dd5bb17" />
          </div>

          <div className="creators-details">
            <h2 className="creators-card-name">
              Art for Change
              {/* <Skeleton width={80} height={100} /> */}
            </h2>
            <h5
              className="creators-card-position"
              style={{ color: '#61788A', fontWeight: '1.5rem' }}
            >
              @InspireArtisticChange
              {/* <Skeleton width={80} height={100} /> */}
            </h5>
          </div>
        </div>
      </div>
    </div>
    <Card style={{ marginLeft: '2rem', display: 'flex', marginTop: '3rem' }}>
      <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F11.png?alt=media&token=667d4346-3011-43d2-bc2f-697e9eb58dbe" />
      <div style={{ marginLeft: '2rem', marginTop: '2rem' }}>
        <Card.Title>Art for Ukraine</Card.Title>
        <Card.Title style={{ color: '#61788A' }}>ArtBySamantha</Card.Title>
      </div>
      <FontAwesomeIcon color="#CCCCCC" icon={faHeart} style={{ position: 'absolute', right: '0', marginTop: '2rem' }} />
    </Card>
    <Card style={{ marginLeft: '2rem', display: 'flex' }}>
      <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F12.png?alt=media&token=4145801f-1ca4-4c6c-becc-3915fa34b44c" />
      <div style={{ marginLeft: '2rem', marginTop: '2rem' }}>
        <Card.Title>Colorful Dreams Fund</Card.Title>
        <Card.Title style={{ color: '#61788A' }}>ArtisticImpact</Card.Title>
      </div>
      <FontAwesomeIcon color="#CCCCCC" icon={faHeart} style={{ position: 'absolute', right: '0', marginTop: '2rem' }} />
    </Card>
    <Card style={{ marginLeft: '2rem', display: 'flex' }}>
      <Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2F13.png?alt=media&token=4e09386f-e0e5-456e-b7fd-1791214dc59c" />
      <div style={{ marginLeft: '2rem', marginTop: '2rem' }}>
        <Card.Title>Empower Youth Through Art</Card.Title>

        <Card.Title style={{ color: '#61788A' }}>CreativeVisions</Card.Title>
      </div>
      <FontAwesomeIcon
        icon={faHeart}
        style={{ position: 'absolute', right: '0', marginTop: '2rem' }}
        color="#CCCCCC"
      />
    </Card>
  </SkeletonTheme>
);
export default Charity;
