import React from 'react';
import InfoCard from '../infoCard/InfoCard';
import {faClock,faPhone,faMapMarker  } from '@fortawesome/free-solid-svg-icons'

const infoData=[
    {
        title:'Opening Hours',
        description:'We are open 7 days',
        icon:faClock,
        background:'primary'
    } ,

    {
        title:'Visit our location',
        description:'Brooklyn,NY 10003 USA',
        icon:faMapMarker,
        background:'dark'
    },
       
    {
        title:'Contact Us now',
        description:'+15696473890',
        icon:faPhone,
        background:'primary'
    }
]

const BusinessInfo = () => {
    
    return (
        <div className=" d-flex justify-content-center">
            <div className="row w-75">
            {
                infoData.map(info=><InfoCard info={info}></InfoCard>)
            }
        </div>
        </div>
    );
};

export default BusinessInfo;