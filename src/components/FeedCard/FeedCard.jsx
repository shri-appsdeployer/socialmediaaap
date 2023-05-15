import React from "react";
import "./FeedCard.scss";
import avatar from '../../images/avatar.png'
import { useDispatch,useSelector } from "react-redux";
import { incrementLike,getAllFeeds,incrementdisLike } from "../../store/Feed";


const FeedCard = (data) => {
  const dispatch = useDispatch()
    const {name,role,postTime,description,image,likes,dislikes,id} = data.item


    const handleLike =()=>{
      dispatch(incrementLike(id))
      console.log('liked')
    }
    const handleDislike =()=>{
      dispatch(incrementdisLike(id))
    }


  return (
    <>
      <div className="contanier-fluid feed-container">

        <div className="feed-user">
            <div className="feed-user-wrap">
                <div>
                    <img src={avatar} alt="sm-user" />
                </div>
                <div className="feed-user-details">
                    <span>{name}</span>
                    <span>{role}</span>
                    <span>{postTime}</span>
                </div>
            </div>
            <div className="feed-follow">
                <button className="btn">Follow+</button>
            </div>
        </div>
        <hr />


        <div className="feed-content">
          <div className="feed-description">
            {description}

          </div>
          <div className="feed-image">
            <img src={avatar} alt="feed image" />
          </div>
        </div>
        <hr />


        <div className="feed-bottom">
          <button className="btn btn-dark" onClick={handleLike}>{likes}<i className="fa-solid fa-thumbs-up"></i></button>
          <button className="btn btn-dark" onClick={handleDislike}>{dislikes}<i className="fa-solid fa-thumbs-down"></i></button>
          <button className="btn btn-dark"><i className="fa-solid fa-bookmark"></i></button>
          <button className="btn btn-dark"><i className="fa-solid fa-share"></i></button>
        </div>

      </div>
    </>
  );
};

export default FeedCard;
