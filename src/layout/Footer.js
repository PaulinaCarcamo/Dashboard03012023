import { faDatabase, faGear, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="px-4 py-5 border border-4 border-bottom-0 border-start-0 border-end-0" id="hanging-icons"
            style={{
                color: '#5C5C5C'
            }}>
            <h2 className="pb-2 border-bottom">Admin Dashboard</h2>

            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col d-flex align-items-start">
                    <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <FontAwesomeIcon icon={faGear} color="#6F7385" />
                    </div>
                    <div>
                        <h3 className="fs-2">Components</h3>
                        <p>Customize your dashboard to improve your experience. Set up the language, email, messaging, navigation, workspace structure, and other activities to fit your preferences.</p>
                        <Button style={{
                            paddingRight: '22px',
                            paddingLeft: '22px',
                            paddingTop: '8px',
                            paddingBottom: '10px',
                            backgroundColor: '#5C87DE', border: 'none',
                            fontWeight: '500'
                        }}>
                            Components
                        </Button>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <FontAwesomeIcon icon={faDatabase} color="#6F7385" />
                    </div>
                    <div>
                        <h3 className="fs-2">Database</h3>
                        <p>Consider encrypting your device. Back up your dashboard data regularly and keep it safe. Prevent from others handing over your private information without permission.</p>
                        <Button style={{
                            paddingRight: '22px',
                            paddingLeft: '22px',
                            paddingTop: '8px',
                            paddingBottom: '10px',
                            backgroundColor: '#5C87DE', border: 'none',
                            fontWeight: '500'

                        }}>
                            Database
                        </Button>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                        <FontAwesomeIcon icon={faScrewdriverWrench} color="#6F7385" />
                    </div>
                    <div>
                        <h3 className="fs-2">Settings</h3>
                        <p>Change dashboard settings and make your own adjustments. Connect and disconnect from your mobile network, enable or disable incoming notifications and messages.</p>
                        <Button style={{
                            paddingRight: '22px',
                            paddingLeft: '22px',
                            paddingTop: '8px',
                            paddingBottom: '10px',
                            backgroundColor: '#5C87DE', border: 'none',
                            fontWeight: '500'
                        }}>
                            Settings
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;