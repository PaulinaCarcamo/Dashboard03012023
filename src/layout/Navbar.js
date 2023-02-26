import { faBell, faCircleUser, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, InputGroup, Nav, NavItem } from 'react-bootstrap';

const Navbar = () => {
    return (

        <Nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
        }}>

            <NavItem>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <Button id="button-addon2" style={{
                        color: '#fff',
                        backgroundColor: '#A3A7BA',
                        border: 'none'
                    }}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </InputGroup>
            </NavItem>

            <Nav.Item
                style={{
                    display: 'flex',
                    gap: '10px',
                    justifyItems: 'center',
                    alignItems: 'center'
                }}>

                <Nav.Link style={{ display: 'flex', gap: '25px' }}>
                    <FontAwesomeIcon icon={faBell} style={{ transform: 'scale(1.6)', color: '#A3A7BA' }} />
                    <FontAwesomeIcon icon={faEnvelope} style={{ transform: 'scale(1.6)', color: '#A3A7BA' }} />
                </Nav.Link>

                <span style={{ display: 'flex', gap: '25px' }}> | </span>

                <Nav.Link style={{
                    display: 'flex',
                    gap: '20px',
                    justifyItems: 'center',
                    alignItems: 'center'
                }}>
                    <span style={{
                        color: '#5C5C5C'
                    }}
                    >ADMIN ACCT</span>
                    <FontAwesomeIcon icon={faCircleUser} style={{ transform: 'scale(1.8)', color: '#A3A7BA' }} />
                </Nav.Link>

            </Nav.Item>
        </Nav>
    )
};

export default Navbar;