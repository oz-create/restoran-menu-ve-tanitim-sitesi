import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Hakkımızda</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Hikayemiz
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Lezzet Durağı, 2005 yılında Türk mutfağının eşsiz lezzetlerini modern bir
              yorumla sunma tutkusuyla kuruldu. Kurucu şefimiz Ahmet Yılmaz'ın 30 yıllık
              mutfak tecrübesi ve ailesinden öğrendiği geleneksel tarifler, restoranımızın
              temelini oluşturur.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Her sabah taze tedarik ettiğimiz malzemelerle, özenle hazırladığımız
              yemeklerimiz, misafirlerimize unutulmaz bir lezzet deneyimi sunar.
              Geleneksel tariflere sadık kalırken, sunumumuzda modern dokunuşlar
              eklemeyi severiz.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              20 yılı aşkın süredir, binlerce mutlu misafire hizmet vermenin gururunu
              yaşıyoruz. Siz de aramıza katılın ve lezzetin durak noktasını keşfedin.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adres</h3>
                  <p className="text-gray-600">
                    Kültür Mahallesi, Lezzet Sokak No: 42
                    <br />
                    Çankaya, Ankara
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Çalışma Saatleri</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Pazartesi - Cuma: 11:00 - 23:00</p>
                    <p>Cumartesi - Pazar: 10:00 - 00:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">İletişim</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Telefon: +90 (312) 555 1234</p>
                    <p className="flex items-center">
                      <Mail size={16} className="mr-2" />
                      info@lezzetduragi.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.2760168726!2d32.8597!3d39.9208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU1JzE1LjAiTiAzMsKwNTEnMzUuMCJF!5e0!3m2!1str!2str!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
