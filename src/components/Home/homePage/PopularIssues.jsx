import "../../../css/home/PopularIssues.css";

function PopularIssues() {
  return (
    <section className="popular-issues">
      <h2>Popular Issues</h2>

      <div className="issues-container">

        <div className="issue-card">
          <div className="issue-icon">🛣️</div>

          <div>
            <h3>Road Damage</h3>
            <p>Potholes, cracks, broken roads</p>
          </div>
        </div>

        <div className="issue-card">
          <div className="issue-icon">💡</div>

          <div>
            <h3>Streetlight</h3>
            <p>Broken or not working streetlights</p>
          </div>
        </div>

        <div className="issue-card">
          <div className="issue-icon">🗑️</div>

          <div>
            <h3>Garbage</h3>
            <p>Overflowing bins, illegal dumping</p>
          </div>
        </div>

        <div className="issue-card">
          <div className="issue-icon">🚧</div>

          <div>
            <h3>Sidewalks</h3>
            <p>Damaged or unsafe sidewalks</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PopularIssues;