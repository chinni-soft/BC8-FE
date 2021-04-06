import { Backdrop } from '@material-ui/core';
import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import animationData from '../../../images/lf20_OKDRph.json';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: '#252631',
    zIndex: 100000000
  },
}));

const Loader = (props) => {
    const {open} = props;
    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (<Backdrop open={open} className={classes.backdrop}>
        <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
        />
    </Backdrop>);
}

export default Loader;