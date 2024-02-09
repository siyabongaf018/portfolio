import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero__content">
        <h3>Hello, It's Me</h3>
        <h1>Siyabonga Chibi</h1>
        <h3>
          And I'm a <span>Backend Developer</span>
        </h3>
        <p>
          Fueling Innovation with Code: Unleashing the Power of Java, C#, PHP, JS React.js,
          and Spring Boot. Crafting Digital Solutions That Make Waves. Let's
          Build Something Extraordinary Together.
        </p>
        <div className="social">
          <a
            style={{ "--i": 1 }}
            target="_blank"
            className="links"
            href="mailto: siyabongaf018@gmail.com"
          >
            <FaEnvelope />
          </a>
          <a
            style={{ "--i": 2 }}
            target="_blank"
            className="links"
            href="https://github.com/siyabongaf018"
          >
            <FaGithub />
          </a>
          <a
            style={{ "--i": 3 }}
            className="links"
            target="_blank"
            href="https://linkedin.com/in/siyabonga-chibi-a71239265"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="hero__img">
        <img src="src\assets\h1.jpg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
