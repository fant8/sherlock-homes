import React, {Component} from 'react';
import './index.css';
import App from './App';
import history from "./History";
import Results from "./Results";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class Routes extends Component{
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/results" component={Results} />
                </Switch>
            </Router>
        )
    }

}

export default Routes;