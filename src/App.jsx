import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Maincontent from "./Components/Maincontent";
import "./assets/css/Sidebar.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const hideSidebar = () => setShowSidebar(false); // Hide on link click (mobile)

  return (
    <div className="app-wrapper d-flex">
      {/* Toggle Button (mobile only) */}
      <button
        className="btn btn-dark d-md-none position-fixed top-0 start-0 m-2 z-3"
        onClick={toggleSidebar}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar-wrapper ${showSidebar ? "show" : ""} d-md-block`}
      >
        <Sidebar onLinkClick={hideSidebar} />
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1 p-3">
        <Maincontent />
      </div>
    </div>
  );
}

export default App;
