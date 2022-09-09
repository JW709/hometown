import React from 'react';
import Post from './Post/Post';
import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './styles'

import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(posts)


    return(
         
            <Grid className={classes.container} container spacing={3}>

                {posts.map((post) => (
                    <Grid item key={post._id}>
                        <Post setCurrentId={setCurrentId} post={post} />
                    </Grid>
                ))}


            </Grid>
        

    )

}

export default Posts;