// @flow
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import './download-dialog.css';

type Props = {
    reset: ()=> void, 
    progress: string, 
    url: ?string
  }

export default class DownloadDialog extends React.Component {  
  handleClose: () => void;

  constructor(props: Props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose () {
    this.props.reset();
  };

  render() {
    const progress = this.props.progress;
    const url = this.props.url;

    switch (progress){
      case 'none':
          throw new Error("progress cannot be 'none' at this point");
      case 'waiting': return (
              <Dialog title="Waiting for PDF" modal={true} open={true} bodyClassName="download-dialog-body">
                <CircularProgress size={80} thickness={5} />
              </Dialog>);
      case 'done': 
          const actions = [
              <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
              />,
            ];
            return (
              <Dialog 
                title="Your proxies are ready" 
                modal={false}
                actions={actions}
                open={true} 
                onRequestClose={this.handleClose}
                bodyClassName="download-dialog-body">
                  <RaisedButton
                    label="Download"
                    labelPosition="before"
                    primary={true}
                    href={url}
                    target="_blank"
                    icon={<FileCloudDownload />}
                  />
              </Dialog>
            );
      default:
          throw new Error(progress + " is an illegal value for the progress state");
    }
  }
}