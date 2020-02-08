import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export default function AcceptOrDeclineBox(props) {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
     
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name} - {props.price}$
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            status: {props.status}
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          time: {props.time}
          </Typography>
        </CardContent>
    </Card>
  );
}
