import React from "react";
import "./homepageHeader.scss";

const HomepageHeader: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: "url(./images/adoption.jpg)" }}
      className="container-fluid homepage-header d-flex "
    >
      <div className="transparent-cover h-100 w-100 d-flex align-items-center justify-content-center flex-column">
        {/* <img src="./images/adoption.jpg"/> */}
        <h1 className="text-light mb-3">Animal Adoption</h1>
        <p className="text-light text-center">
          <strong>*Disclaimer: </strong> This is just a test project and is not
          actually active
        </p>
      </div>
    </div>
  );
};

export default HomepageHeader;
