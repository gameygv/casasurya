/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `nombre` (text) - Full name of the person making the booking
      - `email` (text) - Email address for contact
      - `telefono` (text) - Phone/WhatsApp number
      - `servicio` (text, nullable) - Name of the service being booked
      - `evento` (text, nullable) - Name of the event being booked
      - `asistentes` (integer) - Number of attendees (default 1)
      - `mensaje` (text, nullable) - Optional message from the customer
      - `estado` (text) - Status of the booking (pending, confirmed, cancelled)
      - `created_at` (timestamptz) - When the booking was created
      
  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public to insert bookings (anyone can make a booking)
    - Add policy for authenticated users to view all bookings (admin access)
    
  3. Important Notes
    - This table stores all customer booking requests from the website
    - Either `servicio` or `evento` should be filled (one or the other)
    - Default status is 'pending' for new bookings
    - Public can only INSERT (create bookings), not view them
    - Only authenticated users (admins) can view bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  email text NOT NULL,
  telefono text NOT NULL,
  servicio text,
  evento text,
  asistentes integer DEFAULT 1,
  mensaje text,
  estado text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
