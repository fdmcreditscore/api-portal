import './sidebar.scss'
import {  List, 
          ListItem, Typography, Divider,
          ListItemButton, 
          ListItemIcon, 
          ListItemText } from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import { Bungalow } from '@mui/icons-material';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const Sidebar = ({setActive}) => {
  return (
    <>
      <Typography align='center' variant="h6" component="div">Introduction</Typography>

      <List>
        <ListItem alignItems="flex-start" key='Beranda' disablePadding> 
                  <ListItemButton onClick={() => setActive('Beranda')}>
                      <ListItemIcon><Bungalow color='primary' size='sm'/> </ListItemIcon>
                      <Typography  sx={{marginLeft: 1}} variant='h6' color='primary'>Beranda</Typography>
                     
                  </ListItemButton>
        </ListItem>
        <ListItem key='Service Info' disablePadding> 
                  <ListItemButton onClick={() => setActive('Service Info')}>
                      <ListItemIcon><LightbulbSharpIcon /></ListItemIcon>
                      <Typography variant='h6'>Service Info</Typography>
                  </ListItemButton>
        </ListItem>

        <ListItem key='Partner Registration' alignItems="center" disablePadding> 
                  <ListItemButton 
                      onClick={() => setActive('Partner Registration')}>
                      <ListItemIcon><AppRegistrationIcon /></ListItemIcon>
                      <ListItemText disableGutters primary='Partner Registration'></ListItemText>
                  </ListItemButton>
        </ListItem>

        <ListItem key='Monitoring' disablePadding> 
                  <ListItemButton onClick={() => setActive('Monitoring')}>
                      <ListItemIcon><MonitorHeartIcon /></ListItemIcon>
                      <Typography variant='h6'> Monitor</Typography>
                  </ListItemButton>
        </ListItem>

      </List>
      <Divider />

      <Typography align='center' variant="h6" component="div">Developer Area</Typography>
      <List className='list'>
          {['API Specs', 'Sand Box'].map((text,index) => (
              <ListItem key={index} disablePadding> 
                  <ListItemButton onClick={() => setActive(text)}>
                      <ListItemIcon><MailIcon /></ListItemIcon>
                      <span className='spantext'>{text}</span>
                  </ListItemButton>
              </ListItem>
          ))}
      </List>
    </>
  )
}

export default Sidebar