import { Button, Container, Form, Navbar, Modal } from 'react-bootstrap';
import { useState } from "react";

function NavbarComponent() {
    //Javascript

    // useState Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useState Form
    const [form, setForm] = useState({});


    //Guarda lo que venga de los inputs
    function onChangeInputs(e) {
        const { name, value } = e.target;
        const changes = { ...form, [name]: value };
        setForm(changes)
    }

    //Guardamos el formulario en localStorage
    function SaveLocalStorage() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let response = [...users, form]
        localStorage.setItem("users", JSON.stringify(response));
    }

    //HTML
    return (
        <div>
            {/* //Navbar Component */}
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>Admin Page</Navbar.Brand>
                    <Button variant="outline-primary" onClick={handleShow}>Crear Contacto</Button>
                </Container>
            </Navbar>

            {/* Modal Component */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name='email'
                                type="email"
                                onChange={onChangeInputs}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name='name'
                                type="text"
                                onChange={onChangeInputs}
                            //una funcion que toma los datos dentro del input
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                name='lastname'
                                type="text"
                                onChange={onChangeInputs}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control
                                name='date'
                                type="date"
                                onChange={onChangeInputs}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-primary w-100" onClick={SaveLocalStorage}>
                        Guardar Contacto
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default NavbarComponent;
