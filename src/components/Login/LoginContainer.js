import React from "react"
import Login from "./Login";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux"

const LoginContainer = ({isAuth}) => {

    const element = isAuth ? <Redirect to="/profile"/> : <Login/>
    return (
        <>
        {element}
        </>
    )
};


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

let mapDispatchToProps = {}


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)