import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


const Croud = () => (
  <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
    <Card style={{ marginLeft: '2rem', width: '100%' }}>
      <Image style={{ width: '100%' }} src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2047.png?alt=media&token=ed3eccac-cfce-495f-af50-8b5a9b660856" />
    </Card>
    <Card style={{ marginLeft: '2rem' }}>
      <Image style={{ width: '101.5%' }} src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FFrame%2048.png?alt=media&token=bd738416-933c-4261-81d0-7255fdcb24f1" />
    </Card>
  </SkeletonTheme>
);
export default Croud;
