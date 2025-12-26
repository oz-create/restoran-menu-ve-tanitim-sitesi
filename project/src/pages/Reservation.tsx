import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { Calendar, Clock, Users, User, Phone, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: 2,
    date: '',
    time: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error } = await supabase.from('reservations').insert([
        {
          name: formData.name,
          phone: formData.phone,
          guests: formData.guests,
          date: formData.date,
          time: formData.time,
        },
      ]);

      if (error) throw error;

      await fetch('https://ozlm.app.n8n.cloud/webhook/rezervasyon-formu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          guests: formData.guests,
          date: formData.date,
          time: formData.time,
          timestamp: new Date().toISOString(),
        }),
      });

      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        guests: 2,
        date: '',
        time: '',
      });
    } catch (err) {
      setError('Rezervasyon oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

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
          <h1 className="text-5xl font-bold text-white">Rezervasyon</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <p className="text-gray-600 text-center mb-8">
            Özel günleriniz için yerinizi ayırtın. Size en iyi hizmeti sunabilmemiz için
            rezervasyonunuzu en az 2 saat önceden yapmanızı rica ederiz.
          </p>

          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
              <CheckCircle className="text-green-600" size={24} />
              <p className="text-green-800">
                Rezervasyonunuz başarıyla oluşturuldu! En kısa sürede sizinle iletişime
                geçeceğiz.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <div className="flex items-center space-x-2 mb-2">
                  <User size={20} />
                  <span>Ad Soyad</span>
                </div>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Adınızı ve soyadınızı girin"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone size={20} />
                  <span>Telefon</span>
                </div>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="05XX XXX XX XX"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Users size={20} />
                  <span>Kişi Sayısı</span>
                </div>
              </label>
              <input
                type="number"
                required
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: parseInt(e.target.value) })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar size={20} />
                    <span>Tarih</span>
                  </div>
                </label>
                <input
                  type="date"
                  required
                  min={minDate}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock size={20} />
                    <span>Saat</span>
                  </div>
                </label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Gönderiliyor...' : 'Rezervasyon Yap'}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">
            Acil rezervasyonlar için bizi arayabilirsiniz:
          </p>
          <p className="text-xl font-semibold text-amber-700">
            +90 (312) 555 1234
          </p>
        </div>
      </div>
    </div>
  );
}
