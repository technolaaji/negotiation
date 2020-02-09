import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as moment from 'moment'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export default function PendingBox(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [price, updatePrice] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateNegotiationPrice = (e) => {
      updatePrice(e.target.value);
  }

  return (
      <>
    <Card className={classes.root}>
     
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name} - {props.price}$
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            status: {props.status}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            time: {moment(props.time).format("DD-MM-YYYY")}
          </Typography>
        </CardContent>
     
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
          Modify
        </Button>
      </CardActions>
    </Card>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modify your negotiation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            you can modify the price if it is still in pending mode, but you cannot cancel this negotiation unless the other party declines or counter negotiate
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="price"
            name="price"
            label="price"
            type="text"
            fullWidth
            onChange={updateNegotiationPrice}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Modify
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
