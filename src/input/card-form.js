import React from 'react';
import Paper from 'material-ui/Paper';  
import RaisedButton from 'material-ui/RaisedButton';
import CardInput from './card-input';
import './card-form.css';

const style = {
    padding: 20,
    margin: 20,
};

const styleButton = {
    textAlgin: 'right',
};

const CardForm = () => (
    <Paper style={style} zDepth={2} rounded={false} >
        <CardInput />
        <div className="align-right">
            <RaisedButton style={styleButton} label="Primary" primary={true} />
        </div>
    </Paper>
);

export default CardForm;