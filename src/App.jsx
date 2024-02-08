// import './App.css'
import "./style.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

function App() {
  return (
    
      <div className="container">
        {/* Header Section */}
        <Header />
        <Hero/>
        <About />
        {/* <hr /> */}
        {/* 
        <About /> */}
       {/* <hr/> */}

        <Projects />
        <Footer/>

      </div>
     
    
  );
}

export default App;
