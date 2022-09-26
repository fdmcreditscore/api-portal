import React from 'react';
import { Box, Drawer, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Beranda from '../../pages/beranda/Beranda';
import PartnerReg from '../../pages/partner-reg/PartnerReg';
import DeveloperReg from '../../pages/dev-reg/DeveloperReg';
import Monitor from '../../pages/monitor/Monitor';
import Sandbox from '../../pages/sandbox/Sandbox';
import ServiceInfo from '../../pages/service-info/ServiceInfo';
import ApiSpecs from '../../pages/api/ApiSpecs';
import './clippeddrawer.scss'
import Sidebar from '../sidebar/Sidebar';

const drawerWidth = 240;

const ClippedDrawer = () => {

    const [active, setActive] = React.useState('Beranda');
    const theme = createTheme({
        typography: {
            body1: {
                fontSize: '1.1rem'
            }, 
            body2: {
                fontSize: '1rem'
            }
        }
    })

    const ActiveView=()=> {
        switch (active) {
            case 'Beranda':
                return <Beranda />;
            case 'Service Info':
                return <ServiceInfo />;
            case 'Partner Registration':
                return <PartnerReg />;
            case 'API Specs':
                return <ApiSpecs />;
            case 'Monitoring':
                return <Monitor />;
            case 'Developer Register':
                return <DeveloperReg />;
            case 'Sand Box':
                return <Sandbox />;
            default:
                return <Beranda />;
        }
    }

    return (
        <ThemeProvider theme={theme}>

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
                        <Sidebar setActive={setActive} />
                    </Box>
                </Drawer>

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {ActiveView()}
                </Box>
            </Box>

        </ThemeProvider>
    )
}

export default ClippedDrawer