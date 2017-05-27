// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardForm from './input/card-form';
import Fetcher from './data/fetcher';


class App extends Component {
  fetcher: Fetcher

  constructor(props: any){
    super(props);
    this.fetcher = new Fetcher('');
  }
  render() {
    return (
          <MuiThemeProvider >
            <CardForm fetcher={this.fetcher}/>
          </MuiThemeProvider>
    );
  }
}

export default App;
