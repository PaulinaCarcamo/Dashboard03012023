import { faCalendar, faCalendarAlt, faComments, faFile, faHome, faLanguage, faListCheck, faListDots, faSquarePollHorizontal, faTasks, faTasksAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Nav, NavItem } from "react-bootstrap";

const TopNav = () => {
    return (

        <Nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '4px solid #D54D4C',
            padding: '20px',
        }}>
            <NavItem>
                <Nav.Link>Overview</Nav.Link>
            </NavItem>

            <Nav.Item style={{
                display: 'flex'
            }}>
                <Nav.Link eventKey="#"><FontAwesomeIcon icon={faCalendarAlt} /></Nav.Link>
                <Nav.Link href="#"><FontAwesomeIcon icon={faComments} /></Nav.Link>
                <Nav.Link eventKey="#"><FontAwesomeIcon icon={faTasksAlt} /></Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Button>LOG IN</Button>
            </Nav.Item>
        </Nav>

    )
}

export default TopNav;