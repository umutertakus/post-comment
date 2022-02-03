import { BrowserRouter as Router, Route} from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Router>
    <div className="main_wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
        <Route path="/" exact component = {PostList} />
        <Route path="/posts/:id" component = {PostDetail} />
      </div>
    </div>
    </Router>
  );
}

export default App;
