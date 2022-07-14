import React from 'react';
import Footer from '../reuseables/footer';
import Hero from '../reuseables/hero';
import Navbar from '../reuseables/navbar';
import Partners from '../reuseables/partners';
import Products from '../reuseables/products';
import VisionMission from './vissionMission';
import WhatWeDo from './whatwedo';
import WhyUs from './why';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <VisionMission />
      <Products />
      <Partners />
      <Footer />
    </>
  );
}
export default Home;
