import './App.css'
import Feeds from './components/FeedCard/Feeds';
import Navbar from "./components/Navbar/Navbar";
import CreatePost from './components/post/CreatePost';

function App() {
  return (
    <>
      <Navbar />
      <CreatePost/>
      <Feeds/>
    
    </>
  );
}

export default App;
