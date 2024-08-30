import React from "react";
import { Tweet } from "react-tweet";
import Marquee from "react-fast-marquee";

const Tweets = () => {
  return (
    <div className="pt-5 container-fluid">
      <h2
        className="text-center about_sub_title py-5"
        style={{ fontSize: "24px" }}
      >
        Tweets
      </h2>
      <Marquee pauseOnClick={true} speed={30}>
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <div className="dark">
            <Tweet id="1629307668568633344" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Tweets;
