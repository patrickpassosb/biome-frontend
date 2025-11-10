import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="glass-strong border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group animate-fade-in">
            <span className="text-2xl group-hover:scale-110 transition-transform animate-gentle-pulse">🧬</span>
            <span className="text-xl font-bold text-text">Biome</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/how-it-works"
              className="text-text-secondary hover:text-text transition-colors duration-200 glass-light px-4 py-2 rounded-lg hover:border-white/20"
            >
              How It Works
            </Link>
            <Link
              to="/analyze"
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Try It Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
