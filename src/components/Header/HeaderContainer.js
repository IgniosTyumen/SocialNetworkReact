import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authorise} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authorise();
    }


    render() {

        return (

            <Header userData={this.props.data} isAuth={this.props.isAuth}/>
        )
    };

}

let mapStateToProps = (state) => {
    return (
        {
            data: {
                userID: state.auth.data.userID,
                email: state.auth.data.email,
                login: state.auth.data.login
            },
            isAuth: state.auth.isAuth

        }
    )
};

let mapDispatchToProps = {
    authorise

};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);