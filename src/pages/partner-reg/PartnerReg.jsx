import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import {Container, Box, Stack, Button, TextField} from '@mui/material';

const PartnerReg = () => {
  return (
    <div>
      <CssBaseline />
      <Container fixed>

        <Toolbar />
        <Typography paragraph>Ya ini halaman Registrasi Partner </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
        </Typography>

        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack>
            <TextField fullWidth  id="partner-name" label="Organization Name"  margin="normal" />
            <TextField fullWidth id="email" label="Email Address" variant="outlined" margin="normal"/>

            <TextField fullWidth id="pic-name" label="PIC Name" variant="outlined"  margin="normal"/>
          </Stack >

            <br />
            <Button width="50px" variant="contained" color="primary">Submit</Button>

        </Box>

        <br />
        <Typography paragraph>Informasi registrasi akan dikirim ke email terdaftar maksimal 24 jam.</Typography>

      </Container>
    </div>
  )
}

export default PartnerReg