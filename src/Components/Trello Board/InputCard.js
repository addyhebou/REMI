import { IconButton, InputBase, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/clear';
import React from 'react';

export default function InputCard() {
  return (
    <div>
      <div>
        <Paper>
          <InputBase multiline fullWidth />
        </Paper>
      </div>
      <div>
        <Button>Add Card</Button>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
