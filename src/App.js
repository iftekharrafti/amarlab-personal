import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import Contacts from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Blogs from "./pages/Blogs/Blogs";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import AuthProvider from "./context/AuthProvider";
import AddBlog from "./pages/Dashboard/AddBlog/AddBlog";
import EditBlog from "./pages/Dashboard/EditBlog/EditBlog";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/editBlog/:id" element={<EditBlog />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
