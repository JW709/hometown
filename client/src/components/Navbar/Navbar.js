import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.header} variant="h2" styles={{ alignItems: 'center ' }}>
                Sample Business
            </Typography>

        </AppBar>
    )
}

export default Navbar;