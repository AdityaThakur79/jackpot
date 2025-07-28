import React, { useState } from 'react';
import { Banner, Footer, Header, NavBar, Previews } from '../../components';
import JackpotAboutSection from '../../components/landing-page/about/About';
import Story from '../../components/landing-page/story/Story';
import JackpotFeatures from '../../components/landing-page/Features/Features';
import Stores from '../../components/landing-page/stores/Stores';
import Gallery  from '../../components/landing-page/gallery/Gallery';
import InstagramGallery from '../../components/landing-page/instagram/Instagram';

const Home = () => {
  // Toggle between banner states
  const[toggleBanner, setToggleBanner] = useState(true);

  return (
    <div className='landing-page'>
        {/*Universal skeleton layout for the entire webpage*/}
        <Banner trigger={toggleBanner} setTrigger={setToggleBanner}/>
        <NavBar />
        <Header />
        <Previews />
        <JackpotAboutSection/>
        <JackpotFeatures/>
        <Story/>
        <Gallery/>
        <InstagramGallery/>
        <Stores/>
        <Footer />
    </div>
  )
}

export default Home