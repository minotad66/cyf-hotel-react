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
          id: "",
          dato: "email"
        });
      });
  }

  addBooking = booking => {
    this.setState({ fakeBookings: [...this.state.fakeBookings, booking] });
  };

  sortId = name => {
    let states = [0, 0, 0, 0, 0, 0, 0, 0];
    switch (name) {
      case "id":
        if (states[0] === 0) {
          this.setState({
            fakeBookings: this.state.fakeBookings.sort((a, b) => a.id - b.id)
          });
          states[0] = 1;
        } else {
          this.setState({
            fakeBookings: this.state.fakeBookings.reverse()
          });
          states[0] = 0;
        }

        break;
      case "firstName":
        if (states[1] === 0) {
          this.setState({
            fakeBookings: this.state.fakeBookings.sort((a, b) => {
              return a.firstName.localeCompare(b.firstName);
            })
          });
          states[1] = 1;
        } else {
          this.setState({
            fakeBookings: this.state.fakeBookings.reverse()
          });
          states[1] = 0;
        }

        break;
      case "title":
        this.setState({
          fakeBookings: this.state.fakeBookings.sort((a, b) =>
            a.title.localeCompare(b.title)
          )
        });
        break;
      case "surname":
        this.setState({
          fakeBookings: this.state.fakeBookings.sort((a, b) =>
            a.surname.localeCompare(b.surname)
          )
        });
        break;
      case "email":
        this.setState({
          fakeBookings: this.state.fakeBookings.sort((a, b) =>
            a.email.localeCompare(b.email)
          )
        });
        break;
      case "roomId":
        this.setState({
          fakeBookings: this.state.fakeBookings.sort(
            (a, b) => a.roomId - b.roomId
          )
        });
        break;
      case "checkInDate":
        this.setState({
          fakeBookings: this.state.fakeBookings.sort((a, b) =>
            a.checkInDate.localeCompare(b.checkInDate)
          )
        });
        break;
      case "checkOutDate":
        this.setState({
          fakeBookings: this.state.fakeBookings.sort((a, b) =>
            a.checkOutDate.localeCompare(b.checkOutDate)
          )
        });
        break;
      default:
        break;
    }
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
              sortId={this.sortId}
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
