import React from "react";
import Axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { image: [] };
  render() {
    return (
      <div className="ui container">
        <SearchBar
          onSearchBarSubmit={async term => {
            const response = await Axios.get(
              "https://api.unsplash.com/search/photos/",
              {
                params: { query: term },
                headers: {
                  Authorization:
                    "Client-ID f8947d24a0a585d8ddb0389a18b13819423f1fb43368804d4fc133ddf1558611"
                }
              }
            );
            this.setState({ images: response.data.results });
            console.log(response.data.results);
          }}
        />
      </div>
    );
  }
}

export default App;
