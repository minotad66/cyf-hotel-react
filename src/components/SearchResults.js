import React, { Component } from "react";
import Moment from "moment";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }

  handleClick = index => {
    console.log(index);

    let newState = [...this.state.selected];
    console.log(newState);

    newState[index] = !newState[index];
    console.log(newState[index]);

    this.setState({ selected: newState });
    console.log(this.setState({ selected: newState }));
  };
  render() {
    let tableData = this.props.results;
    let newTableData = tableData.map((infoData, i) => (
      <tr
        key={infoData.id}
        onClick={() => this.handleClick(i)} //ESTO HACE LO MISMO DE LA CLASE DE ABAJO
        /*  className={this.state.selected[i] ? "row--selected" : ""} */ className={
          this.state.selected[i] && "row--selected"
        }
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
      <table className="table">
        <thead>
          <tr>
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
