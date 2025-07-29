import React from 'react';
import classes from './Backdrop.module.css'
import ReactDOM from 'react-dom';

const backdropRoot = document.querySelector('#modal-root');

const Backdrop = ({onClick}) => {
    return (
      <div className={classes.Backdrop} onClick = {onClick}>
    </div>)
};

export default Backdrop;