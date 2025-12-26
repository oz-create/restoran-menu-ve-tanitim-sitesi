import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { MenuItem } from '../types';

const categoryNames = {
  starters: 'Başlangıçlar',
  mains: 'Ana Yemekler',
  desserts: 'Tatlılar',
  drinks: 'İçecekler',
};

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('category', { ascending: true })
        .order('price', { ascending: true });

      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error('Error fetching menu:', error);
    } finally {
      setLoading(false);
    }
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Menü yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Menümüz</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-3 border-b-2 border-amber-600">
              {categoryNames[category as keyof typeof categoryNames]}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-amber-600">
                      ₺{item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
