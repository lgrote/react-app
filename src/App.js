// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardForm from './input/card-form';
import Fetcher from './data/fetcher';


const App = (props: {}) => {
    const fetcher = new Fetcher('');
    return (
          <MuiThemeProvider >
            <CardForm fetcher={fetcher}/>
          </MuiThemeProvider>
    );
}

export default App;
