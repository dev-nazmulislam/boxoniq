import "./App.css";
import Header from "./Pages/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CommunityQA from "./Pages/Community/CommunityQA";
import UpdateApp from "./Pages/UpdateApp/UpdateApp";
import Refer from "./Pages/Refer/Refer";
import Community from "./Pages/Community/Community";
import Blogs from "./Pages/Blogs/Blogs";
import ShowBlog from "./Pages/Blogs/ShowBlog";
import Stories from "./Pages/Stories/Stories";
import ShowStories from "./Pages/Stories/ShowStories";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <Blogs />
      <ShowBlog />
      <Stories />
      <ShowStories />
      <CommunityQA />
      <Community />
      <UpdateApp />
      <Refer /> */}
    </div>
  );
}

export default App;
