import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MoreHoriz } from '@material-ui/icons';
import React, { useState } from 'react';

const useStyle = makeStyles((theme) => ({
  editableTitle: {
    flexGrow: 1,
  },
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: 'flex',
  },
  input: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: theme.spacing(1),
    '&:focus': {
      backgroundColor: '#ddd',
    },
  },
}));
export default function Title() {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value="Todo"
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            Todo
          </Typography>
          <MoreHoriz />
        </div>
      )}
    </div>
  );
}
