import React from 'react'
import avatar from '../../images/avatar.png'
import './CreatePost.scss';
import { FcPicture ,FcClapperboard,FcPlanner,FcVoicePresentation} from "react-icons/fc";

const CreatePost = () => {
  return (
    <>
      <div className='createpost-wrap'>

        <div className='createpost-upper'>
          <img src={avatar} alt="" />
          <input type="text" placeholder='Start a Post' />
        </div>

        <div className='createpost-lower'>
          <button className='btn'><FcPicture/>Photo</button>
          <button className='btn'><FcClapperboard/> Video</button>
          <button className='btn'><FcPlanner/> Event</button>
          <button className='btn'><FcVoicePresentation/>Write Article</button>
        </div>

      </div>
    </>
  )
}

export default CreatePost