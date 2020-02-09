import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import MainRoute from './routes/MainRoute';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import MyAccount from './routes/MyAccount';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
        <MainRoute path='/' />
        <SignIn path='/signin' />
        <SignUp path='/signup' />
        <MyAccount path='/myaccount' />
    </Router>
    </Provider>
    </>
  );
}

export default App;
