import style from './Send.module.css'
import React from 'react';
import { changeMessageActionCreator } from '../../../redux/state';

const Send = (props) => {
    const newMessage = React.createRef();

    const addMessage = () => {
        props.dispath(props.actionAdd());
    }

    const changeMessage = () => {
        const text = newMessage.current.value;
        props.dispath(changeMessageActionCreator(text));
    }



    return (
        <div className={props.style}>
            <textarea className={style.textarea} onChange={changeMessage} ref={newMessage} value={props.textareaVal} />
            <button className={style.button} onClick={addMessage} >{props.btnName}</button>
        </div>
    )
}

export default Send;