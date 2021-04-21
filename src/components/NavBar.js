import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {withRouter} from 'react-router-dom';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    color: theme.palette.common.white
  }
}));

const NavBar = (props) => {
  const {history} = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pageUrl) => {
    history.push(pageUrl)
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' elevation={0}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            NOT SO SWEET
          </Typography>
          <div className='mobile'>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem className={classes.menuItem} dense onClick={() => handleClose('/')}>
                HOME
              </MenuItem>
              <MenuItem className={classes.menuItem} dense onClick={() => handleClose('/nssreceipe')}>
                NSS RECEIPE
              </MenuItem>
              <MenuItem className={classes.menuItem} dense onClick={() => handleClose('/receipe')}>
                RECEIPE
              </MenuItem>
              <MenuItem className={classes.menuItem} dense onClick={() => handleClose('/lesson')}>
                LESSON
              </MenuItem>
              <Divider />
              <MenuItem className={classes.menuItem} dense>ORDER</MenuItem>
              <Divider />
              <MenuItem className={classes.menuItem} dense>LOG IN</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar style={{ marginBottom: '20px' }} />
    </div>
  );
}

export default withRouter(NavBar)
