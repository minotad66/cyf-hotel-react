import React, { Component } from "react";
import Moment from "moment";
import "../App.css";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      booking: {}
    };
  }

  handleChange = event => {
    const newBooking = { ...this.state.booking };
    newBooking[event.target.name] = event.target.value;
    this.setState({ booking: newBooking });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBooking(this.state.booking);
  };

  handleClick = index => {
    let newState = [...this.state.selected];
    newState[index] = !newState[index];
    this.setState({ selected: newState });
  };
  render() {
    let tableData = this.props.results;
    let newTableData = tableData.map((infoData, i) => (
      <tr
        key={infoData.id}
        onClick={() => this.handleClick(i)} //ESTO HACE LO MISMO DE LA CLASE DE ABAJO
        /*  className={this.state.selected[i] ? "row--selected" : ""} */
        className={this.state.selected[i] && "row--selected"}
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
      <div>
        <table className="table form">
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
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            placeholder="id"
            name="id"
            onChange={this.handleChange}
            type="text"
            required
          />
          <input
            className="input"
            placeholder="Title"
            name="title"
            onChange={this.handleChange}
            type="text"
            required
          />
          <input
            className="input"
            placeholder="name"
            name="firstName"
            onChange={this.handleChange}
            type="text"
            required
          />
          <input
            className="input"
            placeholder="last"
            name="surname"
            onChange={this.handleChange}
            type="text"
            required
          />
          <input
            className="input"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            type="email"
            required
          />
          <input
            className="input"
            placeholder="roomIs"
            name="roomId"
            onChange={this.handleChange}
            type="text"
            required
          />
          <input
            className="input"
            placeholder="checkInDate"
            name="checkInDate"
            onChange={this.handleChange}
            type="date"
            required
          />
          <input
            className="input"
            placeholder="checkOutDate"
            name="checkOutDate"
            onChange={this.handleChange}
            type="date"
            required
          />
          <button className="button1">Add</button>
        </form>
      </div>
    );
  }
}

export default SearchResults;
