import './App.css';
import "@arco-design/web-react/dist/css/arco.css";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import MainPage from "./Pages/MainPage/MainPage";
import {BrowserRouter, Route, Router, Routes, useRoutes,Navigate} from "react-router-dom";
import routes from "./routes";

function App() {
  return <>{useRoutes(routes)}</>;
}

export default App;
