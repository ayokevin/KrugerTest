import React, { useContext, useEffect, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { EmployeeInfo } from './EmployeeInfo';
import { UserContext } from '../UserContext/UserContext'

export const EmployeeForm = () => {

    
    const {user, setUser} = useContext(UserContext);
    const urlusers = `http://localhost:3004/users/${user.user}`;
    const [data, getData] = useState([]);

    const fetchData = () => {
        fetch(urlusers)
            .then((res) =>
                res.json())
            .then((response) => {
                getData(response);
                console.log(data);
            })
    };
    
    useEffect(() => {
        fetchData()
    }, []);

    const onChangeTelefonoCelular = e => {
        setCampos({
            ...campos,
            telefonoCelular: e
        })
    };

    const onChange = (event) => {
        setState(event.target.value);
    };

    const onChangeDate =(e)=>{

    }

    return (
        <Card style={{ padding: '10px' }}>
            <h3><strong>Datos básicos del cliente</strong></h3>

            <Form>

                <Form.Group>
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control 
                        type="date" 
                        placeholder="Ingrese su fecha de nacimiento" 
                        value={data.date_of_birth}
                        onChange={onChangeDate}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRuc">
                    <Form.Label>Direccion de domicilio</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese su direccion" 
                        value={data.address}
                    />
                    <Form.Text className="text-muted">
                        En caso de no estar registrado ingreselo manualmente.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone" >
                    <Form.Label>Teléfono celular </Form.Label>
                    <PhoneInput
                        placeholder="Seleccione el pais y digite el numero"
                        onChange={onChangeTelefonoCelular}
                        value={data.phone}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Estado de vacunacion</Form.Label>
                    <Form.Select 
                        onChange={onChange}
                        value={data.state}
                    >
                        <option>No vacunado</option>
                        <option>Vacunado</option>
                    </Form.Select>
                </Form.Group>
            </Form>

            {state === 'Vacunado' ? <EmployeeInfo></EmployeeInfo> : null}

        </Card>
    )
}
