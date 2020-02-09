import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert';
import { acceptNegotiation } from '../redux/actions/acceptNegotiation';
import { declineNegotiation } from '../redux/actions/declineNegotiation';

export default function AcceptOrDeclineDialog(props) {
    
    const alert = useAlert();

    const acceptNeg = () => {
        acceptNegotiation(props.id,alert,props.handleClose);
    }

    const declineNeg = () => {
        declineNegotiation(props.id,alert,props.handleClose);
    }

    const submitNeg = () => {
        if(props.type === "accept"){
            acceptNeg()
        }
        else {
            declineNeg()
        }
    }

    return (
        <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Do you wish to {props.type === "accept" ? "accept" : "decline"} ? </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Keep in mind that this action is irreversable so once you {props.type === "accept" ? "accept" : "decline"}, you cannot change nor modify this negotiation
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitNeg} color="primary" autoFocus>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    )
}
