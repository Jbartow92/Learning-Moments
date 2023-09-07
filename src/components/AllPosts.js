export const getAllPosts= () => { 
    // Fetch posts data from your database or API
    return fetch('http://localhost:8088/posts')
      .then(response => response.json())
      
  }

//   return (
//     <div>
//       <h1>All Posts</h1>
//       {posts.map(post => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

