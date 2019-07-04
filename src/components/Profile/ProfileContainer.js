import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux"
import {freeComponentProfile, getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {checkAuthorisation} from "../HOCs/AuthHOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let profileId = this.props.match.params.userId;
        if (!profileId){
            profileId=1076
        }
        this.props.getProfile(profileId);
        this.props.getStatus(profileId);

    }

    componentWillUnmount(){
        this.props.freeComponentProfile();
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </>
        )
    }
};

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        isAuth : state.auth.isAuth,
        status: state.profilePage.status
    }
);

let mapDispatchToProps = {
    getProfile,
    freeComponentProfile,
    getStatus,
    updateStatus
};



export default compose(
    connect (mapStateToProps,mapDispatchToProps),
    withRouter
)(ProfileContainer);
