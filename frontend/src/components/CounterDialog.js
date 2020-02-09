import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { counterNegotiation } from '../redux/actions/counterNegotiation';
import { useAlert } from 'react-alert';

export default function CounterDialog(props) {
    const alert = useAlert();

    const [price,updatePrice] = React.useState();

    const handleChange = event => {
        updatePrice(event.target.value);
    }

    const counterNeg = () => {
        counterNegotiation(props.id,price,alert,props.handleClose);
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Counter a negotiation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            countering a negotiation means that you might offer a better price to the other party, it doesn't mean you accepted nor declined.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="suggested price to counter"
            type="price"
            name="price"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={counterNeg} color="primary">
            Counter
          </Button>
        </DialogActions>
      </Dialog>
    )
}
