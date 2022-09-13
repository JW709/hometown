import React from 'react';
import { Container } from '@material-ui/core';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import { Auth } from './components/Auth/Auth';

const App = () => {

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>

        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
