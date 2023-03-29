import style from './Message.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

const Messages = (props) => {

    const newMessage = React.createRef();


    const addMessage = () => {
        const text = newMessage.current.value;
        props.addMessage(text);
        newMessage.current.value = '';
    }

    return (
        <div className={style.wrap}>
            <div>
                <ul className={style.dialogs}>
                    {props.data.dialogs.map(dialog => <Dialog className={style.dialog} name={dialog.name} key={dialog.id} id={dialog.id} />)}
                </ul>
            </div>
            <span></span>
            <div>
                <ul className={style.messages}>
                    {props.data.messages.map(message => <Message key={message.id} className={`${style.message} ${message.my ? style.my : ''}`} message={message.text}/>)}
                </ul>
                <div className={style.send}>
                    <textarea className="textarea" ref={newMessage}></textarea>
                    <button className="button" onClick={addMessage}>Отправить</button>
                </div>
                
            </div>
        </div>
    )
}   

export default Messages;