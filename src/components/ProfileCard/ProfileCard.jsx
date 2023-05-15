import React from 'react'
import avatar from '../../images/avatar.png'
import './ProfileCard.scss'

const ProfileCard = () => {
  return (
    <div className='sidecard-wrap'>
        <div className='profile'><img src={avatar} alt="" /></div>
        <div className='sd-name'><h4>Shrinivas Joshi</h4></div>
        <div className='sd-role'><h6>Computer Science Engineer</h6></div>

            <hr />
        <div className='sd-viewprofile'> 
            <span>Who viewed your profile</span>
            <span>-35</span>
        </div>
        <div className='sd-impression'> 
            <span>impression of your post</span>
            <span>-100</span>
        </div>

        <hr style={{color:'white'}} />
        <div><i className="fa-solid fa-bookmark"></i>My Items</div> 
        <hr />
        
    </div>
  )
}

export default ProfileCard