import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen bg-white">
      <h1 className="text-black text-2xl font-semibold">KOMPUTASI AWAN - IKAN</h1>
      <div className="flex gap-4">
        <p className="text-black font-medium text-md">Moch Johan Bintang Pratama</p>
        <p className="text-black font-medium text-md">Rizkia Putra Raditya</p>
      </div>
      <button className="bg-blue-600 rounded-xl px-4 py-2">
        <Link to="/dashboard" className="text-white font-medium text-sm">
          Dashboard
        </Link>
      </button>
    </main>
  );
};
export default Index;
