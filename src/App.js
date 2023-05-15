import "./App.scss";
import Feeds from "./components/FeedCard/Feeds";
import Navbar from "./components/Navbar/Navbar";
import CreatePost from "./components/post/CreatePost";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <>
      <Navbar />

      <div className="home-wrapper">
        <div className="profilecard-wrap">
            <ProfileCard/>
        </div>

        <div className="feed-wrap">
          <CreatePost />
          <Feeds />
        </div>
        <div className="other">
          
        </div>

      </div>
    </>
  );
}

export default App;
