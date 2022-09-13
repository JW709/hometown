import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const Input = ({ name, label, handleChange, autoFocus, type, handleShowPassword }) => {
    return (

        <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                name={name}
                label={label}
                onChange={handleChange}
                required
                fullWidth
                type={type}
                InputProps={name === "password" && {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />



        </Grid>
    )
}

export default Input;