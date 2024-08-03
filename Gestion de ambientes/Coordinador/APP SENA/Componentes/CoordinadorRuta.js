import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

//este es un ejemplo de como gestionar cada interfaz coordinador esto es un borrador, lo puedes acomodar como tu quieras.11
const CoordinadorRuta = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Header>Bienvenido Coordinador</Card.Header>
                        <Card.Body>
                            <Card.Title>Panel de Control</Card.Title>
                            <Card.Text>
                                Aquí puedes gestionar usuarios, reservas y más.
                            </Card.Text>
                            <Button variant="primary">Gestionar Usuarios</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CoordinadorRuta;
