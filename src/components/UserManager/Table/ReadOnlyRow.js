import React from "react";

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick,handleAltaClick }) => {
  return (
    <tr >
      <td>{data.id}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>{data.position}</td>
      <td>{data.user}</td>
      <td>{data.state}</td>
      <td>{data.type}</td>
      <td>{data.date}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, data)}
        >
          Edit
        </button>
        <button type="submit "onClick={() => handleDeleteClick(data.id)}>
          Delete
        </button>
        <button type="submit "onClick={(event) => handleAltaClick(event,data)}>
          Dar de alta
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
