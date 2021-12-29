import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import {VpnKey} from '@material-ui/icons';

export default function CustomizedInputBase(props) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 220, borderRadius: '25px', boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)', margin: 'auto' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <VpnKey sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      </IconButton>
      <InputBase
        sx={{ ml: 0.5, flex: 0.5 }}
        placeholder={props.name}
        inputProps={{ 'aria-label': 'Password' }}
      />
    </Paper>
  );
}