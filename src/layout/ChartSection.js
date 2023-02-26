import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MrfBrands from "../components/MrfBrands.js";
import MrfCars from "../components/MrfCars.js";
import MrfCountries from "../components/MrfCountries.js";
import MrfVehicles from "../components/MrfVehicle.js";

const ChartSection = () => {
    return (

        <React.Fragment>
            <Container>
                <Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <MrfVehicles />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <MrfCountries />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <MrfCars />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Card>
                        <Card.Body>
                            <MrfBrands />
                        </Card.Body>
                    </Card>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ChartSection;