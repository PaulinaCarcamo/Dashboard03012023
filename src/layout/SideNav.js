import React from 'react';
import { faChartColumn, faFaceSmileWink, faFolder, faGear, faRocket, faStar, faStarOfDavid, faTableCells, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Container, Nav, NavItem } from 'react-bootstrap';

const SideNav = () => {
    return (

        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                color: '#fff',
                width: '35vh',
                gap: '15px',
                backgroundColor: '#5C87DE',
            }}>

            <NavItem style={{
                display: 'flex',
                paddingTop: '40px',
                paddingLeft: '15px',
                gap: '20px',
                alignItems: 'center',
            }}>
                <Nav.Link>
                    <FontAwesomeIcon icon={faFaceSmileWink} style={{ transform: 'scale(2)' }} />
                </Nav.Link>
                <Nav.Link>
                    <h3
                        style={{ fontFamily: 'Nunito' }}
                    >US ADMIN</h3>
                </Nav.Link>
            </NavItem>

            <hr />

            <NavItem style={{ display: 'flex', paddingLeft: '15px', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                <Nav.Link>
                    <FontAwesomeIcon icon={faTableCells} style={{ transform: 'scale(1.2)' }} />
                </Nav.Link>
                <Nav.Link>
                    <h4>Dashboard</h4>
                </Nav.Link>

            </NavItem>

            <hr />

            <NavItem style={{ display: 'flex', paddingLeft: '15px', flexDirection: 'column', gap: '15px' }}>
                <h6>INTERFACE</h6>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faGear} style={{ transform: 'scale(1.2)' }} />
                    <h5>Components</h5>
                </Nav.Link>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faWrench} style={{ transform: 'scale(1.2)' }} />
                    <h5>Utilities</h5>
                </Nav.Link>
            </NavItem>

            <hr />

            <Nav.Item style={{ display: 'flex', paddingLeft: '15px', flexDirection: 'column', gap: '15px' }}>
                <h6>ADDONS</h6>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faFolder} style={{ transform: 'scale(1.2)' }} />
                    <h5>Pages</h5>
                </Nav.Link>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faChartColumn} style={{ transform: 'scale(1.2)' }} />
                    <h5>Charts</h5>
                </Nav.Link>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faTableCells} style={{ transform: 'scale(1.2)' }} />
                    <h5>Tables</h5>
                </Nav.Link>
            </Nav.Item>

            <hr />

            <Nav.Item>
                <Card style={{
                    color: '#fff',
                    backgroundColor: '#ffffff48',
                    border: 'none',
                    opacity: '70%',
                    margin: '10px'
                }}>
                    <Card.Body style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        gap: '15px'
                    }}>
                        {/* <Card.Title>Passenger Car</Card.Title> */}
                        <FontAwesomeIcon icon={faRocket} size="3x" />
                        <Card.Text>US Admin Pro is packed with premium features, components, and more. Go to upgrade!</Card.Text>
                        <Button>Upgrade to Pro!</Button>
                    </Card.Body>
                </Card>
            </Nav.Item>

        </Container>
    )
};

export default SideNav;