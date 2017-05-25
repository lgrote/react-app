import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardForm from './input/card-form';

class App extends Component {
  render() {
    return (
          <MuiThemeProvider >
            <CardForm />
          </MuiThemeProvider>
    );
  }
}

export default App;
