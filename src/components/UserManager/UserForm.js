import React, { useState } from 'react'
import { Card, Form, Button, Modal } from 'react-bootstrap';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { createUser } from '../../helpers/userApi';
import { useFetch } from '../../hooks/useFetch';
import { validation } from '../../helpers/validation';


export const UserForm = () => {



    //<Modal>
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //</Modal>

    //<Validation>
    const [validated, setValidated] = useState(false);
    //</Validation>

    const [modalmessage, setModalmessage] = useState({ tittle: '', menssage: '' })
    const [activated, setActivated] = useState(false)
    const [fields, setFields] = useState({ id: '', firstName: '', lastName: '', phone: '', email: '', position: '' })
    const { url, requestOptions } = createUser(fields);
    useFetch(url, requestOptions, activated, setActivated);

    const onChangeId = e => {
        let value = validation(e, 'onlyNumbers')
        if (value.length < 11) {
            setFields({
                ...fields,
                id: value
            })
        } else {
            value = value
        }
    };

    const onChangeFirstName = (e) => {
        setFields({
            ...fields,
            firstName: validation(e, 'onlyLetters')
        })
    };

    const onChangeLastName = e => {
        setFields({
            ...fields,
            lastName: validation(e, 'onlyLetters')
        })
    };

    const onChangePhone = e => {
        setFields({
            ...fields,
            phone: e
        })
    };

    const onChangeEmail = e => {
        setFields({
            ...fields,
            email: e.target.value
        })
    };

    const onChangePosition = e => {
        setFields({
            ...fields,
            position: e.target.value
        })
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            event.preventDefault();
            event.stopPropagation();
            setModalmessage({
                tittle: "No se ha completado",
                menssage: "Rellene todos los fields"
            })

        } else {
            setActivated(true);
            setModalmessage({
                tittle: "Usuario creado!",
                menssage: "El usuario se ha creado"
            })
        }
        handleShow();
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Card style={{ padding: '10px' }}>
            <h3><strong>Datos básicos del cliente</strong></h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicRuc">
                    <Form.Label>Cedula</Form.Label>
                    <Form.Control
                        required
                        name="id"
                        type="text"
                        placeholder="Ingrese/Seleccione el numero de RUC"
                        onChange={onChangeId}
                        value={fields.id}
                    />
                    <Form.Text className="text-muted">
                        En caso de no estar registrado ingreselo manualmente.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicfirstName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        name="name"
                        type="text"
                        placeholder="Ingrese/Seleccione el firstName del usuario"
                        onChange={onChangeFirstName}
                        value={fields.firstName}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicfirstName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingrese/Seleccione el lastName del usuario"
                        onChange={onChangeLastName}
                        value={fields.lastName}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone" >
                    <Form.Label>Teléfono celular </Form.Label>
                    <PhoneInput
                        required
                        placeholder="Seleccione el pais y digite el numero"
                        onChange={onChangePhone}
                        value={fields.phone}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicfirstName">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Ingrese el email electronico"
                        onChange={onChangeEmail}
                        value={fields.email}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Rol</Form.Label>
                    <Form.Select
                        required
                        onChange={onChangePosition}
                        value={fields.position}
                    >
                        <option></option>
                        <option>Administrador</option>
                        <option>Empleado</option>

                    </Form.Select>
                </Form.Group>

                <Form.Group className='d-flex justify-content-center align-items-center align-self-center' style={{ padding: '10px' }}>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form.Group>

            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalmessage.tittle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalmessage.menssage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} href='/userManager'>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

        </Card>
    )
}
