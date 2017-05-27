import React from 'react';
import Paper from 'material-ui/Paper';  
import RaisedButton from 'material-ui/RaisedButton';
import CardInput from './card-input';
import DownloadDialog from './download-dialog';
import './card-form.css';

export default class CardForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            progress: 'none',
            url: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

     handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleCreate = () => {
        const value = this.state.value;
        this.setState({progress: 'waiting'}); // maybe we need to check that the previous state was 'none' to avoid 2 request in parallel. 

        this.props.fetcher.createProxies(value).then(
            (resp) => {
                this.setState({url: resp.url})
            }
        ).then(() => {
            setTimeout(this.handleDone,2000)
        })
    };

    handleDone = () => {
        this.setState({progress: 'done'});
    };
    resetProgress = () => {
        this.setState({progress: 'none'});
    }

    render() {
        const progress = this.state.progress;
        const url = this.state.url;
        const value= this.state.value;
        return(
            <div>
                <Paper className="card-form" zDepth={2} rounded={false} >
                    <CardInput value={value} onChange={this.handleChange} />
                    <div className="align-right">
                        <RaisedButton label="Create" primary={true} onTouchTap={this.handleCreate} />
                    </div>
                </Paper>
                {progress !== 'none' ? <DownloadDialog progress={progress} reset={this.resetProgress} url={url}/> : null}
            </div>
            ); // is it idiomatic to use an empty string or null?
    }
}
