import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Satu from '../../pages/satu/Satu';
import Dua from '../../pages/dua/Dua';
import Tiga from '../../pages/tiga/Tiga';

const drawerWidth = 240;

const ClippedDrawer = () => {

    const [active, setActive] = React.useState('ViewSatu');

    const ActiveView=()=> {
        switch (active) {
            case 'ViewSatu':
                return <Satu />;
            case 'ViewDua':
                return <Dua />;
            default:
                return <Tiga />;
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                Customer Due Diligent
                </Typography>
            </Toolbar>
            </AppBar>
            <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
            >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <Divider />
                <List>
                    <ListItem key='Satu' disablePadding> 
                        <ListItemButton onClick={() => setActive('ViewSatu')}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Introduction' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Dua' disablePadding> 
                        <ListItemButton onClick={() => setActive('ViewDua')}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Service Tersedia' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Price' disablePadding> 
                        <ListItemButton onClick={() => setActive('ViewDua')}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Paket dan Harga' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Registrasi' disablePadding> 
                        <ListItemButton onClick={() => setActive('ViewTiga')}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Registrasi' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />

                <List>
                    <ListItem key='Satu' disablePadding> 
                        <ListItemButton onClick={() => setActive('ViewSatu')}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary='Satu' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Dua' disablePadding> 
                        <ListItemButton onClick={() => setActive('ViewDua')}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Dua' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Tiga' disablePadding> 
                        <ListItemButton onClick={() => setActive('ViewTiga')}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary='Tiga' />
                        </ListItemButton>
                    </ListItem>
                </List>


            </Box>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {ActiveView()}
            </Box>
        </Box>
    )
}

export default ClippedDrawer