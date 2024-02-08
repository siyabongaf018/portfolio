import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
    id="project"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="project__header">Projects</h2>
    <motion.div
      className="project__body"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
        {/* <!-- Project 1 --> */}
        <div class="project">
          <h3>Disaster Alleviation Foundation Website</h3>
          <p>(January 2022 - May 2022)</p>
          <ul>
            <li>
              Developed a fully functional e-commerce website using ASP.NET Core
              and C#.
            </li>
            <li>
              Implemented secure donation processing and user authentication.
            </li>
            <li>Utilized Azure cloud services for seamless scalability.</li>
          </ul>
           
        </div>
        {/* <!-- Project 2 --> */}
        <div class="project">
          <h3>Geo Land Mark App</h3>
          <p>(August 2022 - November 2022)</p>
          <ul>
            <li>
              Designed and built an Android expense tracker app using Java.
            </li>
            <li>
              Integrated real-time data synchronization with a cloud-based
              backend.
            </li>
            <li>
              Implemented user-friendly interfaces and interactive data
              visualization.
            </li>
          </ul>
           
        </div>
        {/* <!-- Project 3 --> */}
        <div class="project">
          <h3>J&L System</h3>
          <p>(August 2022 - December 2022)</p>
          <ul>
            <li>
              Developed a fully functional e-commerce website using ASP.NET Core
              and C#.
            </li>
            <li>
              Implemented secure payments processing and user authentication.
            </li>
            <li>
              Collaborated with a team to create an online reservation system
              for a restaurant.
            </li>
            <li>
              Utilized Agile methodologies to ensure efficient project
              management.
            </li>
            <li>
              Implemented robust database structures and backend functionality.
            </li>
          </ul>
          
           
        </div>{" "}

        
        </motion.div>
    </motion.section>
  );
};

export default Projects;
