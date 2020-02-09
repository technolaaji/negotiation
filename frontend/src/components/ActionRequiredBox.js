import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AcceptOrDeclineDialog from './AcceptOrDeclineDialog';
import CounterDialog from './CounterDialog';
import * as moment from 'moment'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export default function ActionRequiredBox(props) {
    const classes = useStyles();

    const [acceptOpen, updateAcceptOpen] = React.useState(false);

    const [declineOpen, updateDeclineOpen] = React.useState(false);

    const [type, updateType] = React.useState("");

    const [counter, updateCounter] = React.useState(false);

    const acceptToggle = () => {
        updateAcceptOpen(!acceptOpen);
        updateType("accept");
    }

    const declineToggle = () => {
        updateDeclineOpen(!declineOpen);
        updateType("decline");
    }

    const counterToggle = () => {
        updateCounter(!counter);
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
          {moment(props.time).format('DD-MM-YYYY')}
          </Typography>
        </CardContent>
     
      <CardActions>
        <Button size="small" color="primary" onClick={acceptToggle}>
          Accept
        </Button>
        <Button size="small" color="primary" onClick={declineToggle}>
          Decline
        </Button>
        <Button size="small" color="primary" onClick={counterToggle}>
          Counter
        </Button>
      </CardActions>
    </Card>
    <AcceptOrDeclineDialog type={type} open={acceptOpen} handleClose={acceptToggle} />
    <AcceptOrDeclineDialog type={type} open={declineOpen} handleClose={declineToggle} />
    <CounterDialog open={counter} handleClose={counterToggle}  />
    </>
  );
}
