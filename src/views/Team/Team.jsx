/* eslint-disable */
import React from "react";

import { Navbar, Footer } from "../../components";
import {
  BehindTheScene,
  FacultyCoordinator,
  DSW,
  Executive,
  Core,
  DeputyCore,
} from "../../containers";

import "./Team.scss";

const Team = () => (
  <div>
    <div className="header-background">
      <Navbar />
      <BehindTheScene />
      <FacultyCoordinator />
      <div className="pageSeperator" />
      <DSW />
      <div className="pageSeperator" />
      <Executive />
      <div className="pageSeperator" />
      <Core />
      <div className="pageSeperator" />
      <DeputyCore />
      <div className="pageSeperator" />
      <Footer />
    </div>
  </div>
);

export default Team;
