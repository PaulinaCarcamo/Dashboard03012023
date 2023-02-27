import React from 'react';
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap';
import MrfBrands from '../components/MrfBrands.js';
import MrfCars from '../components/MrfCars.js';
import MrfCountries from '../components/MrfCountries.js';
import MrfTrucks from '../components/MrfTrucks.js';
import MrfMPV from '../components/MrfTrucks.js';
import MrfVehicles from '../components/MrfVehicle.js';

const ChartSection = () => {
    return (
        <React.Fragment>
            <Container style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <MrfVehicles />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card style={{display: 'flex', height: '100%'}}>
                            <Card.Body>
                                <MrfCountries />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Card >
                            <Card.Body>
                                <MrfCars />
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Body>
                                <MrfTrucks />
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <MrfBrands />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default ChartSection;