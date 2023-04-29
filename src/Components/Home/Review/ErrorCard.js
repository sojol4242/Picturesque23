import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./review.css";

const ErrorCard = () => {
  return (
    <>
      <div className="reviewCard">
        <div className="cardHeader">
          <img
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            alt="image"
          />
          <div className="headerContent">
            <h4 className="name">Name</h4>

            <span className="company">User</span>
          </div>
        </div>
        <p className="para">
          Nisi mollit excepteur voluptate sit. Ex elit exercitation occaecat
          velit do mollit magna ut enim ad mollit duis mollit commodo. Sit eu
          Lorem incididunt veniam sunt officia magna do exercitation ullamco
          aliqua. Id mollit deserunt mollit commodo.
        </p>
        <div className="cardFooter">
          <div className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="date">
            <span>{Date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorCard;
