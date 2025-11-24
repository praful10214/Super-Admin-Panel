import React from 'react';

const Navbar = ({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen, isMobile }) => {
  const menuItems = [
    ["dashboard", "Dashboard"],
    ["employees", "Employee Control"],
    ["inventory", "Inventory Management"],
    ["menu", "Menu Page Control"],
    ["reports", "Report Control"],
  ];

  return (
    <>
  
      <nav className="navbar">
        <div className="navbar-left">
          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <button 
              className="navbar-hamburger"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
          
          <div className="navbar-brand">
            <h2>Restaurant Admin</h2>
          </div>
        </div>

        {!isMobile && (
          <div className="navbar-center">
            {menuItems.map(([key, label]) => (
              <button
                key={key}
                className={`nav-link ${activeSection === key ? "active" : ""}`}
                onClick={() => setActiveSection(key)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="navbar-right">
          <div className="navbar-user">
            <span>Admin User</span>
          </div>
        </div>
      </nav>

      {isMobile && (
        <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="mobile-sidebar-header">
            <h3>Restaurant Admin</h3>
            <button 
              className="close-sidebar"
              onClick={() => setSidebarOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          <nav className="mobile-sidebar-nav">
            {menuItems.map(([key, label]) => (
              <button
                key={key}
                className={`mobile-nav-item ${activeSection === key ? "active" : ""}`}
                onClick={() => {
                  setActiveSection(key);
                  setSidebarOpen(false);
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
      
      {isMobile && sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;