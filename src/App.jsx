import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CoverPage from "./assets/pages/CoverPage";
import MyTask from "./assets/pages/MyTask";
import NewTask from "./assets/pages/NewTask";
import EditTask from "./assets/pages/EditTask";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
  const baseURL = "https://task-backend-1xvc.onrender.com";

  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/tasks" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// ==================================

// NETLIFY, VERCEL, RENDER ETC ARE POPULAR FREE PLATFORMS FOR HOSTLING WEB APPLICATIONS
// NETLIFY IS BEST FOR STATIC SITE AND APPLICATION WITH A FOCUS ON SIMPLICITY AND SERVERLESS FUNCTION

// VERCEL is optimized for frontend development especially those using react and next.js with strong server less and edge capabilites

// RENDER: is a versatile platform suitable for fullstack applcations, offering more flexible in terms of supported frameworks, database and backend services.

// https://task-manager-backend-2-1hlv.onrender.com
