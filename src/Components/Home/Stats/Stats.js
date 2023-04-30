import React from "react";
import CountUp from "react-countup";
import './stats.css'
const Stats = () => {
  return (
    <div className="container p-5">
      <h2 className="stats_title text-center">A place for better photography</h2>
      <div className="stats__container">
        <div className="single__stat shadow-lg">
          <img
            className="icon"
            src="https://img.icons8.com/bubbles/50/000000/timer.png" alt="stat"
          />
          <div className="number">2021</div>
          <span className="number__title">Opened in</span>
        </div>
        <div className="single__stat shadow-lg">
          <img
            className="icon"
            src="https://img.icons8.com/fluency/48/000000/teacher.png" alt="stat"
          />
          <div className="number">
            {" "}
            <CountUp start={0} end={127} delay={0} duration={3}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <span className="number__title">Partners</span>
        </div>
        <div className="single__stat shadow-lg">
        <img className="icon" src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/null/external-clients-media-agency-flaticons-flat-circular-flat-icons.png" alt="stat"/>
          <div className="number">
            <CountUp start={0} end={2} delay={0} duration={2}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <span className="number__title">Publications</span>
        </div>

      </div>
    </div>
  );
};

export default Stats;
