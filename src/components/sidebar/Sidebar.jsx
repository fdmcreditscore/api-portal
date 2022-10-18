import React from 'react';
import './sidebar.scss'
import {  List, 
          Typography, Divider,
          ListItemButton, 
          ListItemIcon } from '@mui/material';

import { Bungalow, LightbulbSharp } from '@mui/icons-material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SmartScreenIcon from '@mui/icons-material/SmartScreen';

const Sidebar = ({setActive}) => {

  const [selectedIndex, setSelectedIndex] = React.useState('Beranda');
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setActive(index);
  };

  return (
    <>
      <Typography align='center' variant="h6" component="div">Introduction</Typography>

      <List>
        <ListItemButton selected={selectedIndex==='Beranda'} 
                        onClick={(event) => handleListItemClick(event, 'Beranda')}>
            <ListItemIcon> <Bungalow/> </ListItemIcon>
            <Typography variant='h6'>Beranda</Typography>
        </ListItemButton>

        <ListItemButton selected={selectedIndex==='Service Info'} 
                        onClick={(event) => handleListItemClick(event, 'Service Info')}>
            <ListItemIcon><LightbulbSharp /></ListItemIcon>
            <Typography variant='h6'>Service Info</Typography>
        </ListItemButton>

        <ListItemButton selected={selectedIndex==='Skema Harga'} 
                        onClick={(event) => handleListItemClick(event, 'Skema Harga')}>
            <ListItemIcon><LightbulbSharp /></ListItemIcon>
            <Typography variant='h6'>Skema Harga</Typography>
        </ListItemButton>

        <ListItemButton selected={selectedIndex==='Customer Registration'} 
                        onClick={(event) => handleListItemClick(event, 'Customer Registration')}>
            <ListItemIcon><AppRegistrationIcon  /></ListItemIcon>
            <Typography variant='h6'>Customer Registration</Typography>
        </ListItemButton>

        <Divider />

        <ListItemButton selected={selectedIndex==='Monitoring'} 
                        onClick={(event) => handleListItemClick(event, 'Monitoring')}>
          <ListItemIcon><MonitorHeartIcon /></ListItemIcon>
          <Typography variant='h6'> Monitor</Typography>
        </ListItemButton>

        <ListItemButton selected={selectedIndex==='Report'} 
                        onClick={(event) => handleListItemClick(event, 'Report')}>
          <ListItemIcon><MonitorHeartIcon /></ListItemIcon>
          <Typography variant='h6'>Report</Typography>
        </ListItemButton>

        <ListItemButton selected={selectedIndex==='Sandbox'} 
                        onClick={(event) => handleListItemClick(event, 'Sandbox')}>
          <ListItemIcon><SmartScreenIcon /></ListItemIcon>
          <Typography variant='h6' >Sandbox</Typography>
        </ListItemButton>

        <Divider />

        <ListItemButton selected={selectedIndex==='NewCustomer'} 
                        onClick={(event) => handleListItemClick(event, 'NewCustomer')}>
          <ListItemIcon><MonitorHeartIcon /></ListItemIcon>
          <Typography variant='h6'>Registration Process</Typography>
        </ListItemButton>

      </List>
    </>
  )
}

export default Sidebar