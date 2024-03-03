import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import AllPosts from "./components/Posts/AllPosts";

const App = () => {
  return (
    <>
      <Header />
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/posts" element={<AllPosts />}/>
      </Routes>
    </>
  );
};

export default App;
