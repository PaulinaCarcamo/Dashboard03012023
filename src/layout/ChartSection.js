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
                            <Card.Body>
                                <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                </Placeholder>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                    <Placeholder xs={6} />
                                </Placeholder>
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