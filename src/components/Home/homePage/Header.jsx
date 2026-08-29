import headerPic from "../../../assets/headerPic.avif";
import "../../../css/home/Header.css";

function Header() {
  return (
    <section className="header">
      <div className="header-text">
        <h1>Together, let’s build a better city.</h1>

        <p>
          Report public issues in your city and help
          the municipality fix them faster.
        </p>

<button className="report-btn">
  <i className="bi bi-pencil-square"></i>
  Report an Issue
</button>      </div>

      <div className="header-image">
        <img src={headerPic} alt="City illustration" />
      </div>
    </section>
  );
}

export default Header;