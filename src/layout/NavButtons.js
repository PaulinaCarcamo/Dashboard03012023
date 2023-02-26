import { faCircleUser, faDownload, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Form, Nav, NavItem } from "react-bootstrap";

const NavButtons = () => {
    return (

        <Nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            // borderBottom: '3px solid red',
            padding: '20px',
            // marginLeft: '35vh',
        }}>
            <NavItem >
                <h2>
                    DASHBOARD
                </h2>
            </NavItem>

            {/* <Nav.Item style={{
display: 'flex'
}}>
<Nav.Link href="#"><FontAwesomeIcon icon={faHome} /></Nav.Link>
<Nav.Link eventKey="#"><FontAwesomeIcon icon={faHome} /></Nav.Link>
<Nav.Link eventKey="#"><FontAwesomeIcon icon={faHome} /></Nav.Link>
</Nav.Item> */}

            <Nav.Item style={{
                display: 'flex'
            }}>
                <Button variant="outline-primary" >
                    <FontAwesomeIcon icon={faDownload} />
                    GENERATE REPORT</Button>
            </Nav.Item>
        </Nav>

    )
}

export default NavButtons;