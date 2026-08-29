import "../../../css/about/AboutBenefits.css";

function AboutBenefits() {
  return (
    <section className="about-benefits">
      <div className="benefits-title">
        <span>WHO IT HELPS</span>
        <h2>Built for everyone in the process.</h2>
        <p>
          FixMyCity helps citizens, administrators, and employees work
          together in a clearer and easier way.
        </p>
      </div>

      <div className="benefit-cards">
        <div className="benefit-card">
          <div className="benefit-number">01</div>
          <h3>For Citizens</h3>
          <p>
            Report city problems, follow their status, and see updates while
            the issue is being handled.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-number">02</div>
          <h3>For Administrators</h3>
          <p>
            Review submitted reports and assign each issue to the correct
            service or department.
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-number">03</div>
          <h3>For Employees</h3>
          <p>
            Receive assigned issues, update progress, upload images, and mark
            the issue as resolved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutBenefits;