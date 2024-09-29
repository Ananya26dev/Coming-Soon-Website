import React from "react";
import { FaRocket } from "react-icons/fa";
const ComingSoon = () => {
  return (
    <>
      <div className="coming-soon text-center">
        <div className="overlay"></div>
        <div className="content">
          <h1>TechQuest</h1>
          <p>Website is under Maintenance.</p>
          <h2>We're Launching Soon.</h2>
          <div className="countdown">
            <div className="time-box">
              <h3>24</h3>
              <span>Days</span>
            </div>
            <div className="time-box">
              <h3>20</h3>
              <span>Hours</span>
            </div>
            <div className="time-box">
              <h3>16</h3>
              <span>Minutes</span>
            </div>
            <div className="time-box">
              <h3>56</h3>
              <span>Seconds</span>
            </div>
          </div>
          <button className="btn btn-primary">Learn More</button>
          <div className="icons mt-4">
            <FaRocket size={48} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
