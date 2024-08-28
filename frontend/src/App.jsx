import styles from "./App.module.css";
import Nav1 from "./Nav1.jsx";
import Nav2 from "./Nav2.jsx";
import Sliders from "./Sliders.jsx";
import AboutTheSchool from "./AboutTheSchool.jsx";
import AboutMissionAndVision from "./AboutMissionAndVision.jsx";
import SocialAndCultural from "./SocialAndCultural.jsx";
import Tour from "./Tour.jsx";
import Members from "./Members.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Nav1></Nav1>
      <Nav2></Nav2>
      <Sliders></Sliders>
      <AboutTheSchool></AboutTheSchool>
      <AboutMissionAndVision></AboutMissionAndVision>
      <SocialAndCultural></SocialAndCultural>
      <Tour></Tour>
      <Members></Members>
      <Footer></Footer>
    </>
  );
}

export default App;
