import React from 'react'
import LandingPageHero from '../components/landingpage/LandingPageHero';
import LandingPageFeatures from '../components/landingpage/LandingPageFeatures';
import LandingPageHowItWorks from '../components/landingpage/LandingPageHowItWorks';

const LandingPage = () => {
  return (
    <div>
        <LandingPageHero />
        <LandingPageFeatures />
        <LandingPageHowItWorks />

    </div>
  )
}

export default LandingPage