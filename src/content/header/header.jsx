import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { withThemeCreator } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import { AutoAwesome } from '@mui/icons-material';
import styles from './header.module.css'

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
  navButton: {
    margin: theme.spacing(0.5),
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <IconButton 
            edge="start" 
            className={classes.menuButton} color="inherit" 
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            className={classes.title}
          >
            Рынок наличной валюты
          </Typography>
          <Button 
            className={classes.navButton} 
            color="inherit"
          >
            <Link 
              to='/' 
              style={{textDecoration: 'none', color:'white'}}
            >
              Конвертер
            </Link>
            
          </Button>
          <Button 
            className={classes.navButton} 
            color="inherit"
          >
            <Link 
              to='/portfolio'
              style={{textDecoration: 'none', color:'white'}}
            >
              Личный кабинет
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
