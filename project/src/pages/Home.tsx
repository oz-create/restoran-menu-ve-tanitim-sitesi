import { ChefHat, Clock, MapPin } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Lezzet Durağı'na Hoş Geldiniz
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Geleneksel Türk mutfağının en lezzetli tatlarını modern bir atmosferde sunuyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('menu')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Menümüze Göz Atın
              </button>
              <button
                onClick={() => onNavigate('reservation')}
                className="bg-white hover:bg-gray-100 text-amber-700 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Rezervasyon Yapın
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <ChefHat className="text-amber-600" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">Usta Şefler</h3>
            <p className="text-gray-600">
              20 yılı aşkın deneyime sahip şeflerimiz, her tabakta mükemmelliği hedefliyor
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Clock className="text-amber-600" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">Taze Malzemeler</h3>
            <p className="text-gray-600">
              Her gün taze tedarik edilen en kaliteli malzemelerle hazırlanıyor
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <MapPin className="text-amber-600" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">Merkezi Konum</h3>
            <p className="text-gray-600">
              Şehrin kalbinde, kolay ulaşılabilir konumumuzla hizmetinizdeyiz
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Hikayemiz
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                2005 yılında kurulan Lezzet Durağı, Türk mutfağının zengin lezzetlerini
                modern bir yorumla sunma misyonuyla yola çıktı. Geleneksel tariflerimizi
                korurken, sunumumuzda çağdaş bir yaklaşım benimsiyoruz.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Her tabağımız, ailemizden sofranıza uzanan bir yolculuk. Sizleri
                aramızda görmekten mutluluk duyarız.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
