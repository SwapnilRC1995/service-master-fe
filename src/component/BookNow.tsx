import React from 'react';
import { useNavigate } from 'react-router';

function BookNow() {
    const navigate = useNavigate();
    const urgencyOptions = ["ASAP", "Anytime", "1 week"];
    const provinceOptions = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"];
    const handleOnChange = (value: string): void => {
        throw new Error('Function not implemented.');
    }

    const handleSelectOnChange = () => {

    }
    const handleBookNow = (): void => {
        console.log("Navigating")
        navigate('/select-provider')
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
                                <div className='col-12'>
                                    <div className={`form-group mb-4`}>
                                        <label htmlFor="urgency-field" className="mb-3 input-label-dd">Urgency</label>
                                        <div className='select-wrapper'>
                                            <select
                                                className={`form-control input-field-dd`}
                                                id="urgency-field"
                                                onChange={handleSelectOnChange} >
                                                <option value="" className='option-disabled'>Select</option>
                                                {urgencyOptions.map((options, index) => {
                                                    return (
                                                        <option value={options} key={index}>{options}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className={`form-group mb-4`}>
                                        <label htmlFor="postal-code-field" className="mb-3 input-label">Postal code</label>
                                        <input
                                            type="text"
                                            className={`form-control input-field`}
                                            onChange={(e) => handleOnChange(e.target.value)}
                                            id='postal-code-field' />
                                    </div>
                                    <div className={`form-group mb-4`}>
                                        <label htmlFor="description-field" className="mb-3 input-label">Description</label>
                                        <textarea
                                            className={`form-control input-field`}
                                            onChange={(e) => handleOnChange(e.target.value)}
                                            id='description-field' />
                                    </div>
                                    <div className={`form-group mb-4`}>
                                        <label htmlFor="address-field" className="mb-3 input-label">Address</label>
                                        <input
                                            type="text"
                                            className={`form-control input-field`}
                                            onChange={(e) => handleOnChange(e.target.value)}
                                            id='address-field' />
                                    </div>
                                    <div className={`form-group mb-4`}>
                                        <label htmlFor="city-field" className="mb-3 input-label">City</label>
                                        <input
                                            type="text"
                                            className={`form-control input-field`}
                                            onChange={(e) => handleOnChange(e.target.value)}
                                            id='city-field' />
                                    </div>
                                    <div className={`form-group mb-4`}>
                                        <label htmlFor="province-field" className="mb-3 input-label-dd">Province</label>
                                        <div className='select-wrapper'>
                                            <select
                                                className={`form-control input-field-dd`}
                                                id="province-field"
                                                onChange={handleSelectOnChange} >
                                                <option value="" className='option-disabled'>Select</option>
                                                {provinceOptions.map((options, index) => {
                                                    return (
                                                        <option value={options} key={index}>{options}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <span className="btn btn-primary col-12 mt-2 mb-4 btn-service-master-bg text-dark"
                                        onClick={() => handleBookNow()}>Select provider &gt;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookNow;