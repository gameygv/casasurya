/*
  # Create contact_messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `nombre` (text) - Full name of the person contacting
      - `email` (text) - Email address for contact
      - `telefono` (text) - Phone/WhatsApp number
      - `asunto` (text) - Subject of the message
      - `mensaje` (text) - The message content
      - `estado` (text) - Status of the message (new, read, replied)
      - `created_at` (timestamptz) - When the message was created
      
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public to insert messages (anyone can send a message)
    - Add policy for authenticated users to view all messages (admin access)
    
  3. Important Notes
    - This table stores all contact form submissions from the website
    - Default status is 'new' for new messages
    - Public can only INSERT (send messages), not view them
    - Only authenticated users (admins) can view and manage messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  email text NOT NULL,
  telefono text NOT NULL,
  asunto text NOT NULL,
  mensaje text NOT NULL,
  estado text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
