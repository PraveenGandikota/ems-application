// import React, { useState, useEffect } from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";
// import "./Dashboard.css"; // Import the updated CSS

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
//   const navigate = useNavigate();
//   axios.defaults.withCredentials = true;

//   useEffect(() => {
//     const handleResize = () => {
//       setSidebarOpen(window.innerWidth > 768); // Always open sidebar on large screens
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLogout = () => {
//     axios.get("http://localhost:8080/auth/logout").then((result) => {
//       if (result.data.Status) {
//         localStorage.removeItem("valid");
//         navigate("/adminlogin");
//       }
//     });
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="dashboard-container">
//       {/* ☰ Navbar Icon (Appears only on small screens) */}
//       {!sidebarOpen && (
//         <i className="bi bi-list navbar-icon" onClick={toggleSidebar}></i>
//       )}

//       {/* Sidebar */}
// <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>

//         {/* ✖ Close Icon (Only inside sidebar on small screens) */}
//         {sidebarOpen && window.innerWidth <= 768 && (
//           <i className="bi bi-x close-icon" onClick={toggleSidebar}></i>
//         )}

//         <Link to="/dashboard" className="sidebar-header">
//           <span className="sidebar-title">Praveen G</span>
//         </Link>

//         <ul className="nav-list">
//           <li>
//             <Link to="/dashboard">
//               <i className="bi bi-speedometer2"></i> Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashboard/employee">
//               <i className="bi bi-people"></i> Manage Employees
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashboard/category">
//               <i className="bi bi-columns"></i> Category
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashboard/profile">
//               <i className="bi bi-person"></i> Profile
//             </Link>
//           </li>
//           <li onClick={handleLogout} className="logout">
//             <Link>
//               <i className="bi bi-power"></i> Logout
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       {/* Main Content */}
// <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>

//         <div className="header">
//           <h4>Employee Management System</h4>
//         </div>
//         <div className="content">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard; 



import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import "./Dashboard.css"; 

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768); 
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:8080/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid");
        navigate("/adminlogin");
      }
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* ☰ Navbar Icon (Appears only on small screens) */}
      {!sidebarOpen && (
        <i className="bi bi-list navbar-icon" onClick={toggleSidebar}></i>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        {/* ✖ Close Icon (Only inside sidebar on small screens) */}
        {sidebarOpen && window.innerWidth <= 768 && (
          <i className="bi bi-x close-icon" onClick={toggleSidebar}></i>
        )}

        <Link to="/dashboard" className="sidebar-header">
          <span className="sidebar-title">Praveen G</span>
        </Link>

        <ul className="nav-list">
          <li>
            <Link to="/dashboard">
              <i className="bi bi-speedometer2"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/employee">
              <i className="bi bi-people"></i> Manage Employees
            </Link>
          </li>
          <li>
            <Link to="/dashboard/category">
              <i className="bi bi-columns"></i> Category
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile">
              <i className="bi bi-person"></i> Profile
            </Link>
          </li>
          <li onClick={handleLogout} className="logout">
            <Link>
              <i className="bi bi-power"></i> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
        <div className="header">
          <h4>Employee Management System</h4>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
