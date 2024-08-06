import React from 'react';
import { Link } from 'react-router-dom';
import sharedState from '../../utils/sharedState';
import Parcel from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';
import Users from './Users';

const Home = () => { 
  const navigateToAbout = () => {
    sharedState.set('aboutData', {
      about: ' This is some about data passed from home page',
      mission: 'This is some mission data passed from home page' 
    });
  };

  const ParcelComponent = (): ParcelConfig<object>=>{
    return import('../../chat-parcel/src/main') as unknown as ParcelConfig<object>;
  }
  
  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <h1> Users </h1>
      <div>
        <button onClick={navigateToAbout}>
          <Link to="/about">Go to About Page</Link>
        </button>
      </div>
      <Users />
      <Parcel
        config={ParcelComponent()}
        initiator= {"Home Page"}
        mountParcel={mountRootParcel}
        wrapWith='div'
        wrapStyle={{position:'absolute', bottom:60, right:60}}
       />
    </div>
  )
}

export default Home
