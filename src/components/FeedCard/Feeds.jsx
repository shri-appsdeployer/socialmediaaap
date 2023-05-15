import React from "react";
import FeedCard from "./FeedCard";
import { useSelector } from "react-redux";
import { getAllFeeds } from "../../store/Feed";


const Feeds = () => {

  const tempFeeds = useSelector(getAllFeeds)

  return <div>
    {
        tempFeeds.map((item)=>(
            <FeedCard item={item}/>
        ))
    }
  </div>;
};

export default Feeds;
