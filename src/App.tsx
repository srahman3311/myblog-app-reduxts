import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/layout/Layout";
import Home from "./home/Home";
import Blogs from "./components/blogs/Blogs";
import CreateBlog from "./components/create-blog/CreateBlog";

export default function App() {

    return (
        <div className="App">
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/create-blog" element={<CreateBlog />} />
            </Routes>
        </div>
    );
}