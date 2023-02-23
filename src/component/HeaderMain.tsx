import React from 'react';

import ServiceMasterLogo from '../assets/images/service-master-logo.png';

function HeaderMain() {
    return (
        <header className='mb-5'>
            <nav className="navbar navbar-expand-lg navbar-dark header-bg scrolling-navbar py-2">
                <a className="navbar-brand text-dark " href="#">
                    <img src={ServiceMasterLogo} alt="my-little-tribe-logo" className='w-75' />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-dark " href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark " href="/my-bookings">My Bookings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark " href="/my-account">My Account</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default HeaderMain;