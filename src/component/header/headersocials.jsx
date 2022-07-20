import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const headersocials = () => {
  return (
    <div className='header__social'>
      <a href='https://www.linkedin.com/in/rishan-dilruk-6019481a4'>
        {" "}
        <BsLinkedin />
      </a>
      <a href='https://github.com/DilrukR'>
        <FaGithub />
      </a>
      <a href='https://dribbble.com/Dilrukr7'>
        <FiDribbble />
      </a>
    </div>
  );
};

export default headersocials;
