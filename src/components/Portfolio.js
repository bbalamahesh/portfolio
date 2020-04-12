import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Card, Grid, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Navbar from './Navbar';
import proj1 from '../assets/proj01.jpg';
import proj2 from '../assets/proj02.jpg';
import proj3 from '../assets/proj03.jpg';
import proj4 from '../assets/proj04.png';

const useStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto',
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <>
            <Box component='div' className={classes.mainContainer}>
                <Navbar />
                <Grid container justify='center'>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component='img' height='140' image={proj1}></CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 1
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                     </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component='img' height='140' image={proj2}></CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 2
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component='img' height='140' image={proj3}></CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 3
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                     </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component='img' height='140' image={proj4}></CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 4
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio;