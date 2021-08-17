import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const services=[
    {
        name:'Flouride Treatmenet',
        img:fluoride,
        description:'lorem ipsum is simply dummy text and typesetting industry.ipsum has been the'
    },
    {
        name:'Cavity Filling',
        img:cavity,
        description:'lorem ipsum is simply dummy text and typesetting industry.ipsum has been the'
    },
    {
        name:'Teeth Whitening',
        img:whitening,
        description:'lorem ipsum is simply dummy text and typesetting industry.ipsum has been the'
    }
]
const Services = () => {
    return (
        <section >
            <div className="text-center mt-5 " >
                <h5 style={{color:'#1cc7c1'}}>OUR SERVICES</h5>
                <h2>SERVICES WE PROVIDE</h2>
            </div>
           <div className="d-flex justify-content-center mt-5 pt-5" >
           <div className="w-75 row">
                {
                    services.map(service=><ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
           </div>
        </section>
    );
};

export default Services;