/* eslint-disable */
import React from "react";

import {
  Header,
  AboutUs,
  LatestEvents,
  InstagramPosts,
  WhatIsCyberSecurity,
} from "../../containers";
import { Navbar, Footer } from "../../components";

import "./Home.scss";

const Home = () => (
  <div>
    <div className="header-background">
      <Navbar />
      <Header />
      <div className="pageSeperator" />
      <AboutUs />
      <div className="pageSeperator" />
      <WhatIsCyberSecurity />
      <div className="pageSeperator" />
      <InstagramPosts />
      <div className="pageSeperator" />
      <LatestEvents />
      <div className="pageSeperator" />
      <Footer />
    </div>
  </div>
);

export default Home;
