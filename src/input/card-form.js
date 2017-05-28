// @flow
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CardInput from './card-input';
import DownloadDialog from './download-dialog';
import fetcher from '../data/fetcher';
import './card-form.css';

export default class CardForm extends React.Component {
  handleChange: (any) => void;
  handleCreate: (any) => void;

  props: Props;

  state = {
    value: '',
    progress: 'none',
    url: null,
    inputEmpty: '',
  };

  handleChange = (event: any) => {
    const value = event.target.value;
    this.setState({ value });
    if (value !== '') {
      this.setState({ inputEmpty: '' });
    }
  };

  handleCreate = () => {
    const value = this.state.value.trim();
    if (!value) {
      return this.setState({ inputEmpty: 'Please insert your card name' });
    }

    this.setState({ progress: 'waiting' }); // maybe we need to check that the previous state was 'none' to avoid 2 request in parallel.

    return fetcher(value)
      .then(resp => {
        this.setState({ url: resp.url });
      })
      .then(() => {
        setTimeout(this.handleDone, 2000);
      });
  };

  handleDone = () => {
    return this.setState({ progress: 'done' });
  };

  resetProgress = () => {
    return this.setState({ progress: 'none', value: '' });
  };

  render() {
    const { progress, url, value, inputEmpty } = this.state;
    const isLoading = progress !== 'none';

    return (
      <div>
        <Paper className="card-form" zDepth={2} rounded={false}>
          <CardInput value={value} onChange={this.handleChange} errorText={inputEmpty} />
          <div className="align-right">
            <RaisedButton label="Create" primary={true} onTouchTap={this.handleCreate} />
          </div>
        </Paper>
        {isLoading && <DownloadDialog progress={progress} reset={this.resetProgress} url={url} />}
      </div>
    ); // is it idiomatic to use an empty string or null?
  }
}
