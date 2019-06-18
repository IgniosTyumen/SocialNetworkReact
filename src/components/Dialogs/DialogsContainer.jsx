import React from 'react'
import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"
import {checkAuthorisation} from "../HOCs/AuthHOC/withAuthRedirect";


let mapStateToProps = (state) =>{
    return{
        dialogsPage:state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth : state.auth.isAuth
    }

};
let mapDispatchToProps = {

        updateNewMessageText,
        addMessage

};



const DialogsContainer =  connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;