import React from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar
          onSearchBarSubmit={term => {
            console.log(term);
          }}
        />
      </div>
    );
  }
}

export default App;
