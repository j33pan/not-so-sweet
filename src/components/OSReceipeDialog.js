import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
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
            <Typography variant='substitle2'>
              yields {data.recipe?.yield}
            </Typography>
          </DialogContentText>
          {/* <Divider style={{ marginBottom: 5 }} /> */}
          {ingredientLines?.map((x) => (
            <DialogContentText style={{ margin: 0 }} key={uuid()}>
              <Typography variant='body2'>{x}</Typography>
            </DialogContentText>
          ))}
          <Link href={url}>Full details at {source}</Link>
          {/* <Divider style={{ marginTop: 5, marginBottom: 5 }} /> */}
          {/* <DialogContentText>
            <Link href='#'>Full details</Link>
          </DialogContentText> */}
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
