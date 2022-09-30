import axios from "axios";
import React, { Component } from "react";
import unsplash from "./api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

export default class App extends Component {
  state = {
    images: [],
  };

  onSearchBarSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
