import React, { Component } from "react";
import SearchResults from "./components/SearchResults";
import Search from "./Search";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeBookings: null
    };
  }

  componentDidMount() {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          fakeBookings: data,
          id: ""
        });
      });
  }

  addBooking = booking => {
    this.setState({ fakeBookings: [...this.state.fakeBookings, booking] });
  };

  search = searchVal => {
    let infoarray = this.state.fakeBookings.filter(
      x =>
        x.firstName.toLowerCase() === searchVal.toLowerCase() ||
        x.surname.toLowerCase() === searchVal.toLowerCase()
    );
    if (infoarray.length === 0) {
      this.setState({
        fakeBookings: this.state.fakeBookings
      });
    } else {
      this.setState({
        fakeBookings: infoarray
      });
    }
  };
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {this.state.fakeBookings ? (
            <SearchResults
              results={this.state.fakeBookings}
              addBooking={this.addBooking}
            />
          ) : (
            <h1>
              <i class="fas fa-spinner fa-3x" />
            </h1>
          )}
        </div>
      </div>
    );
  }
}

export default Bookings;
