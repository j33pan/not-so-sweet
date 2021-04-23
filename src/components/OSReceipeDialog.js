import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import uuid from 'react-uuid';

const OSReceipeDialog = (props) => {
  const { open, onClose, data } = props;
  const { ingredientLines, url, source } = data.recipe || {};

  const handleClose = () => {
    onClose();
  };

  const theme = useTheme();
  return (
    <div>
      <Dialog
        open={open}
        PaperProps={{
          style: {
            maxWidth: '65vh',
            backgroundColor: theme.palette.common.white,
          },
        }}
      >
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent dividers>
          <DialogContentText style={{ margin: 0 }}>
              yields {data.recipe?.yield}
          </DialogContentText>
          {ingredientLines?.map((x) => (
            <DialogContentText style={{ margin: 0 }} key={uuid()}>
              {x}
            </DialogContentText>
          ))}
          <br />
          <a target="_blank" href={url} rel="noopener noreferrer" style={{color: theme.palette.text.primary}}>Full details at {source}</a>
        </DialogContent>
        <DialogActions>
          <Button size='small' onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OSReceipeDialog;
