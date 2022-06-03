import * as React from 'react';
import { styled } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box"
import UserList from './components/UserList'
import StickyFooter from "./components/footer/StickyFooter"
import FetchData from "./components/ReduxFetchData/FetchData"
import Header from './components/header/Header'
import MediaControlCard from "./components/Counter"
import './App.css'

const PaperCom = styled(Paper)({
  padding: '16px',
  variant: 'outlined',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

function App() {
  return (
    <div>
      <Header />
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid justifyContent="center"
            alignItems="flex-start" container spacing={2}>
            <Grid item md={12}>
              <PaperCom>
                <MediaControlCard />
              </PaperCom>
            </Grid>
            <Grid item xs={12} md={6}>
              <PaperCom>
                <UserList />
              </PaperCom>
            </Grid>
            <Grid item xs={12} md={6}>
              <PaperCom>
                <FetchData />
              </PaperCom>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <StickyFooter />
    </div>
  )
}
export default App
