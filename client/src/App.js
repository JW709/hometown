import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import PostForm from './components/Forms/PostForm';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyles from './styles'

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts()) 

  }, [currentId, dispatch])



  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.header} variant="h2" styles={{ alignItems: 'center '}}>
          Sample Business
        </Typography>

      </AppBar>
      <Grow in>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>

            <Grid item xs={12} sm={4} >
              <div style={{ position: 'sticky', top: 12 }}>
                <PostForm currentId={currentId} setCurrentId={setCurrentId} />
              </div>
            </Grid>
            
          </Grid>
      </Grow>

    </Container>
  );
}

export default App;
