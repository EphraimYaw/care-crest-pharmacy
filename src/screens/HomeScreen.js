import React from 'react';
import Navbar from '../components/Navbar'; // ✅ Add this line
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import BrowseByHealthConcern from '../components/BrowseByHealthConcern';
import FeaturedProducts from '../components/FeaturedProducts';
import CustomerTestimonials from '../components/CustomerTestimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs /> 
      <BrowseByHealthConcern />
      <FeaturedProducts />
      <CustomerTestimonials />
      <Footer />
    </div>
  );
}

export default Home;
