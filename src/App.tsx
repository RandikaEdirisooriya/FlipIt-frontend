import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Home from "./Pages/Home";
import AddPost from "./Pages/AddPost";
import SignInPage from "./components/SignIn";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}
