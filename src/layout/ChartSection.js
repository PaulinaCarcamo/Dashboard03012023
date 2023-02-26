import React from 'react';
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap';
import MrfBrands from '../components/MrfBrands.js';
import MrfCars from '../components/MrfCars.js';
import MrfCountries from '../components/MrfCountries.js';
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
                        <Card>
                            <Card.Body>
                                <MrfCountries />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Card >
                            <Card.Body>
                                <MrfCars />
                            </Card.Body>
                        </Card>

                        <Card style={{ height: '100%' }}>
                            <Card.Body style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                                justifyItems: 'center',
                                justifyContent: 'center',
                                color: '#D5D5D5'
                            }}>
                                <Placeholder xs={6} />
                                <Placeholder className="w-75" /> <Placeholder className="w-75" />
                                <Placeholder style={{ width: '35%' }} /> <Placeholder className="w-75" />
                                <Placeholder style={{ width: '50%' }} /> <Placeholder className="w-75" />
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