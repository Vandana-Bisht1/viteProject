import React, { useEffect, useState } from 'react';
import sharedState from '../../utils/sharedState';
import { mountRootParcel, ParcelConfig } from 'single-spa';
import Parcel from 'single-spa-react/parcel';
import './About.css';

const About: React.FC = () => {
  const [aboutUsData, setAboutUsData] = useState<string | null>(null);

  const ParcelComponent = (): ParcelConfig<object>=>{
    return import('../../chat-parcel/src/main') as unknown as ParcelConfig<object>;
  }

  useEffect(() => {
    const retrievedData = sharedState.get('aboutData');
    setAboutUsData(retrievedData);
    sharedState.clear('aboutData'); // Clear data if no longer needed
  }, []);

  const clearData = () => {
    sharedState.clear('aboutData');
    setAboutUsData(null);
  };
  
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      {aboutUsData? <button onClick={clearData}>
        Clear Data
      </button>: <></>}
      <p className="about-paragraph">
        {aboutUsData ? aboutUsData.about: 'Welcome to our application! We are dedicated to providing the best service possible. Our team is committed to continuous improvement and customer satisfaction.'}
      </p>
      <h2 className="about-subtitle">Our Mission</h2>
      <p className="about-paragraph">
        {aboutUsData ? aboutUsData.mission: 'Our mission is to innovate and lead in our industry, offering top-notch solutions to our customers. We believe in integrity, quality, and reliability.'}
      </p>
      <Parcel
        config={ParcelComponent()}
        mountParcel={mountRootParcel}
        initiator= {"About Page"}
        wrapWith='div'
        wrapStyle={{position:'absolute', bottom:60, right:60}}
       />
       {/* <Parcel
      config={() => System.import('../../chat/src/main')}
      mountParcel={mountRootParcel}
    /> */}
    </div>
  );
};

export default About;

