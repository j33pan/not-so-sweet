import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ReceipeDialog = (props) => {
  const { onClose, open, receipe } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle
        id='simple-dialog-title'
        style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
      >
        Ingredients
      </DialogTitle>
      <DialogContent style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
        {receipe?.map((line) => (
          <Typography key={uuidv4}>{line}</Typography>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default ReceipeDialog;
