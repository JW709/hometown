import React, { useState, useEffect } from 'react';
import { Grow, Grid, Container } from '@material-ui/core';
import Posts from '../Posts/Posts';
import PostForm from '../Forms/PostForm';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    // const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())

    }, [currentId, dispatch])

    return (

        <Grow in>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>

                <Grid item xs={12} sm={4} >
                    <div style={{ position: 'sticky', top: 12 }}>
                        <PostForm currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </Grid>

            </Grid>
        </Grow >
    )


}

export default Home;