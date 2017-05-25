import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './card-input.css';

class CardInput extends Component {
  render() {
    return (
      <TextField
          hintText="4x Island"
          floatingLabelText="Please insert your card names"
          multiLine={true}
          rows={5}
          rowsMax={7}
          fullWidth={true}
          underlineShow={true}
          />
    );
  }
}

export default CardInput;