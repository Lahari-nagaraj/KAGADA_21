import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import ExploreTracks from "./components/ExploreTracks";
import PreviousWinners from "./components/PreviousWinners";
import Gallery from "./components/Gallery";
import AfterMovies from "./components/AfterMovies";
import FAQs from "./components/FAQs";
import ContactMap from "./components/ContactMap";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      {/* <AboutUVCE />
      <AboutIEEE />
      <AboutKagada /> */}
      <ExploreTracks />
      <PreviousWinners />
      <Gallery />
      <AfterMovies />
      <FAQs />
      <ContactMap />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
