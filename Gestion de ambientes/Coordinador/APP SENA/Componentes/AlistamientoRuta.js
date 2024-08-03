import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//ejemplo de como implemetra interfaz alistamiento 11
const AlistamientoRuta = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Header>Bienvenido Alistamiento</Card.Header>
                        <Card.Body>
                            <Card.Title>Panel de Control</Card.Title>
                            <Card.Text>
                                Aquí puedes gestionar las tareas de alistamiento y verificar reservas.
                            </Card.Text>
                            <Button variant="primary">Gestionar Tareas</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AlistamientoRuta;
