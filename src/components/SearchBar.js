import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };
  render() {
    return (
      <div className="ui segment pic-input">
        <form
          className="ui form"
          onSubmit={event => {
            event.preventDefault();
            console.log(this.state.term);
          }}
        >
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => {
                this.setState({ term: event.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
