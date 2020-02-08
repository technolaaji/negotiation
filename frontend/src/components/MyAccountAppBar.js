import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { deleteToken } from '../utils/token';
import { navigate } from '@reach/router';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    formControl: {
        minWidth: 170,
      },
  }));

export default function MyAccountAppBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const logOut = () => {
        deleteToken();
        navigate('/');
    }
    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
      };

      const [selectOpen, updateSelectOpen] = React.useState(false);

      const handleSelectClose = () => {
        updateSelectOpen(false);
      };
    
      const handleSelectOpen = () => {
        updateSelectOpen(true);
      };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h4" className={classes.title}>
            Negotiation app
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>Create a negotiation</Button>
          <Button color="inherit" onClick={logOut}>Log out</Button>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a negotiation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            if you wish to initiate a negotiation with someone, kindly choose a user and a price to negotiate with
          </DialogContentText>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">User</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={selectOpen}
          value={age}
          onChange={handleChange}
          onClose={handleSelectClose}
          onOpen={handleSelectOpen}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
          <TextField
            autoFocus
            name="price"
            margin="dense"
            id="price"
            label="price"
            type="price"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Negotiate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
