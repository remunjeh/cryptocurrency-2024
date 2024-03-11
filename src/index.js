import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
