-- Insert admin user profile (this will be created when the user signs up)
-- The trigger will handle profile creation automatically

-- Insert sample properties
INSERT INTO public.properties (title, description, price, property_type, listing_type, bedrooms, bathrooms, area_sqm, location, address, images, features, status) VALUES
('Luxury Villa in East Legon', 'Stunning 4-bedroom villa with modern amenities, swimming pool, and beautiful garden. Perfect for families seeking luxury living in one of Accra''s most prestigious neighborhoods.', 850000.00, 'villa', 'sale', 4, 3, 320, 'East Legon, Accra', 'East Legon Hills, Accra', 
 ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'], 
 ARRAY['Swimming Pool', 'Garden', 'Garage', 'Security', 'Generator', 'Air Conditioning'], 'available'),

('Modern Apartment in Airport Residential', 'Contemporary 2-bedroom apartment with city views, fully furnished, and located in a secure gated community with 24/7 security.', 2500.00, 'apartment', 'rent', 2, 2, 120, 'Airport Residential, Accra', 'Airport Residential Area, Accra',
 ARRAY['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'],
 ARRAY['Furnished', 'City View', '24/7 Security', 'Gym', 'Swimming Pool', 'Parking'], 'available'),

('Executive Townhouse in Tema', 'Spacious 3-bedroom townhouse in a quiet residential area, perfect for young professionals and small families. Close to shopping centers and schools.', 450000.00, 'townhouse', 'sale', 3, 2, 200, 'Tema, Greater Accra', 'Community 25, Tema',
 ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'],
 ARRAY['Quiet Area', 'Near Schools', 'Shopping Centers', 'Parking', 'Garden'], 'available'),

('Penthouse in Cantonments', 'Exclusive penthouse with panoramic city views, 3 bedrooms, modern kitchen, and private terrace. Located in the heart of Cantonments.', 1200000.00, 'apartment', 'sale', 3, 3, 250, 'Cantonments, Accra', 'Cantonments Road, Accra',
 ARRAY['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'],
 ARRAY['City Views', 'Private Terrace', 'Modern Kitchen', 'Elevator', 'Concierge', 'Gym'], 'available'),

('Family House in Spintex', 'Comfortable 4-bedroom family house with large compound, perfect for families. Located in a developing area with good access to main roads.', 380000.00, 'house', 'sale', 4, 3, 280, 'Spintex, Accra', 'Spintex Road, Accra',
 ARRAY['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop'],
 ARRAY['Large Compound', 'Family Friendly', 'Good Access Roads', 'Parking', 'Security'], 'available'),

('Studio Apartment in Osu', 'Cozy studio apartment perfect for young professionals, fully furnished with modern amenities. Walking distance to Oxford Street and the beach.', 1200.00, 'apartment', 'rent', 1, 1, 45, 'Osu, Accra', 'Oxford Street, Osu',
 ARRAY['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop'],
 ARRAY['Furnished', 'Near Beach', 'Oxford Street', 'Modern Amenities', 'WiFi'], 'available');
