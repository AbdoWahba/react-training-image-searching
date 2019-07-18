import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment pic-input">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              onChange={event => {
                console.log(event.target.value);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
