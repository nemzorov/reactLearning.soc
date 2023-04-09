import style from './Message.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import Send from '../elements/send/Send';
import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/message-reducer';


const Messages = (props) => {

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
                    {props.data.messages.map(message => <Message key={message.id} className={`${style.message} ${message.my ? style.my : ''}`} message={message.text} />)}
                </ul>

                <Send changeActionCreator={changeMessageActionCreator} actionAdd={addMessageActionCreator} textareaVal={props.textareaVal} dispatch={props.dispatch} btnName="Отправить" style={style.send} />
            </div>
        </div>
    )
}

export default Messages;