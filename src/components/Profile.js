import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navabr from './Navbar';

const useStyle = makeStyles(theme =>({
    mainContiner:{
        background:'rgba(34, 51, 51, 0.7)',
        height: 'calc(100vh - 64px)'
    },
    timeLine:{
        position:'relative',
        padding: '1rem',
        margin:'0 auto',
        '&:before':{
            content: "''",
            position:'absolute',
            height:'100%',
            border:'1px solid tan',
            right:'40px',
            top:0
        },
        '&:after':{
            content:"''",
            display:'table',
            clear:'both'
        },
        [theme.breakpoints.up('md')]: {
            padding:'2rem',
            '&:before':{
                left: 'calc(50% - 1px)',
                right:'auto'
          }
        }
    },
    timeLineItem: {
        padding: '1rem',
        bprderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:afrter': {
            content: '""',
            position: 'absolute'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: 'tan',
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent tomato tomato'
            }
        }
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before':{
                display: 'none'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: 0,
        textTransform: 'uppercase'
    }
}))

const Profile = () => {
    const classes = useStyle();

    return (
        <>
            <Navabr />
            <Box component='header' className={classes.mainContiner}>
                <Typography variant='h4' align='center' className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component='div' className={classes.timeLine}>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2014
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='left' className={classes.subHeading}>
                            Technical Lead
                        </Typography>
                        <Typography variant='body1' align='left' style={{color: 'tomato'}}>
                            Photon Interactive
                        </Typography>
                        <Typography variant='subtitle1' align='left' style={{color: 'tan'}}>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </Typography>
                    </Box>

                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2011
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='left' className={classes.subHeading}>
                            Associate - Projects
                        </Typography>
                        <Typography variant='body1' align='left' style={{color: 'tomato'}}>
                            Cognizant Technology Solution
                        </Typography>
                        <Typography variant='subtitle1' align='left' style={{color: 'tan'}}>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </Typography>
                    </Box>

                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2009
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='left' className={classes.subHeading}>
                            Sr. Software Engineer
                        </Typography>
                        <Typography variant='body1' align='left' style={{color: 'tomato'}}>
                            Photon Infotech
                        </Typography>
                        <Typography variant='subtitle1' align='left' style={{color: 'tan'}}>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </Typography>
                    </Box>

                    {/* <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2007
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='left' className={classes.subHeading}>
                            Web Designer
                        </Typography>
                        <Typography variant='body1' align='left' style={{color: 'tan'}}>
                            Gants Software Solutions
                        </Typography>
                        <Typography variant='subtitle1' align='left'>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </Typography>
                    </Box> */}
                </Box>
            </Box>
        </>
    )

}
export default Profile;