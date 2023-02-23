import React from 'react';

import ServiceMasterLogo from '../assets/images/service-master-logo.png';

function Signin() {
    const handleOnChange = (value: string): void => {
        throw new Error('Function not implemented.');
    }

    const handleSignin = (): void => {

    }

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center signup-container align-items-center my-sm-5 my-0'>
                <div className='col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-8 col-12'>
                    <div className='card registration-card m-sm-0 my-2'>
                        <div className='card-body px-sm-5 px-4'>
                            <div className='row text-center'>
                                <div className='col-12'>
                                    <img src={ServiceMasterLogo} alt="my-little-tribe-logo" className='mt-3 mb-2 w-50' />
                                </div>
                            </div>
                            <div className='row text-center'>
                                <div className='col-12'>
                                    <p className='heading'>Hello Again!</p>
                                    <p className='generic-paragraph'>We're glad that you're back.</p>
                                </div>
                            </div>
                            {/* {error && <div className="d-flex"><div role="alert" className="d-flex align-items-center fade alert alert-danger w-100 show"><i className="fa fa-close close-icon"></i><span className='ml-3'>{error}</span></div></div>} */}
                            <div className='row'>
                                <div className='col-12'>
                                    <div className={`form-group mb-4`}>
                                        <label htmlFor="email-field" className="mb-3 input-label">Email</label>
                                        <input
                                            type="email"
                                            className={`form-control input-field`}
                                            onChange={(e) => handleOnChange(e.target.value)}
                                            id='email-field' />
                                    </div>
                                    <div className={`form-group mb-4`}>
                                        <label htmlFor="password-field" className="mb-3 input-label">Password</label>
                                        <input
                                            type="password"
                                            className={`form-control input-field`}
                                            onChange={(e) => handleOnChange(e.target.value)}
                                            id='password-field' />
                                    </div>
                                    <span className="btn btn-primary col-12 mt-2 mb-4 btn-service-master-bg text-dark"
                                        onClick={handleSignin}>Signin</span>
                                </div>
                            </div>

                            <div className='row text-center'>
                                <div className='col-12'>
                                    <p className='generic-paragraph mb-4'>Don't have an account? <a href='/signup'>Sign up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;