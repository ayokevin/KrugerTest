import React, { Fragment, useEffect, useState } from 'react'
import { Card, Table, Button, Form } from 'react-bootstrap'
import { updateUser } from '../../helpers/userApi';
import EditableRow from './Table/EditableRow';
import ReadOnlyRow from './Table/ReadOnlyRow';

export const UserTable = () => {

    const urlusers = `http://localhost:3004/users`;
    const [data, getData] = useState([]);

    const fetchData = () => {
        fetch(urlusers)
            .then((res) =>
                res.json())
            .then((response) => {
                getData(response);
            })
    };

    const [editFormData, setEditFormData] = useState({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        position: data.position,
        user: data.user,
        state: data.state,
        number_of_doses: data.number_of_doses,
        type: data.type,
        date: data.date,
        date_of_birth: data.date_of_birth,
        address: data.address,
        password: data.password

    });

    const [editdataId, setEditdataId] = useState("null");



    const [value, setValue] = useState('');
    const [dataSource, setDataSource] = useState(data);
    const [filterTable, setFilterTable] = useState([]);

    useEffect(() => {
        fetchData()
    }, [editdataId]);

    const onchange = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = data.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));

            setFilterTable([...filterTable]);
        } else {
            setValue(e.target.value);
            setDataSource([...data]);
        }
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleCancelClick = () => {
        setEditdataId(null);
    };

    const handleEditClick = (event, data) => {
        event.preventDefault();
        setEditdataId(data.id);

        const formValues = {
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            position: data.position,
            user: data.user,
            state: data.state,
            number_of_doses: data.number_of_doses,
            type: data.type,
            date: data.date,
            date_of_birth: data.date_of_birth,
            address: data.address,
            password: data.password
        };
        setEditFormData(formValues);
    };

    const handleEditFormSubmit = (event) => {
        //event.preventDefault();
        const url = `http://localhost:3004/users/${editFormData.id}`;
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editFormData)
        };

        fetch(url, requestOptions)
            .then((res) =>
                res.json())
            .then((response) => {
            })
            
        setEditdataId(null);
    }

    const handleDeleteClick = (dataid) => {
        //event.preventDefault();
        setEditdataId(dataid);
        const url = `http://localhost:3004/users/${dataid}`;
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editFormData)
        };

        fetch(url, requestOptions)
            .then((res) =>
                res.json())
            .then((response) => {
            })

        setEditdataId(null);
    };


    const handleAltaClick = (event,data) => {
        event.preventDefault();
        setEditdataId(data.id);
        const url = `http://localhost:3004/users/${data.id}`;
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  ...data,
                                    password:data.id,
                                    user: data.id
                                })
        };

        fetch(url, requestOptions)
            .then((res) =>
                res.json())
            .then((response) => {

            })
            
        setEditdataId(null);
    }


    return (

        <Card style={{ padding: '10px' }}>
            <h3><strong>Tabla de usuarios</strong></h3>
            <Form.Group className="mb-3" controlId="formBasicPhone" >
                <Form.Label>Buscar </Form.Label>
                <Form.Control type="text" placeholder="Busqueda" value={value} onChange={onchange} />
            </Form.Group>
            <form onSubmit={handleEditFormSubmit} href='/userManager' >
                <Table responsive >
                    <thead>
                        <tr key='title'>
                            <th>Cedula</th>
                            <th>Nombres</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Usuario</th>
                            <th>Estado</th>
                            <th>Tipo</th>
                            <th>Fecha</th>
                            <th>----------Acciones-----------</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            value.length > 0 ? filterTable.map((data) => (
                                <Fragment>
                                    {editdataId === data.id ? (
                                        <EditableRow
                                            editFormData={editFormData}
                                            setEditFormData={setEditFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}

                                        />
                                        
                                    ) : (
                                        <ReadOnlyRow
                                            data={data}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                            handleAltaClick={handleAltaClick}
                                        />
                                    )}
                                </Fragment>
                            ))
                                :
                                data.map((data) => (
                                    <Fragment>
                                        {editdataId === data.id ? (
                                            <EditableRow
                                                editFormData={editFormData}
                                                setEditFormData={setEditFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}
                                            />
                                        ) : (
                                            <ReadOnlyRow
                                                data={data}
                                                handleEditClick={handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                                handleAltaClick={handleAltaClick}
                                            />
                                        )}
                                    </Fragment>
                                ))
                        }
                    </tbody>
                </Table>
            </form>
        </Card>
    )
}










