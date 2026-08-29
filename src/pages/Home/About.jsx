import AboutHeader from "../../components/Home/aboutPage/AboutHeader";
import AboutIntro from "../../components/Home/aboutPage/AboutIntro";
import AboutMission from "../../components/Home/aboutPage/AboutMission";
import AboutBenefits from "../../components/Home/aboutPage/AboutBenefits";
import Navbar from "../../components/Home/homePage/Navbar"; 
import Footer from "../../components/Home/homePage/Footer";

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