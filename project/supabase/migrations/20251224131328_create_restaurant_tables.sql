/*
  # Restaurant Website Database Schema

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `phone` (text) - Contact phone number
      - `guests` (integer) - Number of guests
      - `date` (date) - Reservation date
      - `time` (time) - Reservation time
      - `created_at` (timestamptz) - When reservation was made
      - `status` (text) - Reservation status (pending, confirmed, cancelled)
    
    - `menu_items`
      - `id` (uuid, primary key)
      - `name` (text) - Dish name
      - `description` (text) - Dish description
      - `price` (decimal) - Price
      - `category` (text) - Category (starters, mains, desserts, drinks)
      - `image_url` (text) - Optional image URL
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public can read menu items
    - Public can insert reservations (contact form use case)
    - Only authenticated users can view all reservations
*/

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  price decimal(10,2) NOT NULL,
  category text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  guests integer NOT NULL CHECK (guests > 0),
  date date NOT NULL,
  time time NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view menu items"
  ON menu_items FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create reservations"
  ON reservations FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view reservations"
  ON reservations FOR SELECT
  TO authenticated
  USING (true);