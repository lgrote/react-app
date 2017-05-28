// @flow
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import './download-dialog.css';

type Props = {
  reset: () => void,
  progress: string,
  url: ?string,
};

const DownloadDialog = (props: Props) => {
  switch (props.progress) {
    case 'none':
      throw new Error("progress cannot be 'none' at this point");
    case 'waiting':
      return (
        <Dialog
          title="Waiting for PDF"
          modal={true}
          open={true}
          bodyClassName="download-dialog-body"
        >
          <CircularProgress size={80} thickness={5} />
        </Dialog>
      );
    case 'done':
      const actions = [<FlatButton label="Close" primary={true} onTouchTap={props.reset} />];
      return (
        <Dialog
          title="Your proxies are ready"
          modal={false}
          actions={actions}
          open={true}
          onRequestClose={props.reset}
          bodyClassName="download-dialog-body"
        >
          <RaisedButton
            label="Download"
            labelPosition="before"
            primary={true}
            href={props.url}
            target="_blank"
            icon={<FileCloudDownload />}
          />
        </Dialog>
      );
    default:
      throw new Error(props.progress + ' is an illegal value for the progress state');
  }
};

export default DownloadDialog;
