import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'menu', label: 'Menü' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'reservation', label: 'Rezervasyon' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavigate('home')}
            className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition"
          >
            Lezzet Durağı
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'text-amber-700 border-b-2 border-amber-700'
                    : 'text-gray-700 hover:text-amber-700'
                } pb-1 transition font-medium`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-700 hover:bg-gray-50'
                } block w-full text-left px-3 py-2 rounded-md font-medium transition`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
