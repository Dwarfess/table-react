import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import TaskList from '../containers/task-list';
import TaskInfo from '../containers/task-info';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="ui container">
                    <h1 className="App-title">Welcome to React</h1>

                    <Route path='/' exact component={TaskList} />
                    <Route path='/:task' exact component={TaskInfo} />
                </div>
            </Router>
        );
    }
}

export default App;
