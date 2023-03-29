import React from "react";
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.wrap}>
            <div className={style.left}>
                <div className={style.image}>
                    <img src="https://i.pinimg.com/originals/94/1d/99/941d99ab7b41cf36ce2e1023f23a7cc2.png" alt="face" />
                </div>
            </div>
            <div className={style.right}>
                <div className={style.name}>Homer Simpsons</div>
                <div className={style.age}>
                    <span>25</span>
                    <span>лет</span>
                </div>
                <div className={style.about}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos mollitia aliquid quia sapiente ea dolores voluptates amet earum asperiores, ipsam corrupti perferendis delectus accusantium doloribus aspernatur est itaque rem cum.</div>
            </div>
        </div>
    )
}

export default Profile;