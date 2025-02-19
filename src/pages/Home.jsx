import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import LatestCollections from "../components/LatestCollections";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Banner />
      <br />
      <LatestCollections />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
