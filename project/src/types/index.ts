export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image_url?: string;
  created_at: string;
}

export interface Reservation {
  id?: string;
  name: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  status?: string;
  created_at?: string;
}
