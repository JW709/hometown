import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import gretadaycare from './images/gretadaycare.jpeg'
import PostForm from './components/Forms/PostForm';
import Posts from './components/Post/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyles from './styles'
const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts()) 

  }, [dispatch])



  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.header} variant="h2" styles={{ alignItems: 'center '}}>
          Menues
          <img className={classes.image} src={gretadaycare} alt="memories" style={{ height: 60 }}></img>
        </Typography>

      </AppBar>
      <Grow in>
        <Container>
          <Grid container spacing={3} styles={{ justify: "space-between" }}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <PostForm />
            </Grid>
            
          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
