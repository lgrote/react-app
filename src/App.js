// @flow

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardForm from './input/card-form';

const App = (props: {}) => {
  return (
    <MuiThemeProvider>
      <CardForm />
    </MuiThemeProvider>
  );
};

export default App;
