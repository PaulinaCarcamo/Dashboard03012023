import { faCarSide, faTruck, faTruckMonster } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Container, Row } from 'react-bootstrap';

const InfoCards = () => {
    return (
        <Container style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: '20px',
            paddingBottom: '50px'
        }}>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header style={{
                            backgroundColor: '#A3CFCD',
                            padding: '3px'
                        }}>
                        </Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                        }}>
                            <div>
                                <Card.Title>Passenger Car</Card.Title>
                                <Card.Text>
                                    Of all the countries included, nineteen produce passenger car types.
                                </Card.Text>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCarSide} color="lightgrey" size="3x" />
                            </div>
                        </Card.Body>
                        <Card.Footer style={{
                            backgroundColor: '#A3CFCD',
                            padding: '3px'
                        }}>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Header style={{
                            backgroundColor: '#EEE8A9',
                            padding: '3px'
                        }}>
                        </Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                        }}>
                            <div>
                                <Card.Title>Motorcycle</Card.Title>
                                <Card.Text>
                                    There are seven manufacturerers of all considered, producing motorcycles.
                                </Card.Text>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faTruckMonster} color="lightgrey" size="3x" />
                            </div>
                        </Card.Body>
                        <Card.Footer style={{
                            backgroundColor: '#EEE8A9',
                            padding: '3px'
                        }}>

                        </Card.Footer>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Header style={{
                            backgroundColor: '#C0C5E2',
                            padding: '3px'
                        }}>
                        </Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                        }}>
                            <div>
                                <Card.Title>Truck or Bus</Card.Title>
                                <Card.Text>
                                    Ten manufacturers actually produce bigger vehicles such as trucks and buses.
                                </Card.Text>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faTruck} color="lightgrey" size="3x" />
                            </div>
                        </Card.Body>
                        <Card.Footer style={{
                            backgroundColor: '#C0C5E2',
                            padding: '3px'
                        }}>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default InfoCards;