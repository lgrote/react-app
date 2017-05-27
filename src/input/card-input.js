import React from 'react';
import TextField from 'material-ui/TextField';

const CardInput = (props) => {
    return (
      <TextField
          hintText="4x Island"
          floatingLabelText="Please insert your card names"
          multiLine={true}
          rows={3}
          rowsMax={10}
          fullWidth={true}
          underlineShow={true}
          value={props.value}
          onChange={props.onChange}
          errorText={props.errorText}
          />
    );
}
export default CardInput;