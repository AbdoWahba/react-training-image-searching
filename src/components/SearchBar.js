import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  handleUserInput(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment pic-input">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" onChange={this.handleUserInput} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
