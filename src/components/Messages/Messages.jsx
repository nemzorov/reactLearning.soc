import style from './Message.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import Send from '../elements/send/Send';
import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/message-reducer';
import StoreContext from '../../store-context';

const Messages = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const dialogs = store.getState().messagesPage;
                return (
                    <div className={style.wrap}>
                        <div>
                            <ul className={style.dialogs}>
                                {dialogs.dialogs.map(dialog => <Dialog className={style.dialog} name={dialog.name} key={dialog.id} id={dialog.id} />)}
                            </ul>
                        </div>
                        <span></span>
                        <div>
                            <ul className={style.messages}>
                                {dialogs.messages.map(message => <Message key={message.id} className={`${style.message} ${message.my ? style.my : ''}`} message={message.text} />)}
                            </ul>

                            <Send changeActionCreator={changeMessageActionCreator} actionAdd={addMessageActionCreator} textareaVal={dialogs.textareaVal} dispatch={store.dispatch.bind(store)} btnName="Отправить" style={style.send} />
                        </div>
                    </div>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default Messages;