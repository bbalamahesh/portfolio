import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, ListItemIcon, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../assets/avatar-01.png';


// Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan'
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Profile',
        listPath: '/profile'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact',
        listPath: '/contact'
    }
]

export const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open })
    }
    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component='div' onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt='Bala Mahesh' />
            <Divider />
            <List>
                {menuItems.map((listItem, key) => (
                    <ListItem button key={key} component={Link} to={listItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {listItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={listItem.listText} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>

    )
    return (
        <>
            <Box component='nav'>
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <MenuIcon style={{ color: "tomato" }}/>
                        </IconButton>
                        <Typography variant='h5' style={{ color: "tan" }}>Bala Mahesh B | Portfolio</Typography>
                        <MobileRightMenuSlider 
                            anchor='right'
                            open={state.right}
                            onClose={toggleSlider('right', false)}
                        >
                            {sideList("right")}
                            <Footer />
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;