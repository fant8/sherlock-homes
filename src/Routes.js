import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from "./History";
import Home from "./Home";
import Results from "./Results";
import { withRouter, Redirect, Route, BrowserRouter as Router, Switch, HashRouter, NavLink } from 'react-router-dom';

class Routes extends Component{
    render() {
        console.log(history);
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={withRouter(App)} />
                    <Route path="/results" component={withRouter(Results)} />
                </Switch>
            </Router>
        )
    }

}

export default Routes;