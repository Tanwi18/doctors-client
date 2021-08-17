import React from 'react';
import './Testimonials.css';
import henry from '../../../images/henry.png';
import carol from '../../../images/carol.png';
import anjelina from '../../../images/anjelina.png';
import TestCard from '../TestCard/TestCard';

const testionialData = [
    {
        name: 'Willium Henry',
        img: henry,
        address: 'California'
    },
    {
        name: 'Carol Mallari',
        img: carol,
        address: 'New York'
    },
    {
        name: 'Anjelina',
        img: anjelina,
        address: 'USA'
    }
]
const Testimonials = () => {
    return (
        <section className="pt-5 offset-1 w-75">
            
               <div className="row">
               <div className="mb-5 text col-md-6">
                    <p style={{ color: '#1CC7C1' }}>TESTIMONIAL</p>
                    <h2>
                        What's Our Patients <br></br> Says
                    </h2>
                </div>
                <div className="quote col-md-6"></div>
               </div>
            < div className="row">
                {
                    testionialData.map(person => <TestCard person={person}></TestCard>)
                }
            </div>

        </section>
    );
};

export default Testimonials;