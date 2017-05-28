// @flow
import React from 'react';
import Paper from 'material-ui/Paper';  
import RaisedButton from 'material-ui/RaisedButton';
import CardInput from './card-input';
import DownloadDialog from './download-dialog';
import Fetcher from '../data/fetcher';
import './card-form.css';

type Props = {
    fetcher: Fetcher
}

export default class CardForm extends React.Component {
    handleChange: (any) => void;
    handleCreate: (any) => void;

    state = {
        value: '',
        progress: 'none',
        url: null,
        inputEmpty: '',
    }

    

    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

     handleChange(event: any) {
        const value = event.target.value;
        this.setState({value: value});
        if (value !== ''){
            this.setState({inputEmpty: ""})
        }
    }

    handleCreate = () => {
        const value = this.state.value.trim();
        if (value === ''){
            this.setState({inputEmpty: "Please insert your card name"})
            return
        }

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
        const { progress, url, value, inputEmpty } = this.state;
        
        return(
            <div>
                <Paper className="card-form" zDepth={2} rounded={false} >
                    <CardInput value={value} onChange={this.handleChange} errorText={inputEmpty}/>
                    <div className="align-right">
                        <RaisedButton label="Create" primary={true} onTouchTap={this.handleCreate} />
                    </div>
                </Paper>
                {progress !== 'none' ? <DownloadDialog progress={progress} reset={this.resetProgress} url={url}/> : null}
            </div>
            ); // is it idiomatic to use an empty string or null?
    }
}
