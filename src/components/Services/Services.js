import React from 'react';
import { useParams } from 'react-router';

const Services = (props) => {
    const params = useParams();
    console.log('Services', params);
    return (
        <div>
            <h2>Services</h2>
        </div>
    );
};

export default Services;