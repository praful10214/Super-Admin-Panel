const Sidebar = ({ active, setActive, sidebarOpen, setSidebarOpen, isMobile }) => {
  return (
    <>
      {/* Hamburger Menu Button for Mobile */}
      {isMobile && !sidebarOpen && (
        <button 
          className="hamburger-menu"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Restaurant Admin</h2>
          {isMobile && (
            <button 
              className="close-sidebar" 
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          {[
            ["dashboard", "Dashboard"],
            ["employees", "Employee Control"],
            ["inventory", "Inventory Management"],
            ["menu", "Menu Page Control"],
            ["reports", "Report Control"],
          ].map(([key, label]) => (
            <button
              key={key}
              className={`nav-item ${active === key ? "active" : ""}`}
              onClick={() => {
                setActive(key);
                if (isMobile) setSidebarOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {isMobile && sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
    </>
  );
};

export default Sidebar;