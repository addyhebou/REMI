import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles, alpha } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 0, 1),
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    '&:hover': {
      backgroundColor: alpha('#000', 0.25),
    },
  },
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function InputContainer() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Paper className={classes.addCard}>
        <Typography>+ Add a card</Typography>
      </Paper>
    </div>
  );
}
