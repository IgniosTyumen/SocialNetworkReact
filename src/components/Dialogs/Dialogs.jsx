import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogsItem";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let messagesElement = props.messages.map(message => <Message message={message.message} id={message.id}/>);
    let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let newMessageText = React.createRef();

    let onMessageChange = () => {
        let text = newMessageText.current.value;
        props.updateNewMessageText(text);
    };

    let addMessage = () => {
        props.addMessage();
    };



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={newMessageText} value={props.newMessageText}/>

            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );

};

export default Dialogs;