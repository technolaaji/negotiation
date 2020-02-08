import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import MainRoute from './routes/MainRoute';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import MyAccount from './routes/MyAccount';

function App() {
  return (
    <>
    <Router>
        <MainRoute path='/' />
        <SignIn path='/signin' />
        <SignUp path='/signup' />
        <MyAccount path='/myaccount' />
    </Router>
    </>
  );
}

export default App;
