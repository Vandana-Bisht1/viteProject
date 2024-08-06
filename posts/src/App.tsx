
import { BrowserRouter, Route,Routes } from "react-router-dom";
import PostList from "./posts/PostList";
import UserPosts from "./user-posts/UserPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" Component={PostList} />
        <Route path="/posts/:id?" Component={UserPosts} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
