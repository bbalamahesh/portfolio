import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        opacity: '0.6'
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Particles
            canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            stype: 'cicrle',
                            strole: {
                                width: 1,
                                color: 'tomato'
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
            <Navbar/>
            <Header/>
        </div>
    )
}

export default Home;