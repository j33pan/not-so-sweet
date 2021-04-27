import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {withRouter} from 'react-router-dom';
import {
  Box,
  Button,
  ButtonBase,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountContext } from '../Account';
import { NotificationContext } from '../NotificationProvider';

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
    color: theme.palette.common.white,
  },
  button: {
    color: theme.palette.common.white,
  },
  paper: {
    background: theme.palette.common.white
  }
}));

const NavBar = (props) => {
  // console.log(props);
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { authenticated, logout } = React.useContext(AccountContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
    handledrawertoggle()
  };

  const theme = useTheme();
  const ismobile = useMediaQuery(theme.breakpoints.down('sm'));
  // console.log(ismobile)

  const [opendrawer, setopendrawer] = React.useState(false);
  const handledrawertoggle = () => {
    setopendrawer(!opendrawer);
  };

  const { add } = React.useContext(NotificationContext);
  const handleAccount = (pageUrl) => {
    if (!authenticated) {
      history.push(pageUrl);
    } else {
      logout();
      add('signed out.');
    }
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed' elevation={0}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            {ismobile &&
              (<div>
                <IconButton color='inherit' onClick={handledrawertoggle}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  open={opendrawer}
                  onClose={handledrawertoggle}
                  classes={{ paper: classes.paper }}
                >
                  <div>
                    <List>
                      <ListItem onClick={() => handleClose('/nssreceipe')}>
                        <ListItemText primary='PREMIUM RECEIPE' />
                      </ListItem>
                      <ListItem
                        onClick={() => handleClose('/outsourcereceipe')}
                      >
                        <ListItemText primary='EXPORE RECEIPE' />
                      </ListItem>
                      <Divider />
                      <ListItem onClick={() => handleClose('/lesson')}>
                        <ListItemText primary='LESSON' />
                      </ListItem>
                      <Divider />
                      <ListItem onClick={() => handleClose('/order')}>
                        <ListItemText primary='ORDER' />
                      </ListItem>
                    </List>
                  </div>
                </Drawer>
              </div>
            )}
            <ButtonBase>
              <Typography variant='h5' onClick={() => history.push('/')}>
                NOT SO SWEET
              </Typography>
            </ButtonBase>
          </Box>
          {!ismobile && (
            <div>
              <Button
                className={classes.button}
                onClick={() => handleClose('/nssreceipe')}
              >
                premium receipe
              </Button>
              <Button
                className={classes.button}
                onClick={() => handleClose('/outsourcereceipe')}
              >
                expore receipe
              </Button>
              <Button
                className={classes.button}
                onClick={() => handleClose('/lesson')}
              >
                lesson
              </Button>
              <Button
                className={classes.button}
                onClick={() => handleClose('/order')}
              >
                order
              </Button>
            </div>
          )}
          <div className='mobile'>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircleRoundedIcon />
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
              <MenuItem
                className={classes.menuItem}
                dense
                onClick={() => handleAccount('/login')}
              >
                {authenticated ? 'SIGN OUT' : 'LOG IN'}
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar style={{ marginBottom: '20px' }} />
    </div>
  );
}

export default withRouter(NavBar)
