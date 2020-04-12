import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    button: {
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    }
}))

const InputFiled = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato'
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'tan'
            }
        }
    },
})(TextField)

export const Contact = () => {

    const classes = useStyles();
    return (

        <Box component='div'>
            <Navbar />
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{color: 'tomato', textAlign: 'center', textTransform: 'uppercase'}}>
                        Contact me...
                    </Typography>
                    <InputFiled
                        fullWidth={true}
                        label='Name'
                        inputProps={{style:{color: 'white'}}}
                        variant='outlined'
                        margin='dense'
                        size='medium'
                    />
                    <InputFiled
                        fullWidth={true}
                        label='Email'
                        inputProps={{style:{color: 'white'}}}
                        variant='outlined'
                        margin='dense'
                        size='medium'
                    />
                    <InputFiled
                        fullWidth={true}
                        label='Phone'
                        inputProps={{style:{color: 'white'}}}
                        variant='outlined'
                        margin='dense'
                        size='medium'
                    />
                    <Button variant='outlined' className={classes.button} fullWidth={true} endIcon={<SendIcon/>}>
                        Contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}
export default Contact;