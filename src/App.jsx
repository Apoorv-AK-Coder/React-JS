import { useState } from "react";
import Header from "./globalComps/Header.jsx";
import MainBanner from "./globalComps/mainbanner.jsx";
import Usps from "./otherComps/usps.jsx";
import Bgsec from "./otherComps/bgsec.jsx";
import Tabs from './otherComps/tabs.jsx';
import Footer from "./globalComps/footer.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <MainBanner>Lorem Ipsum is simply text.</MainBanner>
      <Usps />
      <Bgsec />
      <Tabs />
      <Footer />
    </div>
  );
}
