import React from 'react';
import './Error.css';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Error = () => {
    const history = useHistory();
    return (
        <div className='error'>
            <div className="sky">
                <h2><span>4</span><span>0</span><span>4</span></h2>
            </div>
            <div className="field">
                <h2>Opps... looks like you got lost.</h2>
                
                <Button variant="contained" color="secondary" onClick={()=> history.goBack('/home')}>Go Home</Button>
            </div>
            
        </div>
    );
};

export default Error;