import React, { Component } from "react";
import Button from "./components/Button";

class Search extends Component {
  setInputRef = input => {
    this.input = input;
  };

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleSearchInput = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.input.value);
  };

  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form
              className="form-group search-box"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  ref={this.setInputRef}
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                  onChange={this.handleSearchInput}
                />
                <Button />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
