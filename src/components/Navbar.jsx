import { NavLink } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Navbar() {
  const linkBase = 'block px-3 py-2 rounded-md text-sm font-medium transition-colors';
  const activeClass = 'bg-blue-600 text-white';
  const inactiveClass = 'text-white hover:bg-blue-700 p-2 bg-blue-600 rounded-md flex items-center justify-center';

  return (
    <nav className="min-h-screen w-56 p-4 bg-white border-r border-r-gray-300 flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-3xl text-black mb-4">IKAN</h1>

        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex justify-left">
        <NavLink to="/" end aria-label="Back to Home" className={({ isActive }) => `p-2 rounded-md flex items-center justify-center ${isActive ? activeClass : inactiveClass}`}>
          <Home className="w-6 h-6" />
        </NavLink>
      </div>
    </nav>
  );
}
