import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Nav, NavItem } from 'react-bootstrap';

const NavButtons = () => {
    return (

        <Nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            // borderBottom: '3px solid red',
            padding: '20px',
            // marginLeft: '35vh',
        }}>
            <NavItem
                style={{
                    display: 'flex',
                    paddingLeft: '20px',
                    color: '#5C5C5C',
                    fontFamily: 'Nunito',
                    alignItems: 'flex-end',
                }} >
                <h2>
                    ENTERPRISE
                </h2>
            </NavItem>

            <Nav.Item style={{
                display: 'flex'
            }}>
                <Button
                    style={{
                        color: '#5C87DE',
                        backgroundColor: '#C2F9FF',
                        fontWeight: 'bolder',
                        paddingRight: '25px',
                        paddingLeft: '25px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        border: 'none',
                    }}
                >
                    <FontAwesomeIcon icon={faDownload} style={{ marginRight: '5px' }} />
                    GENERATE REPORT</Button>
            </Nav.Item>
        </Nav>

    )
};

export default NavButtons;