import { faBell, faCircleUser, faEnvelope, faHome, faMagnifyingGlass, faMailBulk, faMailReply, faMedal, faMessage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Form, InputGroup, Nav, NavItem } from "react-bootstrap";

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
                    <Button variant="outline-secondary" id="button-addon2">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </InputGroup>
            </NavItem>


            <Nav.Item
                style={{ display: 'flex' }}>
                <Nav.Link style={{ display: 'flex', gap: '20px' }}>
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faEnvelope} />
                </Nav.Link>

                <div> | </div>

                <Nav.Link style={{ display: 'flex', gap: '20px' }}>
                    <span>PERSON NAME</span>
                    <FontAwesomeIcon icon={faCircleUser} />
                </Nav.Link>

            </Nav.Item>




        </Nav>

    )
}

export default Navbar;