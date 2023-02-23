import React from 'react';

function MyBookings() {
    function handleOnChange(value: string): void {
        console.log(value)
    }

    return (
        <>
            <div className="card mb-4">
                <div className="card-header bg-dark text-white">
                    Service title
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-3">Service subtitle</h5>
                    <p className="card-text mb-3">Booking description - Lorem ipsum dolor sit amet consectetur. Feugiat morbi enim etiam gravida non vitae. Est amet risus sagittis nisi nunc facilisi dapibus placerat sed. Vel eget bibendum nisl etiam. Suspendisse magna natoque adipiscing a fermentum amet vulputate elementum mi. Netus mi eget tortor amet vitae egestas. Dolor amet libero a sit vestibulum eget non duis nec.</p>
                    <p><strong>Service address: </strong>100 Pantomine Boulevard, Brampton, Ontario, L6Y5N4</p>
                    <p><strong>Date: </strong>2023-03-23</p>
                    <p><strong>Time: </strong>10:30am</p>
                    <p><strong>Provider: </strong>Provider name</p>
                    <span className="btn btn-primary btn-service-master-bg text-dark mr-3" onClick={(e) => document.getElementById('date-field-container')?.classList.remove('d-none')}>Request reschedule</span>
                    <a href="#" className="btn btn-danger text-white">Cancel booking</a>
                    <div className={`form-group my-4 d-none`} id="date-field-container">
                        <label htmlFor="date-field" className="mb-3 input-label">Suggested date</label>
                        <input
                            type="date"
                            className={`form-control input-field`}
                            onChange={(e) => handleOnChange(e.target.value)}
                            id='date-field' />
                        <span className='btn btn-primary btn-service-master-bg text-dark mt-3' onClick={(e) => document.getElementById('date-field-container')?.classList.add('d-none')}>Reschedule</span>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MyBookings;