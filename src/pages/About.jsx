import AboutHeader from "../components/aboutPage/AboutHeader";
import AboutIntro from "../components/aboutPage/AboutIntro";
import AboutMission from "../components/aboutPage/AboutMission";
import AboutBenefits from "../components/aboutPage/AboutBenefits";
import Navbar from "../components/homePage/Navbar"; 
import Footer from "../components/homePage/Footer";

function About() {
    return (
<>
<Navbar/>

<AboutHeader/>
<AboutIntro/>
<AboutBenefits/>
<AboutMission/>

<Footer/>

</>
    );
}

export default About;