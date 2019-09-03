import React, { Component } from "react";
import Button from "./components/Button";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <div className="form-group search-box">
              <label htmlFor="customerId">Customer Id</label>
              <div className="search-row">
                <input
                  ref=""
                  type="text"
                  id="customerId"
                  className="form-control"
                  placeholder="Customer Id"
                />
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
