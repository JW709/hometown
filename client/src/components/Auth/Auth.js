import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import Icon from './icon';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AUTH } from '../../constants/actionTypes';
// import { createOrGetUser } from '../../api';

export const Auth = () => {
    const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const switchSignup = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const createOrGetUser = async (response) => {
        const decoded = jwt_decode(response.credential);
        // console.log(decoded);
        const { name, picture, sub } = decoded;
        const user = {
            _id: sub,
            _type: 'user',
            userName: name,
            image: picture
        }

        try {
            dispatch({ type: AUTH, data: decoded })
        } catch (error) {
            console.log(error)
        }

    }

    const googleFailure = (error) => {
        console.log('Google Sign In Unsuccessful.')
        console.log(error)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar >
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}

                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />

                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

                        {isSignup && (
                            <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />
                        )}
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>

                    <GoogleLogin
                        onSuccess={(response) => createOrGetUser(response)}
                        onError={(error) => console.log(error)}
                        cookiePolicy="single_host_origin"
                    />


                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchSignup}>
                                {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up."}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};
