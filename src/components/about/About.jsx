import { React, useEffect } from "react";
import "./about.css";
import appimg from "../../assets/about/2.jpg";
import { getCalApi } from "@calcom/embed-react";

const About = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "progressor-capital-growth-session",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <p className="heading"> About Us</p>
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
        <button
          data-cal-namespace="progressor-capital-growth-session"
          data-cal-link="pravitbh/progressor-capital-growth-session"
          data-cal-config='{"layout":"month_view"}'
          className="service-button sub-text"
        >
          Schedule a Meeting
        </button>
      </div>

      <div className="about-image">
        <img src={appimg} alt="about" className="about-img" />
      </div>
    </div>
  );
};

export default About;
