import React from "react";
import "./homepageHeader.scss";

const HomepageHeader: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: "url(./images/adoption.jpg)" }}
      className="container-fluid homepage-header"
    >
      {/* <img src="./images/adoption.jpg"/> */}
      Header test
    </div>
  );
};

export default HomepageHeader;
