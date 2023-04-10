import style from './Send.module.css'
import React from 'react';


const Send = (props) => {
    const newMessage = React.createRef();

    const addMessage = () => {
        props.dispatch(props.actionAdd());
    }

    const changeMessage = () => {
        const text = newMessage.current.value;
        props.dispatch(props.changeActionCreator(text));
    }

    return (
        <div className={props.style}>
            <textarea className={style.textarea} onChange={changeMessage} ref={newMessage} value={props.textareaVal} />
            <button className={style.button} onClick={addMessage} >{props.btnName}</button>
        </div>
    )
}

export default Send;