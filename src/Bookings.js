import React, { Component } from "react";
import SearchResults from "./components/SearchResults";
import fakeBookings from "./data/fakeBookings";

export default class Bookings extends Component {
  search = () => {
    console.info("TO DO!");
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <SearchResults results={fakeBookings} />
        </div>
      </div>
    );
  }
}
