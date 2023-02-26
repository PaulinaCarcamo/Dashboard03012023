import { faCalendarAlt, faComments, faTasksAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Nav, NavItem } from 'react-bootstrap';

const TopNav = () => {
    return (

        <Nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '4px solid #D54D4C',
            padding: '20px',
        }}>
            <NavItem>
                <Nav.Link >OVERVIEW</Nav.Link>
            </NavItem>

            <Nav.Item style={{
                display: 'flex'
            }}>
                <Nav.Link eventKey="#"><FontAwesomeIcon icon={faCalendarAlt}
                    style={{ transform: 'scale(1.6)', color: '#A3A7BA' }} /></Nav.Link>
                <Nav.Link href="#"><FontAwesomeIcon icon={faComments}
                    style={{ transform: 'scale(1.6)', color: '#A3A7BA' }} /></Nav.Link>
                <Nav.Link eventKey="#"><FontAwesomeIcon icon={faTasksAlt}
                    style={{ transform: 'scale(1.6)', color: '#A3A7BA' }} /></Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Button
                    style={{
                        color: '#D54D4C',
                        backgroundColor: '#FFE6D9',
                        fontWeight: 'bolder',
                        paddingRight: '25px',
                        paddingLeft: '25px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        border: 'none',
                        btnHover: 'red'
                    }}
                >LOG IN</Button>
            </Nav.Item>
        </Nav>

    )
};

export default TopNav;