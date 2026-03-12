import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Friends from "./components/Friends";
import Help from "./components/Help";
import Messages from "./components/Messages";
import Notifacition from "./components/Notification";
import PostList from "./components/PostList.jsx";
import Reels from "./components/Reels";
import Saved from "./components/Saved";
import Settings from "./components/Settings";
import App from "./routes/App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
      { path: "/Dashboard", element: <Dashboard /> },
      { path: "/msg", element: <Messages /> },
      { path: "/friends", element: <Friends /> },
      { path: "/notification", element: <Notifacition /> },
      { path: "/reels", element: <Reels /> },
      { path: "/help", element: <Help /> },
      { path: "/saved", element: <Saved /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
