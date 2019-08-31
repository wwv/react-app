import React from 'react';
import UserList from './components/user-list';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

function App() {
  const classes = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    }
  }))();

  return (
    <div className="App">
      <Router>
      <Paper className={classes.root}>
        <Redirect from="/" to="/users/page/1"/>
        <Route path="/users/page/:page" component={UserList}/>
      </Paper>
      </Router>
    </div>
  );
}

export default App;
