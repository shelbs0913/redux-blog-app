import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBlogPost } from './actions';
import './App.css';

function App() {
  
  const [post, setPost] = useState(null);
  const [subject, setSubject] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const blogList = useSelector(state => state);
  console.log(blogList);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(subject);
    console.log(post);
    console.log(favorite);
    dispatch(addBlogPost({subject:subject, post:post, favorite:favorite}));

  }

  return (
    <div>
      <div className="header">
        <h1>Welcome to Ghost Tweeter!</h1>
        <h2>Post your topics below</h2>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <form action="/action_page.php">
              <h2><label>Submit your Post here!!</label></h2>
              <p><textarea placeholder='Enter subject here'rows="2" cols="50" onChange={e => setSubject(e.target.value)}></textarea></p>
              <p><textarea placeholder='Enter post here'rows="12" cols="100" onChange={e => setPost(e.target.value)}></textarea></p>
              {/* <button className="delete-button" onClick={() => deleteItem(setSubject(e.target.value))}>X</button> */}
              <br/>
              <label>Favorite: </label>
              <input type="checkbox" name="favorite" id="favorite" onChange={(e) => setFavorite(e.target.checked)}/>
              <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="post">
        <h3>Recent Posts:</h3>
          {blogList.map((blogItem) => {
           return (
           <div key={blogItem.subject}>
            <p>Subject: {blogItem.subject}</p>
            <p>Post: {blogItem.post}</p>
           </div>
           )
          }
        )}
      </div>

      <div className="rightcolumn">
        <div className="card">
          <h2>About Me</h2>
          <p>Hi, I am Shelby. I started this blog for you to ask questions or post what is on your mind. BE KIND!!!</p>
        </div>

      <div className="card">
        <h3>Favorite Post</h3>
        <div>
          {blogList.map((blogItem) => {
          if (blogItem.favorite) {
            return (
            <div key={blogItem.Post}>
            <h2>Post: {blogItem.post}</h2>
            </div>
            )
          } else {
            return false
          }
        })
        
    }
    </div>
      </div>
    
      <div className="card">
        <h3>Follow Me</h3>
        <p>Instagram: @mustang_shelbs</p>
        <p>Facebook: Shelby Henry</p>
      </div>
    </div>
      
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>

  )
  
}

export default App;
