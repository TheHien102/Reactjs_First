import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Phone, Info } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import flagVN from '../../assets/flag-vn.png';
import useStyle from './styles';
import styles from './navbar.module.css';

const Navbar = () => {

    const classes = useStyle();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        <a className={styles.noDecoration} href="/Welcome/Login"> <span className={styles.brand}> Universe Bank </span></a>
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton> 
                        <i class="fas fa-percent fa-sm"></i>  <a className={styles.noDecoration} href="/Welcome/InterestRate">&nbsp; <b>Interrest rate</b></a>
                        </IconButton>
                    </div>
                    <IconButton>
                        <hr className={styles.lineHr}/>
                    </IconButton>
                    <div className={classes.button}>
                        <IconButton> 
                            <hr /><i class="fas fa-book"></i>   <a className={styles.noDecoration} href="/Welcome/userManual">&nbsp; <b>User manual</b></a>
                        </IconButton>
                    </div>
                    <IconButton>
                        <hr className={styles.lineHr}/>
                    </IconButton>
                    <Typography variant="h6">
                        <IconButton>
                            <Phone />   <a className={styles.noDecoration}>&nbsp; <b>0842805550</b></a>
                        </IconButton>
                    </Typography>
                    <IconButton>
                        <hr className={styles.lineHr}/>
                    </IconButton>
                    <div className={classes.button}>
                        <IconButton> 
                            <Info />  <a className={styles.noDecoration}  href="/Welcome/About">&nbsp; <b>About</b> </a>
                        </IconButton>
                    </div>
                    <div className={classes.button}>
                        <Typography className="classes.title">
                            <IconButton aria-label="Change Language" color="inherit"> 
                                <img src={flagVN}alt="Flag Vn" height="35px" className={classes.image} />
                            </IconButton>
                        </Typography>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
