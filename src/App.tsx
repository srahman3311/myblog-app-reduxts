import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/layout/Layout";
import Home from "./home/Home";
import CreateBlog from "./components/create-blog/CreateBlog";

export default function App() {

    return (
        <div className="App">
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/create-blog" element={<CreateBlog />} />
            </Routes>
        </div>
    );
}