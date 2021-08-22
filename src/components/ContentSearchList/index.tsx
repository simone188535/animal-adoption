import React from "react";
import "./contentsearchlist.scss";

const ContentSearchList: React.FC = () => {
  return (
    <div className="container content-search-list-container">
      <div className="d-flex justify-content-center w-100 my-5">
        <h4 className="content-search-list-header">Please Select Your Preferred Animal</h4>
      </div>
      <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-warning w-25 mx-3">Dogs</button>
      <button type="button" className="btn btn-warning w-25 mx-3">Cats</button>
      </div>
    </div>
  );
};

export default ContentSearchList;
