import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // this ensures the animation only triggers once
    threshold: .1, // adjust as needed, this defines how much of the component needs to be in view
  });
  return (
    <section id="about">
      <h1>About</h1>
      <hr className="hrline" />
      <br />
      <div className="about__body">
        {/* <img src="/src/assets/aboutbdy.jpg" alt="" /> */}

        <motion.div
          className="about__content"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
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
            My technical expertise spans{" "}
            <b>Java, C#, PHP, Azure, and Android development</b>. I am dedicated
            to delivering high-quality solutions and consistently enhancing my
            skills to keep pace with evolving industry demands. Open to new
            challenges, Excited about tackling fresh challenges, I am
            enthusiastic about applying my problem-solving and design skills to
            make meaningful contributions in collaborative projects. Let's
            embark on a journey of coding excellence together!
          </p>
        </motion.div>
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Key Skills</h2>
          <ul>
            <li>
              <b>Programming Languages:</b> Java, PHP, C#, JavaScript
            </li>
            <li>
              <b>Frontend:</b> React.js, Angular/AngularJS
            </li>
            <li>
              <b>Backend:</b> Spring Boot, ASP.Net, SQL
            </li>
            <li>
              <b>Database:</b> SQL (T-SQL, MySQL, Oracle)
            </li>
            <li>
              <b>Frameworks/Libraries:</b> .Net, WPF, XAML, WCF, ASP.Net
            </li>
            <li>
              <b>Tools:</b> Postman, Azure DevOps, Git
            </li>
            <li>
              <b>Additional Technologies:</b> XML, Web Services, Windows
              Services, Windows Forms Applications
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
