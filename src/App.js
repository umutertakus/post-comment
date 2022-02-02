import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("https://react-yazi-yorum.herokuapp.com/posts")
      .then(response => {
        setPostList(response.data);
      })
  }, [])

  return (
    <div className="main_wrapper">
      <header>

      </header>
      <div className="ui raised very padded text container segment">
        <div className="ui relaxed divided list">
          {postList.map(post => {
            return (<div key={post.id} className="item">
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <a className="header"> {post.title} </a>
                <div className="description"> {post.created_at} </div>
              </div>
            </div>)
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
