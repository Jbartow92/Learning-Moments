import { useEffect, useState } from "react";
import { getAllPosts } from "./components/AllPosts";
import "./services/App.css"

export const App = () => {
  // return <div>Hello World!</div>
  const [posts, setAllPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(employeeArray => {
        setAllPosts(employeeArray)
    })
}, [])

  return (
    <div className="posts-container">
      <h1>All Posts</h1>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h2 className="post-info">{post.postTitle}</h2>
          <p>{post.postBody}</p>
        </div>
      ))}
    </div>
  );
}

