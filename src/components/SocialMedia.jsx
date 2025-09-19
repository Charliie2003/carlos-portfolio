import React from "react";
import { BsTwitter, BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs";
import { FaTiktok, FaFacebookF, FaFilePdf, FaRegFileAlt } from "react-icons/fa";
import cvFile from "../assets/CV_CARLOS.pdf";

const SocialMedia = () => {
  return (
    <div className="app__social">
      {/* LinkedIn */}
      <div>
        <a
          href="https://www.linkedin.com/in/carlos-hinojosa-vaca/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <BsLinkedin />
        </a>
      </div>

      {/* GitHub */}
      <div>
        <a
          href="https://github.com/Charliie2003"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <BsGithub />
        </a>
      </div>

      {/* CV / Currículum */}
      <div>
        <a
          href={cvFile}
          rel="noopener noreferrer"
          aria-label="Currículum (PDF)"
          title="Currículum (PDF)"
          download="Carlos-Hinojosa-CV.pdf"
        >
          <FaRegFileAlt />
        </a>
      </div>

      {/* 
      <div>
        <a
          href="https://twitter.com/BTchouanfe?s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100008943550010&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://www.youtube.com/channel/UCb7GIDR1w7VgFAKW5t9Owaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>
      </div>
      <div>
        <a href="http://tiktok.com/@borisfeze">
          <FaTiktok />
        </a>
      </div>
      */}
    </div>
  );
};

export default SocialMedia;
