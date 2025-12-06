import Navbar from '../components/Navbar';
import DashboardContent from '../components/contents/Dashboard';

const Dashboard = () => {
  return (
    <main className="flex min-h-screen">
      <Navbar />
      <section className="flex-1 p-6 bg-gray-50">
        <DashboardContent />
      </section>
    </main>
  );
};

export default Dashboard;
