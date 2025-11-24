import StatsCard from "../components/StatsCard";

const Dashboard = ({ employees, inventory, menuItems, reports }) => {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="stats-grid">
        <StatsCard title="Total Employees" value={employees.length} />
        <StatsCard title="Low Stock Items" value={inventory.filter(i => i.quantity <= i.lowStock).length} />
        <StatsCard title="Menu Items" value={menuItems.length} />
        <StatsCard title="Recent Reports" value={reports.length} />
      </div>
    </div>
  );
};

export default Dashboard;
