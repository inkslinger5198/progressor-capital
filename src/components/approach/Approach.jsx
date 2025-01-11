import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./approach.css";

import { BsPeopleFill } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

const CountingAnimation = ({ targetNumber, duration, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // Start the animation only when triggered
    const stepTime = Math.max(Math.floor(duration / targetNumber), 20);
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount >= targetNumber) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetNumber, duration, start]);

  return <div className="approachs-number">{count}</div>;
};

const Approach = () => {
  const { ref, inView } = useInView({ threshold: 0.5 }); // Trigger when 50% of the element is visible

  return (
    <div id="approach" ref={ref} className="approach-container">
      <div className="approach-heading">
        <p className="heading">TBD</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, justo in auctor tempor, augue elit vestibulum nunc, eu tincidunt mi justo vel felis. Nullam gravida ligula nec magna tincidunt, in tincidunt nisi feugiat.</p>
      </div>
      <div className="approach-content">
        <div className="approachs">
          <div className="approachs-icon">
            <BsPeopleFill />
          </div>
          <div className="approachs-content">
            <div className="approachs-number">
              <CountingAnimation
                targetNumber={50}
                duration={5000}
                start={inView}
              />
              <p>+</p>
            </div>
            <div className="approachs-text">
                <p className="text">Capital Partners</p>
            </div>
          </div>
        </div>
        <div className="approachs">
          <div className="approachs-icon">
            <SlGraph />
          </div>
          <div className="approachs-content">
            <div className="approachs-number">
              <CountingAnimation
                targetNumber={15}
                duration={5000}
                start={inView}
              />
              <p>+</p>
            </div>
            <p className="text">Ventures Financed</p>
          </div>
        </div>
        <div className="approachs">
          <div className="approachs-icon">
            <FaHandshakeAngle />
          </div>
          <div className="approachs-content">
            <div className="approachs-number">
              <CountingAnimation
                targetNumber={25}
                duration={5000}
                start={inView}
              />
              <p>+</p>
            </div>
            <p className="text">Strategic Partnerships</p>
          </div>
        </div>
        <div className="approachs">
          <div className="approachs-icon">
            <FaArrowTrendUp />
          </div>
          <div className="approachs-content">
            <div className="approachs-number">
              <CountingAnimation
                targetNumber={300}
                duration={0.1}
                start={inView}
              />
              <p>%</p>
            </div>
            <p className="text">Average Partner Growth Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
