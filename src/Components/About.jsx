import React from "react";

const About = () => {
  return (
    <section id="about">
      <h1>About</h1>
      <div className="about__body">
        <img src="/src/assets/aboutbdy.jpg" alt="" />
        <div className="about__content">
          <h2>Siyabonga Chibi</h2>
          <p>
            Welcome to my portfolio website! My name is Siyabonga Chibi, and I
            am an enthusiastic developer with a keen interest in creating
            innovative solutions.{" "}
          </p>
          <p>
            As a determined and knowledgeable software developer, I bring a
            creative approach to problem-solving. Recently graduated, I am
            passionate about architecting cutting-edge software applications. I
            thrive in collaborative environments, finding joy in working with
            diverse teams to bring ideas to life.
          </p>
          <p>
            {" "}
            My technical expertise spans <b>Java, C#, PHP, Azure, and Android
            development</b>. I am dedicated to delivering high-quality solutions and
            consistently enhancing my skills to keep pace with evolving industry
            demands. Open to new challenges, Excited about tackling fresh
            challenges, I am enthusiastic about applying my problem-solving and
            design skills to make meaningful contributions in collaborative
            projects. Let's embark on a journey of coding excellence together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
