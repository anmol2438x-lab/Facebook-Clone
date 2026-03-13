import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";
import PostListProvider from "../store/PostListProvider";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="content glassmorphism">
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <Outlet />

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
