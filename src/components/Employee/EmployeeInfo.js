
import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap';

export const EmployeeInfo = () => {
    
    
    return (
        <Card style={{ padding: '10px' }}>
            <h3><strong>Informacion de Vacuna</strong></h3>
            <Form>

                <Form.Group>
                    <Form.Label>Tipo de vacuna</Form.Label>
                    <Form.Select>
                        <option>Sputnik</option>
                        <option>AstraZeneca</option>
                        <option>Pfizer</option>
                        <option>Jhonson&Jhonson</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fecha de vacunacion</Form.Label>
                    <Form.Control type="date" placeholder="Ingrese su fecha de vacunacion" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone" >
                    <Form.Label>Numero de docis  </Form.Label>
                    <Form.Control type="number" placeholder="Ingrese su numero de docis" />
                </Form.Group>

            </Form>
        </Card>
    )
}
