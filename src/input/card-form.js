import React from 'react';
import Paper from 'material-ui/Paper';  
import RaisedButton from 'material-ui/RaisedButton';
import CardInput from './card-input';
import './card-form.css';

const CardForm = () => (
    <Paper className="card-form" zDepth={2} rounded={false} >
        <CardInput />
        <div className="align-right">
            <RaisedButton label="Create" primary={true} />
        </div>
    </Paper>
);

export default CardForm;