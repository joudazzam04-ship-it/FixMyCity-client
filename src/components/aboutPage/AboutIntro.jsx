import "../../css/about/AboutIntro.css";

function AboutIntro() {
  return (
    <section className="about-intro">

      <div className="intro-left">
        <span>WHAT WE DO</span>

        <h2>
          A simpler way to care for your city.
        </h2>
      </div>

      <div className="intro-right">
        <p>
          Public problems are often noticed by citizens first.
          A damaged road, broken streetlight, water leak, or overflowing
          garbage bin may seem small, but these issues affect everyday life.
        </p>

        <p>
          FixMyCity gives citizens one simple place to report these problems
          and follow what happens after the report is submitted.
        </p>
      </div>

    </section>
  );
}

export default AboutIntro;