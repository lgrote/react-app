// @flow
import React from 'react';
import TextField from 'material-ui/TextField';

type Props = {
  value: string,
  onChange: (any) => void,
  errorText: string,
};

const CardInput = (props: Props) => {
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
};
export default CardInput;
