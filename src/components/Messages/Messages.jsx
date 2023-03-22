import style from './Message.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Messages = (props) => {
    return (
        <div className={style.wrap}>
            <ul className={style.dialogs}>
                {props.data.dialogs.map(dialog => <Dialog className={style.dialog} name={dialog.name} key={dialog.id} id={dialog.id} />)}
            </ul>
            <span></span>
            <ul className={style.messages}>
                {props.data.messages.map(message => <Message key={message.id} className={`${style.message} ${message.my ? style.my : ''}`} message={message.text}/>)}
            </ul>
        </div>
    )
}   

export default Messages;