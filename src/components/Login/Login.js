import React, { useContext, useState } from 'react'
import { Form, Button, Container, Row, Col, Card, Modal } from 'react-bootstrap';
import background from './../../img/background.jpg'
import { UserContext } from '../UserContext/UserContext';

export const Login = () => {
    const { user, setUser } = useContext(UserContext);
    //<Modal>
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //</Modal>

    //<Validation>
    const [validated, setValidated] = useState(false);
    //</Validation>

    const [modalmessage, setModalmessage] = useState({ tittle: '', menssage: '', href: '/' })
    const [activado, setActivado] = useState(false)
    const [campos, setCampos] = useState({ usuario: '', password: '' })
    const [data, getData] = useState([]);


    console.log(user)
    const onChangePassword = e => {

        setCampos({
            ...campos,
            password: e.target.value
        })
    };
    const onChangeUsuario = e => {
        setUser({
            user: e.target.value
        });
        setCampos({
            ...campos,
            usuario: e.target.value
        })
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.preventDefault();
            event.stopPropagation();

            setModalmessage({
                tittle: "Incorrecto",
                menssage: "Usuario o contraseña incorrectos",
                href: '/'
            })
        } else {
            const url = `http://localhost:3004/users/${campos.usuario}`;
            fetch(url)
                .then((res) =>
                    res.json())
                .then((response) => {
                    getData(response);
                    if ((response.user === campos.usuario) && (response.password === campos.password)) {
                        if (response.position === 'Administrador') {
                            setModalmessage({
                                tittle: "Correcto",
                                menssage: "Ingresando al sistema",
                                href: '/userManager'
                            })
                        }
                        if (response.position === 'Empleado') {


                            setModalmessage({
                                tittle: "Correcto",
                                menssage: "Ingresando al sistema",
                                href: `/employeeForm`

                            })

                        }
                    } else {
                        setModalmessage({
                            tittle: "Incorrecto",
                            menssage: "Usuario o contraseña incorrectos"
                        })
                    }
                })



        }
        setActivado(true);
        handleShow();
        setValidated(true);
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Container className="container-Subscribe" >
            <Card className="bg-dark text-white border-dark">
                <Card.Img src={background} alt="Card image" style={{ minHeight: '450px' }} />
                <Card.ImgOverlay className='d-flex justify-content-center align-items-center align-self-center' >
                    <Row style={{ margin: "auto" }} >
                        <Col className='rounded-3' style={{ backgroundColor: 'rgba(0,0,0,.5)', padding: 20 }} xs={{ order: 'second' }} >
                            <h1 style={{ width: '350px' }}> Ingrese </h1>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Usuario, ejemplo ayokevin"
                                        onChange={onChangeUsuario}
                                        value={campos.usuario}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Ingresar password"
                                        onChange={onChangePassword}
                                        value={campos.password}
                                    />
                                </Form.Group>
                                <Form.Group className='text-center'>
                                    <Button variant="primary" onClick={handleShow} type='submit'>
                                        Ingresar
                                    </Button>
                                </Form.Group>
                            </Form>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{modalmessage.tittle}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{modalmessage.menssage}</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose} >
                                        Cerrar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>
        </Container>
    )
}
