import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { UserTable } from './UserTable'
import { UserForm } from './UserForm'

export const UserManager = () => {
    
    return (
        <Container className='container-CustomerManager' style={{ padding: '15px' }}>
            <h1>Administrador de clientes</h1>
            <Row>
                <Col>
                    <Container className='d-flex justify-content-center align-items-center align-self-center' style={{ minHeight: '500px' }}>
                        <UserForm></UserForm>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container>
                        <UserTable></UserTable>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
