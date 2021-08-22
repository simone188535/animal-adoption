import React, { useState } from "react";
import "./contentsearchlist.scss";

const ContentSearchList: React.FC = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  // const searchButtonOptions = ["Dogs", "Cats"];
  const toggleSearch = () => {
    // If activeButton equals the map index, add active class
    console.log('Hello World');
  }

  return (
    <div className="container content-search-list-container">
      <div className="d-flex justify-content-center w-100 my-5">
        <h4 className="content-search-list-header">Please Select Your Preferred Animal</h4>
      </div>
      <div className="d-flex justify-content-center">
        {/* put values using array and map them */}
      <button type="button" className="btn btn-warning w-25 mx-3" onClick={() => toggleSearch}>Dogs</button>
      <button type="button" className="btn btn-warning w-25 mx-3" onClick={() => toggleSearch}>Cats</button>
      </div>
    </div>
  );
};

export default ContentSearchList;
