
import Send from '../elements/send/Send';
import Post from './Posts/Post';
import style from './Profile.module.css'
import { addPostActionCreator, changePostActionCreator } from '../../redux/profile-reducer';
import StoreContext from '../../store-context';


const Profile = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const profile = store.getState().profile;
                return (
                    <div className={style.wrap}>
                        <div className={style.left}>
                            <div className={style.image}>
                                <img src="https://i.pinimg.com/originals/94/1d/99/941d99ab7b41cf36ce2e1023f23a7cc2.png" alt="face" />
                            </div>
                        </div>
                        <div className={style.right}>
                            <div className={style.name}>Гомер Симпсон</div>

                            <div className={style.wall}>

                                <Send changeActionCreator={changePostActionCreator} actionAdd={addPostActionCreator} textareaVal={profile.textareaVal} dispatch={store.dispatch.bind(store)} btnName="Опубликовать" style={style.send} />

                                <div className={style.posts}>
                                    {profile.posts.map(post => <Post style={style.post} text={post.text} date={post.date} />)}
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
            }

        </StoreContext.Consumer>
    )
}

export default Profile;