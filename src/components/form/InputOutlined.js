import React from 'react';
import {
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLOR } from '../../constant';

const InputOutlined = (props) => {
  const { label, useMultiline, onChange, ...rest } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        fullWidth
        className={classes.root}
        id={useMultiline ? "outlined-multiline-static" : "outlined-multiline-flexible"}
        label={label}
        multiline={useMultiline ? true : false}
        rows={useMultiline ? 4 : 0}
        variant="outlined"
        onChange={(event) => onChange && onChange(event.target.value)}
        {...rest}
      />

    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    "& .MuiFormLabel-root": {
      color: COLOR.white
    },
    '& label.Mui-focused': {
      color: COLOR.primary,
      borderColor: COLOR.primary,
    },
    '& .MuiInputBase-input': {
      color: COLOR.white,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: COLOR.whiteSmoke,
      },
      '&:hover fieldset': {
        borderColor: COLOR.primary,
      },
      '&.Mui-focused fieldset': {
        borderColor: COLOR.primary,
      },
    },
  }
}));

export default InputOutlined;
