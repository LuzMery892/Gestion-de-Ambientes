//aqui genere unas rutas para las diferentes interfaces, coordinador, alistamiento y instructor
//suponiendo que todas las vamos a alojar en un solo hots o dominio

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoordinadorDashboard from './components/CoordinadorRuta';
import AlistamientoDashboard from './components/AlistamientoRuta';
import InstructorDashboard from './components/InstructorRuta';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/coordinador/dashboard" component={CoordinadorRuta} />
                <Route path="/alistamiento/dashboard" component={AlistamientoRuta} />
                <Route path="/instructor/dashboard" component={InstructorRuta} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
