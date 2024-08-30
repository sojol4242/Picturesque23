import React from "react";
import { Link } from "react-router-dom";

const SubFooter = () => {
  return (
 
    <div title="www.picturesque.org"  className="d-flex justify-content-center align-items-center text-center">
      <p className="copyRight">
        Copyright &copy; 2024{" "}
         <Link to="/home" className="siteName">
          www.tracepoint.org
        </Link> All rights reserved.
      </p>
    </div>
  );
};

export default SubFooter;
