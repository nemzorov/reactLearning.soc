import style from './Send.module.css'
import React from 'react';



const Send = (props) => {
    const newMessage = React.createRef();
    const addMessage = () => {
        const now = new Date().toLocaleString();
        const text = newMessage.current.value;
        const date = now;
        if (text) {
            props.addMessage(text, date);
            newMessage.current.value = '';
        }

    }


    return (
        <div className={props.style}>
            <textarea className={style.textarea} ref={newMessage} ></textarea>
            <button className={style.button} onClick={addMessage} >{props.btnName}</button>
        </div>
    )
}

export default Send;