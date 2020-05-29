import React from 'react';
import{BrowserRouter as Route, Link, Switch} from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Contacts from './components/contacts/Contacts';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    < Route>
        <Navbar />
        <Contacts />
    </Route>
    </Provider>
  );
}

export default App;
