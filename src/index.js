import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
