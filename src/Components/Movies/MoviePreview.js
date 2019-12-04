import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Fade} from 'react-reveal'
const useStyles = makeStyles(theme => ({
  root:{
      flexGrow:3
  },
  card: {
    maxWidth: 345,
  },
}));


export default function MoviePreview(props) {
  const classes = useStyles();

  return (
      <div className="moviesGrid">
                
                <Grid container className={classes.root} spacing={5}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={5}>
                            {props.movies.map(movie => (
                                <Fade right>
                                <Grid key={movie.imdbID} item>
                                <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            alt={movie.Title}
                                            height="350"
                                            src={movie.Poster}
                                            title={movie.Title}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {movie.Title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Year:{movie.Year}<br/>
                                                Type:{movie.Type}
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                            View Movie
                                            </Button>
                                            
                                        </CardActions>
                                        </Card>
                                </Grid>
                                </Fade>
                            ))}
                            </Grid>
                        </Grid>
                </Grid>
        </div>
            
  );
}