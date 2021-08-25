import React, { useState } from "react";
import axios from "axios";
import "./contentsearchlist.scss";

interface ContentSearchListProps {
  currentSearchItem: string;
}

const ContentSearchList: React.FC<ContentSearchListProps> = ({ currentSearchItem }) => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <>
    </>
  )
}

const PreferenceSelection: React.FC = () => {
  const searchButtonOptions = ["Dogs", "Cats"];
  const [activeButton, setActiveButton] = useState(0);
  const [selectedSearchItem, setSelectedSearchItem] = useState<string>(searchButtonOptions[0]);

  const toggleSearch = (selectedIndex: number, selectedOption: string) => {
    // If activeButton equals the map index, add active class
    setActiveButton(selectedIndex);
    setSelectedSearchItem(selectedOption);
  }

  const mapSearchButtonOptions = () => {
    return searchButtonOptions.map((option, index) => {
      
      const isActive = activeButton === index ? 'active' : '';
    return <button key={`map-search-button-${index}`} type="button" className={`btn btn-warning w-25 mx-3 ${isActive}`} onClick={() => toggleSearch(index, option)}>{option}</button>
    });
  }

  return (
    <div className="container content-search-list-container">
      <div className="d-flex justify-content-center w-100 my-5">
        <h4 className="content-search-list-header">Please Select Your Preferred Animal</h4>
      </div>
      <div className="d-flex justify-content-center">
        {mapSearchButtonOptions()}
      </div>
      <ContentSearchList currentSearchItem={selectedSearchItem}/>
    </div>
  );
};

export default PreferenceSelection;
