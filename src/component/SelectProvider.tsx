import React from 'react';

import ProviderPlaceholder from '../assets/images/profile-image.png';

function SelectProvider() {
    const handleOnChange = (): void => {
        throw new Error('Function not implemented.');
    }

    const handleSelectOnChange = () => {

    }
    const handleSignup = (): void => {

    }

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center signup-container align-items-center my-sm-5 my-0'>
                <div className='col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-9 col-12'>
                    <div className='card registration-card m-sm-0 my-2'>
                        <div className='class-header btn-service-master-bg pt-3 pb-2'>
                            <div className='row text-center'>
                                <h3 className='mb-4 fw-bold'>Service title</h3>
                                <h5 className='generic-paragraph'>Service subtitle</h5>
                            </div>
                        </div>
                        <div className='card-body px-sm-5 px-4'>
                            {/* {error && <div className="d-flex"><div role="alert" className="d-flex align-items-center fade alert alert-danger w-100 show"><i className="fa fa-close close-icon"></i><span className='ml-3'>{error}</span></div></div>} */}
                            <div className='row'>
                                <div className='col-12 py-4'>
                                    <div className='row text-center'>
                                        <div className='col-6 select-pointer' onClick={handleOnChange}>
                                            <img src={ProviderPlaceholder} alt="provider-placeholder" />
                                            <p className='fw-bold'>Provider name</p>
                                        </div>
                                        <div className='col-6 select-pointer' onClick={handleOnChange}>
                                            <img src={ProviderPlaceholder} alt="provider-placeholder" />
                                            <p className='fw-bold'>Provider name</p>
                                        </div>
                                        <div className='col-6 select-pointer' onClick={handleOnChange}>
                                            <img src={ProviderPlaceholder} alt="provider-placeholder" />
                                            <p className='fw-bold'>Provider name</p>
                                        </div>
                                        <div className='col-6 select-pointer' onClick={handleOnChange}>
                                            <img src={ProviderPlaceholder} alt="provider-placeholder" />
                                            <p className='fw-bold'>Provider name</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <span className="btn btn-primary col-12 mt-2 mb-4 btn-service-master-bg text-dark"
                                        onClick={handleSignup}>Confirm booking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectProvider;