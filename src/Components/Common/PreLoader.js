import React from "react";

const PreLoader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img
       className="h-75 img-fluid"
        src="https://media.lordicon.com/icons/wired/flat/18-location-pin.gif"
        alt="Welcome to TracePoint"
        title="Welcome to tracePoint"
      />
    </div>
  );
};

export default PreLoader;
