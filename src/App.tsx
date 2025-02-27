import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import Home from "./Pages/Home";
import AddPost from "./Pages/AddPost";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </Router>
  );
}
