import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../Assest/me.png";
import Social from "./headersocials";
import { Button } from "react-bootstrap";

const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'am</h5>
        <h1>Rishan Dilruk</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <Social />
      </div>

      <div className='me'>
        <img src={Me} alt='me' />
      </div>

      <a href='#contact' className='scroll_down'>
        Scroll Down
      </a>

      <Button variant='primary'>Hello</Button>
    </header>
  );
};

export default header;
