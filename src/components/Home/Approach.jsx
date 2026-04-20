import React from "react";
import "./Approach.css";

const Approach = () => {
  return (
    <section className="approach-section">
      <div className="approach-bg">
        <div className="approach-blob approach-blob1"></div>
        <div className="approach-blob approach-blob2"></div>
        <div className="approach-ring approach-ring1"></div>
        <div className="approach-ring approach-ring2"></div>
      </div>

      <div className="approach-container">
        <h1 className="heading white text-center">
          My <span className="purple">Approach</span>
        </h1>

        <div className="approach-cards">
          <ApproachCard
            phase="Phase 1"
            title="Planning & Strategy"
            description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss site structure, navigation, and content requirements."
          />

          <ApproachCard
            phase="Phase 2"
            title="Development & Progress Update"
            description="Once we agree on the plan, I dive into coding. From initial sketches to polished code, I keep you updated at every step of the process."
          />

          <ApproachCard
            phase="Phase 3"
            title="Development & Launch"
            description="This is where the final magic happens. Based on the approved design, I transform everything into a fully functional and polished digital experience."
          />
        </div>
      </div>
    </section>
  );
};

const ApproachCard = ({ phase, title, description }) => {
  return (
    <div className="approach-card">
      <div className="approach-card-glow"></div>

      <div className="approach-phase">{phase}</div>

      <h2 className="approach-title">{title}</h2>
      <p className="approach-description">{description}</p>

      <div className="approach-hover-overlay"></div>
    </div>
  );
};

export default Approach;