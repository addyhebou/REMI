import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 1, 1, 2),
  },
}));
export default function Card() {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.card}>Making Youtube Video</Paper>
    </div>
  );
}
