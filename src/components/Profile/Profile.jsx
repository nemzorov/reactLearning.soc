
import Send from '../elements/send/Send';
import Post from './Posts/Post';
import style from './Profile.module.css'

const Profile = (props) => {
    let posts = props.data.posts;

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

                    <Send btnName="Опубликовать" changeTextarea={props.changeTextarea} style={style.send} addMessage={props.addPost} textareaVal={props.data.textareaVal} />

                    <div className={style.posts}>
                        {posts.map(post => <Post style={style.post} text={post.text} date={post.date} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;