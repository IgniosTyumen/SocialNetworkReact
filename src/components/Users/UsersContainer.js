import React from "react"
import {connect} from "react-redux"
import {follow, getUsers, setCurrentPage, unfollow} from "../../redux/usersReducer";
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"


class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged(pageNumber) {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                {this.props.isFetching ? null :
                    <Users totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged.bind(this)}
                           users={this.props.users}
                           isFollowingInProgress={this.props.isFollowingInProgress}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}

                    />};

            </>
        )
    }
}

let mapStateToProps = (state) => {
        return (
            {
                users: state.usersPage.users,
                pageSize: state.usersPage.pageSize,
                totalUsersCount: state.usersPage.totalUsersCount,
                currentPage: state.usersPage.currentPage,
                isFetching: state.usersPage.isFetching,
                isFollowingInProgress: state.usersPage.isFollowingInProgress
            }
        )
    }
;

let mapDispatchToProps = {

    follow,
    unfollow,
    setCurrentPage,
    getUsers
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)