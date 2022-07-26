import React from 'react';
import {useParams} from 'react-router-dom';

const UpdateForm = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>this is update form{id}</h1>
        </div>
    );
};

export default UpdateForm;