import React from "react";
import Hero from "../components/Hero";
import Details from "../components/Details";
import Explore from "../components/Explore";

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Details />
        <Explore />
      </main>
    </>
  );
}

export default Home;
