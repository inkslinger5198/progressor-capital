import React from "react";
import "./modernapproach.css";
import appimg from "../../assets/approach/3.jpg";

const ModernApproach = () => {
  return (
    <div className="modern-approach-container" id="modern-approach">
      <div className="modern-approach-content">
        <p className="heading"> Our <br/>Modern Approach</p>
        <p className="line"></p>
        <p className="sub-text">
          We've reimagined the capital-raising and growth process.
        </p>
        <p className="sub-text">
          Through access to an exclusive network of family offices, private
          lenders, and institutional capital, we ensure our clients connect with
          the right partners, faster. Our approach integrates advanced Al,
          enterprise software, and proprietary data, backed by a deep marketing
          expertise that scales outreach and engagement.
        </p>
        <p className="sub-text">
          This seamless, data-driven strategy eliminates inefficiencies and
          provides businesses with the financial connections they need to
          execute on their vision. Whether it's funding growth, supporting
          acquisitions, restructuring debt, or strategic growth, Progressor
          Capital delivers a modern, effective solution to corporate finance.
        </p>
      </div>

      <div className="modern-approach-image">
        <img
          src={appimg}
          alt="Modern Approach"
          className="modern-approach-img"
        />
      </div>
    </div>
  );
};

export default ModernApproach;
