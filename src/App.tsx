
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

import { Navbar } from "./components/Navbar";

import { ScrollToTop } from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Features />

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
