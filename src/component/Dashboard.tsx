import React from 'react';
import { useNavigate } from 'react-router';

function Dashboard() {
    const navigate = useNavigate();
    const handleBookNow = (): void => {
        console.log("Navigating")
        navigate('/book-now')
    }

    return (
        <>
            <div className="card mb-4">
                <div className="card-header bg-dark text-white">
                    Service title
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-3">Service subtitle</h5>
                    <p className="card-text mb-3">Service description - Lorem ipsum dolor sit amet consectetur. Feugiat morbi enim etiam gravida non vitae. Est amet risus sagittis nisi nunc facilisi dapibus placerat sed. Vel eget bibendum nisl etiam. Suspendisse magna natoque adipiscing a fermentum amet vulputate elementum mi. Netus mi eget tortor amet vitae egestas. Dolor amet libero a sit vestibulum eget non duis nec.</p>
                    <span className="btn btn-primary btn-service-master-bg text-dark" onClick={handleBookNow}>Book now</span>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header bg-dark text-white">
                    Service title
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-3">Service subtitle</h5>
                    <p className="card-text mb-3">Service description - Lorem ipsum dolor sit amet consectetur. Feugiat morbi enim etiam gravida non vitae. Est amet risus sagittis nisi nunc facilisi dapibus placerat sed. Vel eget bibendum nisl etiam. Suspendisse magna natoque adipiscing a fermentum amet vulputate elementum mi. Netus mi eget tortor amet vitae egestas. Dolor amet libero a sit vestibulum eget non duis nec.</p>
                    <span className="btn btn-primary btn-service-master-bg text-dark" onClick={handleBookNow}>Book now</span>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header bg-dark text-white">
                    Service title
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-3">Service subtitle</h5>
                    <p className="card-text mb-3">Service description - Lorem ipsum dolor sit amet consectetur. Feugiat morbi enim etiam gravida non vitae. Est amet risus sagittis nisi nunc facilisi dapibus placerat sed. Vel eget bibendum nisl etiam. Suspendisse magna natoque adipiscing a fermentum amet vulputate elementum mi. Netus mi eget tortor amet vitae egestas. Dolor amet libero a sit vestibulum eget non duis nec.</p>
                    <span className="btn btn-primary btn-service-master-bg text-dark" onClick={handleBookNow}>Book now</span>
                </div>
            </div>
        </>
    );
}

export default Dashboard;