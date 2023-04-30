import { faHireAHelper } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const ServiceError = () => {
    return (
        <div className="service">
        <div className="serviceImg">
          <img src="https://i.ibb.co/6Nr9Hhm/undraw-Artificial-intelligence-re-enpp.png" alt="serviceName" />
        </div>
        <div className="serviceContent">
          <h2>Error Occured</h2>
         
          <div className="servicePrice">
            <h3>Null</h3>
            <h3 className="price">Null</h3>
            {/* <h3 className="price_tag">TK/Day</h3> */}
          </div>
          <Link to="#">
            <motion.button
              whileHover={{
                scale: 1.01,
                textShadow: "0px 2px 8px 0px rgb(255,255,255)",
                boxShadow: "0px 2px 8px 0px rgb(255,255,255)",
              }}
              className="addBtn"
            >
              <FontAwesomeIcon icon={faHireAHelper} /> Hire Now
            </motion.button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceError;