import React, { useState, useEffect } from 'react';
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField, Button, Paper, Grid } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';

// Add Fab when mobile detected

const PostForm = ({ currentId, setCurrentId }) => {

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const classes = useStyles();
    const [postData, setPostData] = useState({
        title: '',
        caption: '',
        tags: '',
        selectedFile: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData));
        };
        clear()
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({
            title: '',
            caption: '',
            tags: '',
            selectedFile: ''
        });
    };

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post])

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit Post' : 'Add Post'}</Typography>
                {/* <TextField 
                    name="user" 
                    label="Business" 
                    variant="standard" 
                    value={postData.user}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, user: e.target.value })}
                    /> */}

                <TextField
                    name="title"
                    label="Title"
                    variant="standard"
                    value={postData.title}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />

                <TextField
                    name="caption"
                    label="Caption"
                    variant="standard"
                    value={postData.caption}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, caption: e.target.value })}
                />

                <TextField
                    name="tage"
                    label="Tags"
                    variant="standard"
                    value={postData.tags}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />

                {/* TODO: Add Dropzone with img preview */}
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => {
                    setPostData({ ...postData, selectedFile: base64 })
                }} /></div>

                <Button className={classes.submit} color="primary" type="submit" fullWidth>Post</Button>
                <Button color="secondary" onClick={clear} fullWidth>Cancel</Button>

            </form>

        </Paper>
    )

}

export default PostForm;