import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {initialState, USER_LIST_REQUEST} from "../sagas/UserListSaga";

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUserList();
    }

    render() {
        const {fetching, data, error} = this.props;
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">User Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {error ? (
                        <Snackbar open={true} message={error}/>
                    ) : data.map(row => {
                        return (
                            <TableRow key={row.name}
                                      hover
                                      component={Link} to={`/users/${row.name}/`}
                                      role="checkbox"
                                      tabIndex={-1}>
                                <TableCell component="th" scope="row">
                                    {row.userId}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        )
    }
}

const mapStateToProps = state => {
    return state.userListReducer || initialState;
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserList: () => dispatch({ type: USER_LIST_REQUEST })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);