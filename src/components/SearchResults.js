import React, { Component } from "react";
import Moment from "moment";

let i = 0;

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    };
  }

  handleClick = e => {
    if (i % 2 !== 0) {
      this.setState({ bgColor: "" });
    } else {
      this.setState({ bgColor: "red" });
    }

    i++;
  };

  render() {
    let tableData = this.props.results;
    let newTableData = tableData.map(infoData => (
      <tr
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.bgColor }}
      >
        <th scope="row">{infoData.id}</th>
        <td>{infoData.title}</td>
        <td>{infoData.firstName}</td>
        <td>{infoData.surname}</td>
        <td>{infoData.email}</td>
        <td>{infoData.roomId}</td>
        <td>{infoData.checkInDate}</td>
        <td>{infoData.checkOutDate}</td>
        <td>
          {Moment(infoData.checkOutDate).diff(infoData.checkInDate, "days")}
        </td>
      </tr>
    ));

    return (
      <table className="table table-striped">
        <thead>
          <tr
            onClick={this.handleClick}
            style={{ backgroundColor: this.state.bgColor }}
          >
            <th scope="col" />
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">RoomId</th>
            <th scope="col">CheckInDate</th>
            <th scope="col">CheckOutDate</th>
            <th scope="col">Days</th>
          </tr>
        </thead>
        <tbody>{newTableData}</tbody>
      </table>
    );
  }
}

export default SearchResults;
