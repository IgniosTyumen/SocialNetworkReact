import React from 'react'
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <div>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    );

};

export default ProfileInfo;