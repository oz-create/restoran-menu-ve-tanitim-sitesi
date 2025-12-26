import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">
              Lezzet Durağı
            </h3>
            <p className="text-gray-400">
              Geleneksel Türk mutfağının en lezzetli tatlarını modern bir atmosferde sunuyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Menü
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Galeri
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reservation')}
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Rezervasyon
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Çalışma Saatleri</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-start space-x-2">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Pazartesi - Cuma</p>
                  <p className="text-sm">11:00 - 23:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Cumartesi - Pazar</p>
                  <p className="text-sm">10:00 - 00:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Kültür Mahallesi, Lezzet Sokak No: 42, Çankaya, Ankara</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="flex-shrink-0" />
                <span>+90 (312) 555 1234</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@lezzetduragi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Lezzet Durağı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
