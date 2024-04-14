import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const Tender = () => (
  <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
    <div className="tender-grid">
      <Card><Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FGroup%2085.png?alt=media&token=8beb9850-b80a-4ff0-93f8-24ae4bd24785" /></Card>
      <Card><Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FGroup%2085.png?alt=media&token=8beb9850-b80a-4ff0-93f8-24ae4bd24785" /></Card>
      <Card><Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FGroup%2085.png?alt=media&token=8beb9850-b80a-4ff0-93f8-24ae4bd24785" /></Card>
      <Card><Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FGroup%2085.png?alt=media&token=8beb9850-b80a-4ff0-93f8-24ae4bd24785" /></Card>
      <Card><Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FGroup%2085.png?alt=media&token=8beb9850-b80a-4ff0-93f8-24ae4bd24785" /></Card>
      <Card><Image src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2FGroup%2085.png?alt=media&token=8beb9850-b80a-4ff0-93f8-24ae4bd24785" /></Card>
    </div>
  </SkeletonTheme>
);
export default Tender;
