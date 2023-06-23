import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layouts/Navbar";
 
import AboutUsDetail from "./Components/layouts/About/AboutDetails";
import Home from "./Components/layouts/Home/Home";
import Footer from "./Components/layouts/Footer";

const App = () => {
  return (
    <>
      {" "}
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>  } />
            <Route path="/about-info" element={<AboutUsDetail/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
};

export default App;
