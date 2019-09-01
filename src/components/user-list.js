import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {initialState, USER_LIST_REQUEST} from "../sagas/UserListSaga";
import Loading from "./loading";

class UserList extends React.Component {
    componentDidMount() {
        !this.userListReady() && this.props.fetchUserList();
    }

    userListReady() {
        return !!this.props.data.length;
    }

    /**
     * Переход по страницам при нажатию на кнопки пагинации
     * @param event
     * @param page
     */
    handleChangePage(event, page) {
        this.props.history.push('/users/page/' + (page + 1));
    }

    render() {
        const {fetching, data, error} = this.props;
        const page = this.props.match.params.page - 1;
        const rowsPerPage = 10;

        return fetching ? (
            <Loading />
        ) : (
            <div>
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
                    ) : data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                        return (
                            <TableRow key={row.name}
                                      hover
                                      role="checkbox"
                                      tabIndex={-1}>
                                <TableCell component="th" scope="row">
                                    <Link to={`/users/${row.userId}/`} >
                                        {row.userId}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link to={`/users/${row.userId}/`} >
                                        {row.name}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link to={`/users/${row.userId}/`} >
                                        {row.email}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            colSpan={3}
                            count={data.length}
                            rowsPerPage={10}
                            rowsPerPageOptions={[10]}
                            page={page}
                            onChangePage={this.handleChangePage.bind(this)}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
            </div>


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