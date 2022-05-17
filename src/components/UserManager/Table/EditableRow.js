import React from "react";
import { validation } from "../../../helpers/validation";

const EditableRow = ({
  editFormData,
  setEditFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

  const onChangeId = (e) => {
    let value = validation(e, 'onlyNumbers')
    if (value.length < 11) {
      setEditFormData({
        ...editFormData,
        id: value
      })
    } else {
      setEditFormData({
        ...editFormData,
        id: editFormData.id
      })
    }
  };

  const onChangeFirstName = (e) => {
    setEditFormData({
      ...editFormData,
      firstName: validation(e, 'onlyLetters')
    })
  };

  const onChangeLastName = e => {
    setEditFormData({
      ...editFormData,
      lastName: validation(e, 'onlyLetters')
    })
  };

  const onChangePhone = e => {
    let value = validation(e, 'onlyNumbers')
    setEditFormData({
      ...editFormData,
      phone: value
    })
  };

  return (
    <tr >
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingresar el id"
          name="id"
          value={editFormData.id}
          onChange={e=>{handleEditFormChange(e);onChangeId(e)}}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingresar el nombre"
          name="firstName"
          value={editFormData.firstName}
          onChange={e => {handleEditFormChange(e);onChangeFirstName(e)}}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Ingresar apellido"
          name="lastName"
          value={editFormData.lastName}
          onChange={e=>{handleEditFormChange(e);onChangeLastName(e)}}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Cambiar telefono"
          name="phone"
          value={editFormData.phone}
          onChange={e=>{handleEditFormChange(e);onChangePhone(e)}}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select
          type="text"
          required="required"
          placeholder="Selecione el rol"
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
        >
          <option>Administrador</option>
          <option>Empleado</option>
        </select>
      </td>
      <td>
      <label>{editFormData.user}</label>
      </td>
      <td>
        <label>{editFormData.state}</label>
      </td>
      <td>
        <label>{editFormData.type}</label>
      </td>
      <td>
        <label>{editFormData.date}</label>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
