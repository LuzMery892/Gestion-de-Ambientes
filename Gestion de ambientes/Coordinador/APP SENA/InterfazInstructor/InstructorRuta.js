import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//ejemplo de como implementar interfaz del instructor, te dejo las bases tu las corriges como tu quieras 
const InstructorRuta = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Header>Bienvenido Instructor</Card.Header>
                        <Card.Body>
                            <Card.Title>Panel de Control</Card.Title>
                            <Card.Text>
                                Aquí puedes ver y gestionar tus reservas.
                            </Card.Text>
                            <Button variant="primary">Ver Reservas</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default InstructorDashboard;
