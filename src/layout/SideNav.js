import React from 'react';
import { faChartColumn, faFaceSmileWink, faFolder, faGear, faTableCells, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, NavItem } from 'react-bootstrap';

const SideNav = () => {
    return (

        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                width: '35vh',
                gap: '15px',
                backgroundColor: '#5C87DE',
            }}>

            <NavItem style={{
                display: 'flex',
                padding: '10px',
                gap: '6px',
                alignItems: 'center'
            }}>
                <Nav.Link>
                    <FontAwesomeIcon icon={faFaceSmileWink} size="3x" />
                </Nav.Link>
                <Nav.Link>
                    <h3>PC ADMIN</h3>
                </Nav.Link>
            </NavItem>

            <hr />

            <NavItem style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                <Nav.Link>
                    <FontAwesomeIcon icon={faTableCells} />
                </Nav.Link>
                <Nav.Link>
                    <h4>Dashboard</h4>
                </Nav.Link>

            </NavItem>

            <hr />

            <NavItem>
                <h6>INTERFACE</h6>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faGear} />
                    <h5>Components</h5>
                </Nav.Link>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faWrench} />
                    <h5>Utilities</h5>
                </Nav.Link>
            </NavItem>

            <hr />

            <Nav.Item>
                <h6>ADDONS</h6>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faFolder} />
                    <h5>Pages</h5>
                </Nav.Link>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faChartColumn} />
                    <h5>Charts</h5>
                </Nav.Link>
                <Nav.Link style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', gap: '15px' }}>
                    <FontAwesomeIcon icon={faTableCells} />
                    <h5>Tables</h5>
                </Nav.Link>
            </Nav.Item>

            <hr />

        </Container>
    )
};

export default SideNav;