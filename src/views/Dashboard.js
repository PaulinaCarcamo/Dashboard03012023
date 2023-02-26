
import React from 'react';
import TopNav from '../layout/TopNav.js';
import SideNav from '../layout/SideNav.js';
import Navbar from '../layout/Navbar.js';
import NavButtons from '../layout/NavButtons.js';
import InfoCards from '../layout/InfoCards.js';
import ChartSection from '../layout/ChartSection.js';
import Footer from '../layout/Footer.js';

const Dashboard = () => {
    return (
        <React.Fragment>

            {/* TOP NAV STARTS HERE */}
            <div>
                <TopNav />
            </div>
            {/* TOP NAV ENDS HERE */}

            <div style={{ display: 'flex' }}>
                {/* SIDE NAV STARTS HERE */}
                <SideNav />
                {/* SIDE NAV ENDS HERE */}

                <div style={{ width: '100%', backgroundColor: '#F5F9FF' }}>
                    {/* SECOND NAV STARTS HERE */}
                    <div style={{ backgroundColor: '#fff'}}>
                        <Navbar />
                    </div>
                    {/* SECOND NAV ENDS HERE */}

                    {/* NAV BUTTONS START HERE */}
                    <div>
                        <NavButtons />
                    </div>
                    {/* NAV BUTTONS END HERE */}

                    {/* CARDS START HERE */}
                    <div>
                        <InfoCards />
                    </div>
                    {/* CARDS END HERE */}

                    {/* CHARTS START HERE */}
                    <div>
                        <ChartSection />
                    </div>
                    {/* CHARTS END HERE */}

                </div>
            </div>

            {/* FOOTER STARTS HERE */}
            <div>
                <Footer />
            </div>
            {/* FOOTER ENDS HERE */}

        </React.Fragment>
    )
};

export default Dashboard;