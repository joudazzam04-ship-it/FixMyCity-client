import "../../../css/home/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-container">

        <div className="how-item">
          <div className="how-icon">📋</div>
          <div>
            <h3>Report</h3>
            <p>Easily report issues in your city.</p>
          </div>
        </div>

        <div className="how-item">
          <div className="how-icon">☷</div>
          <div>
            <h3>Track</h3>
            <p>Track the status of your reported issues.</p>
          </div>
        </div>

        <div className="how-item">
          <div className="how-icon">💬</div>
          <div>
            <h3>Get Updates</h3>
            <p>Receive updates as the issue is being resolved.</p>
          </div>
        </div>

        <div className="how-item">
          <div className="how-icon">✓</div>
          <div>
            <h3>Make Impact</h3>
            <p>Your report helps make our city a better place.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;