import React from 'react';
import ImageGallery from './components/ImageGallery';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        <ImageGallery />
      </div>
    </Layout>
  );
};

export default Home;
