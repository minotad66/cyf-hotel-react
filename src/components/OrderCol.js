import React from "react";

const orderCol = props => {
  switch (props.name) {
    case "id":
      this.setState({
        fakeBookings: props.fakeBookings.sort((a, b) => a.id - b.id)
      });
      break;
    case "firstName":
      this.setState({
        fakeBookings: props.fakeBookings.sort((a, b) => {
          return a.firstName.localeCompare(b.firstName);
        })
      });
      break;
    case "title":
      this.setState({
        fakeBookings: props.fakeBookings.sort((a, b) =>
          a.title.localeCompare(b.title)
        )
      });
      break;
    case "surname":
      this.setState({
        fakeBookings: props.fakeBookings.sort((a, b) =>
          a.surname.localeCompare(b.surname)
        )
      });
      break;
    case "email":
      this.setState({
        fakeBookings: props.fakeBookings.sort((a, b) =>
          a.email.localeCompare(b.email)
        )
      });
      break;
    case "roomId":
      this.setState({
        fakeBookings: props.fakeBookings.sort((a, b) => a.roomId - b.roomId)
      });
      break;
    case "checkInDate":
      this.setState({
        fakeBookings: props.fakeBookings.sort((a, b) =>
          a.checkInDate.localeCompare(b.checkInDate)
        )
      });
      break;
    case "checkOutDate":
      this.setState({
        fakeBookings: props.fakeBookings.sort((a, b) =>
          a.checkOutDate.localeCompare(b.checkOutDate)
        )
      });
      break;
    default:
      break;
  }
};

export default orderCol;
