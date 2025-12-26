export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Izgara Lezzetler',
    },
    {
      url: 'https://images.pexels.com/photos/4253318/pexels-photo-4253318.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Taze Salatalar',
    },
    {
      url: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ana Yemekler',
    },
    {
      url: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tatlı Seçeneklerimiz',
    },
    {
      url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Rahat Atmosfer',
    },
    {
      url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern İç Mekan',
    },
    {
      url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Özel Yemekler',
    },
    {
      url: 'https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'İçecek Çeşitleri',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Galeri</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Restoranımızın samimi atmosferini ve lezzetli yemeklerimizi görmek için
          galerimize göz atın
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
