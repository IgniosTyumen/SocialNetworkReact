import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux"
import {freeComponentProfile, getProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {checkAuthorisation} from "../HOCs/AuthHOC/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let profileId = this.props.match.params.userId;
        this.props.getProfile(profileId);

    }

    componentWillUnmount(){
        this.props.freeComponentProfile();
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
};

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        isAuth : state.auth.isAuth
    }
);

let mapDispatchToProps = {
    getProfile,
    freeComponentProfile,
};

let ProfileContainerWithRouterDate = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithRouterDate);