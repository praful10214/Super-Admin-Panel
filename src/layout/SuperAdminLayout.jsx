import React, { useState, useEffect } from "react";
import Dashboard from "../pages/Dashboard.jsx";
import EmployeeControl from "../pages/EmployeeControl.jsx";
import InventoryManagement from "../pages/InventoryManagement.jsx";
import MenuPageControl from "../pages/MenuPageControl.jsx";
import ReportControl from "../pages/ReportControl.jsx";
import Sidebar from "../components/Sidebar.jsx";
import CartSidebar from "../components/CartSidebar.jsx";

const SuperAdminLayout = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [employees, setEmployees] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [reports, setReports] = useState([]);
  const [cart, setCart] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  console.log("SuperAdminLayout rendering, activeSection:", activeSection);

  useEffect(() => {

    setEmployees([
      { id: 1, name: "John Doe", role: "Manager", status: "Active", email: "john@restaurant.com" },
      { id: 2, name: "Jane Smith", role: "Chef", status: "Active", email: "jane@restaurant.com" },
      { id: 3, name: "Mike Johnson", role: "Waiter", status: "Inactive", email: "mike@restaurant.com" },
    ]);

    setInventory([
      { id: 1, name: "Tomatoes", category: "Vegetables", quantity: 50, unit: "kg", lowStock: 10 },
      { id: 2, name: "Chicken Breast", category: "Meat", quantity: 25, unit: "kg", lowStock: 5 },
      { id: 3, name: "Olive Oil", category: "Oils", quantity: 8, unit: "liters", lowStock: 2 },
    ]);

    setMenuItems([
      { id: 1, name: "Margherita Pizza", category: "Main Course", price: 12.99, status: "Available" },
      { id: 2, name: "Caesar Salad", category: "Appetizer", price: 8.99, status: "Available" },
      { id: 3, name: "Chocolate Cake", category: "Dessert", price: 6.99, status: "Out of Stock" },
    ]);

    setReports([
      { id: 1, name: "Daily Sales Report", date: "2023-10-15", type: "Sales" },
      { id: 2, name: "Inventory Usage Report", date: "2023-10-14", type: "Inventory" },
      { id: 3, name: "Employee Performance", date: "2023-10-13", type: "HR" },
    ]);

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const renderPage = () => {
    console.log("Rendering page:", activeSection);
    switch (activeSection) {
      case "dashboard":
        return <Dashboard employees={employees} inventory={inventory} menuItems={menuItems} reports={reports} />;
      case "employees":
        return <EmployeeControl employees={employees} />;
      case "inventory":
        return <InventoryManagement inventory={inventory} />;
      case "menu":
        return <MenuPageControl menuItems={menuItems} addToCart={addToCart} />;
      case "reports":
        return <ReportControl reports={reports} />;
      default:
        return <div>Section not found: {activeSection}</div>;
    }
  };

  return (
    <div className="super-admin">
      <div className="admin-container">
        <Sidebar
          active={activeSection}
          setActive={setActiveSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          isMobile={isMobile}
        />

        <div className="main-content">
          {isMobile && (
            <div className="mobile-main-header">
              <h1>Restaurant Admin</h1>
            </div>
          )}
          {renderPage()}
        </div>

        {activeSection === "menu" && (
          <CartSidebar 
            cart={cart} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart} 
          />
        )}
      </div>
    </div>
  );
};

export default SuperAdminLayout;