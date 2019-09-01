import React from "react";
import {initialState, USER_REQUEST} from "../sagas/UserSaga";
import {ACL_LIST_REQUEST} from "../sagas/ACLSaga";
import {connect} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Loading from "./loading";

class UserCard extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
        !this.aclListLoaded() && this.props.fetchAclList()
    }

    /**
     * Подставляет имя полномочия по его ИД
     * @param id
     * @returns {*}
     */
    resolveAccessName(id) {
        if (!Object.keys(this.props.aclList).length) return 'loading...';
        return this.props.aclList[id];
    }

    /**
     * Возвращает статус готовности списка полномочий
     * @returns {boolean}
     */
    aclListLoaded() {
        return !!Object.keys(this.props.aclList).length;
    }

    render() {
        const {fetching, error, data} = this.props
        return (
            <div>
                <p><label>User Name: </label>{data.name}</p>
                <p><label>Email: </label>{data.email}</p>
                {fetching
                    ? <Loading/>
                    : error ? (
                        <Snackbar open={true} message={error}/>
                    ) : (
                        <div>
                        <p><label>Phone: </label>{data.phone}</p>
                        {data.acls.map(aclId => (
                            <p><label>Access: </label>{this.resolveAccessName(aclId)}</p>
                        ))}
                        </div>
                    )
                }
            </div>
        )
    }
}

/**
 * Собираем в кучу данные по пользователю из списка и из карточки
 * @param state
 * @returns {({} & reducer & {data: *}) | ({} & {data} & {data: *})}
 */
const mapStateToProps = state => {
    const userReducer = {...(state.userReducer || initialState), aclList: state.aclReducer.data};
    if (userReducer.error) return userReducer;

    const selectedUser = state.userListReducer.data.find(el => el.userId === userReducer.data.userId)
    if (!selectedUser) return userReducer;

    Object.assign(userReducer.data, selectedUser);
    return userReducer;
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch({type: USER_REQUEST, payload: {userId}}),
        fetchAclList: () => dispatch({type: ACL_LIST_REQUEST}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);