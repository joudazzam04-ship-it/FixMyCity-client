import "../../css/about/AboutHeader.css";
import aboutPic from "../../assets/aboutPic.webp";

function AboutHeader() {
  return (
    <section className="about-header">
      <div className="about-header-text">
        <span className="about-label">ABOUT FIXMYCITY</span>

        <h1>
          Small reports can make
          <span> a big difference.</span>
        </h1>

        <p>
          FixMyCity makes it easier for citizens to report public issues,
          follow their progress, and stay connected with the services
          responsible for fixing them.
        </p>
      </div>

      <div className="about-header-image">
        <img src={aboutPic} alt="City community" />
      </div>
    </section>
  );
}

export default AboutHeader;