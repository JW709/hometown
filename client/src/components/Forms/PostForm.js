import React, { useState } from 'react';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { Typography, TextField, Button, Paper, Grid } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/posts';


const PostForm = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        user: '',
        caption: '',
        tags: '',
        selectedFile: ''
    });
    console.log(postData)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    };

    const clear = () => {

    };

    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add Menu</Typography>
                <TextField 
                    name="user" 
                    label="Business" 
                    variant="standard" 
                    value={postData.user}
                    fullWidth
                    onChange={(e) => setPostData({ ...postData, user: e.target.value })}
                    />

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
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                    />

                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple="true"
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>

                <Button className={classes.submit} color="primary" type="submit" fullWidth>Add Menu</Button>                
                <Button color="secondary" onClick={clear} fullWidth>Cancel</Button>                

            </form>

        </Paper>
    )

}

export default PostForm;