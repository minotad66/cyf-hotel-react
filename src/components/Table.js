import React from "react";

table = () => {
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
};

export default table;
