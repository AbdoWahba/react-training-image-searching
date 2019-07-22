import React from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar
          onSearchBarSubmit={term => {
            Axios.get("https://api.unsplash.com/search/photos/", {
              params: { query: term },
              headers: {
                Authorization:
                  "Client-ID f8947d24a0a585d8ddb0389a18b13819423f1fb43368804d4fc133ddf1558611"
              }
            });
          }}
        />
      </div>
    );
  }
}

export default App;
