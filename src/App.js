import React from 'react';
import{BrowserRouter as Route, Link, Switch} from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    < Route>
        <Navbar />
        <Contacts />
    </Route>
  );
}

export default App;
