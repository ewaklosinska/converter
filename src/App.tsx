import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { Container, Typography } from '@mui/material';

import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container maxWidth="sm" style={{marginTop: "100px"}}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Przelicznik walut</Typography>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                      <Form />
                    } />
                    <Route path='/about' element={
                      <About />
                    } />
                </Routes>
              <NavBar />
            </BrowserRouter>
        </Container>
    </div>
  );
}

export default App;
