import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Dashboard from './pages/Dashboard';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
export default App;
