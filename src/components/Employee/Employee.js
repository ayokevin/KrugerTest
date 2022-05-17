import React, {  } from 'react'
import { Container,Row,Col } from 'react-bootstrap'

import { EmployeeForm } from './EmployeeForm'

export const Employee = () => {


    return (
        <Container className='container-CustomerManager' style={{ padding: '15px' }}>
            <h1>Informacion de empleado</h1>
            <Row>
                <Col>
                    <Container className='d-flex justify-content-center align-items-center align-self-center' style={{ minHeight: '500px' }}>
                        <EmployeeForm></EmployeeForm>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}
