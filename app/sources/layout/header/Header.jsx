import { makeStyles } from '@material-ui/core';
import React from 'react';
import ButtonConnexion from './components/ButtonConnexion';

const useStyles = makeStyles ((theme) => ({

}))


function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>FRIENDS MAP</h1>
            <ButtonConnexion className={classes.buttonCo} />
        </div>
    );
}

export default Header;