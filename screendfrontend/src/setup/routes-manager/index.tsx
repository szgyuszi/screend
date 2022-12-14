import { Routes, Route } from "react-router-dom";
import Header from "../../common/Header";
import LandingPage from "../../pages/landing/LandingPage";
import MainLayout from "../../pages/main/components/MainLayout";
import AddPost from "../../pages/post/AddPost";
import PostItem from "../../pages/post/PostItem";
import MyProfile from "../../pages/profile/MyProfile";
import Profile from "../../pages/profile/Profile";
import Login from "../../pages/sign-in/Login";
import Register from "../../pages/sign-up/Register";

function RoutesManager() {
  return (
    <Routes>
      <Route path="/get-started" element={<LandingPage />} />
      <Route path="/" element={<Header />}>
        <Route index element={<MainLayout />} />
        <Route path="*" element={<h1>No page</h1>} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/post/:id" element={<PostItem />} />
        <Route path="/add-new-post" element={<AddPost />} />
      </Route>
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="*" element={<h1>No page</h1>} />
    </Routes>
  );
}

export default RoutesManager;
