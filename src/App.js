import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";

import UserList from './components/user-list';
import UserCard from "./components/user-card";
import rootSaga from './sagas/RootSaga';
import {reducers} from './reducers';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

function App() {
    const classes = makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
        }
    }))();

    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Paper className={classes.root}>
                        <Redirect from="/" to="/users/page/1"/>
                        <Switch>
                            <Route path="/users/page/:page" component={UserList}/>
                            <Route path="/users/:id" component={UserCard}/>
                        </Switch>
                    </Paper>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
