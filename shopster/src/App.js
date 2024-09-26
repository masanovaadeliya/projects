import "./assets/css/style.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostsByCategory from "./pages/PostsByCategory";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CategoriesPage />} />
          <Route path="/category/posts/:id" element={<PostsByCategory />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
