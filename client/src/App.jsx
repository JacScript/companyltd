import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/About-us/AboutUs";

const App = () => {
  return (
    <main className="min-w-full bg-white text-dark ">

      {/* <main className="overflow-x-hidden bg-white text-dark"> */}
      <Navbar />

      <Hero />
      <AboutUs />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </main>
  );
};

export default App;