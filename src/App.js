import React from "react";
import { Navbar } from "./components";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./containers";
import "./App.scss";

const App = () => {
  const SHOW_TESTIMONIALS = false; // Set true to show testimonials again
  return (
    <div className={`app`}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {SHOW_TESTIMONIALS && <Testimonials />}
      <Footer />
    </div>
  );
};

export default App;
