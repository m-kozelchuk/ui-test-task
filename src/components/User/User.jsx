import React from 'react';
import { ImgWithFallback } from '../../core/helpers';
import './User.styles.scss';

const User = ({ img }) => {
    return (
        <div className="user">
            <div className="user__avatar">
                <ImgWithFallback 
                    src={`${img.user.profile_image}.webp`}
                    alt=''
                    fallback={`${img.user.profile_image}.jpg`}
                />
            </div>
            <div className="user__info">
                <div className="user__username">{img.user.username}</div>
                {/* <div className="user__name">{img.user.name}</div> */}
                <div className="user__location">{img.user.location}</div>
                <div className="user__bio">{img.user.bio}</div>
            </div>
        </div>
    )
}

export default User;