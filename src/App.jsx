import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './footer.jsx';
import Usps from './usps.jsx';
import Bgsec from './bgsec.jsx';
import Gallery from './gallery.jsx';
import HomeBanner from './homebanner.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Usps />
      <Bgsec />
      <Gallery />
      <Footer />
    </div>
  )
}
