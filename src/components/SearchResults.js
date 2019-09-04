import React from "react";
import Moment from "moment";

const SearchResults = props => {
  const tableData = props.results;
  const newTableData = tableData.map(infoData => (
    <tr>
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

  const handleRearchResults = tr => {
    console.log("Hello, welcome to react");
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr onClick={handleRearchResults(this)}>
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
};

export default SearchResults;
