// Mock Supabase client for demo purposes
export const supabase = {
  from: () => ({
    select: () => ({ data: [], error: null }),
    insert: () => ({ data: [], error: null }),
    update: () => ({ data: [], error: null }),
    delete: () => ({ data: [], error: null }),
    order: () => ({ data: [], error: null }),
  }),
  auth: {
    signUp: () => ({ data: null, error: null }),
    signInWithPassword: () => ({ data: null, error: null }),
    signOut: () => ({ error: null }),
    getUser: () => ({ data: { user: null }, error: null }),
  },
}

// Keep the type definitions
export interface Profile {
  id: string
  email: string
  full_name?: string
  phone?: string
  avatar_url?: string
  role: "client" | "agent" | "admin"
  created_at: string
  updated_at: string
}

export interface Property {
  id: string
  title: string
  description?: string
  price: number
  property_type: "apartment" | "house" | "villa" | "townhouse" | "commercial" | "land"
  listing_type: "sale" | "rent"
  bedrooms?: number
  bathrooms?: number
  area_sqm?: number
  location: string
  address?: string
  latitude?: number
  longitude?: number
  images: string[]
  features: string[]
  status: "available" | "pending" | "sold" | "rented"
  agent_id?: string
  created_at: string
  updated_at: string
}

export interface Consultation {
  id: string
  client_id?: string
  agent_id?: string
  property_id?: string
  full_name: string
  email: string
  phone: string
  preferred_date?: string
  preferred_time?: string
  property_type?: string
  budget_range?: string
  message?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  created_at: string
  updated_at: string
}
