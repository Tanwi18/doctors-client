import React from 'react';
import './TestCard.css';

const TestCard = ({ person }) => {
    return (

        <div className="col-md-4  ">
            <div className="m-3 test-card">
                <p className="text-secondary ms-3">It is a lomg established fact that by the readable content of a fact layout.The point of using Lorem a more or less normal disteacted by using content here</p>

                <div className="row pt-5">
                    <div className="col-md-4 d-flex justify-content-end">
                        <img src={person.img} alt=""></img>
                    </div>
                    <div className="col-md-8">
                        <p style={{ color: '#1CC7C1' }}>{person.name}</p>
                        <small>{person.address}</small>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TestCard;