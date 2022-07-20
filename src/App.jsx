import React from "react";
import Header from "./component/header/header";
import Nav from "./component/nav/nav";
import About from "./component/About/about";
import Experence from "./component/experence/experence";
import Services from "./component/services/services";
import Protfolio from "./component/protfolio/protfolio";
import Testimonial from "./component/testimonial/testimonial";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experence />
      <Services />
      <Protfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
