"use client"

import { useState, useEffect } from "react"
import { useAuth } from "./auth-provider"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Badge } from "../../components/ui/badge"
import { Search, MapPin, Bed, Bath, Square, Heart, Phone, Mail } from "lucide-react"

interface Property {
  id: string
  title: string
  description: string
  price: number
  property_type: "apartment" | "house" | "villa" | "townhouse" | "commercial" | "land"
  listing_type: "sale" | "rent"
  bedrooms?: number
  bathrooms?: number
  area_sqm?: number
  location: string
  address?: string
  images: string[]
  features: string[]
  status: "available" | "pending" | "sold" | "rented"
  created_at: string
}

export function MainApp() {
  const { profile, signOut } = useAuth()
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyType, setPropertyType] = useState("all")
  const [listingType, setListingType] = useState("all")
  const [priceRange, setPriceRange] = useState("all")

  useEffect(() => {
    fetchProperties()
  }, [])

  useEffect(() => {
    filterProperties()
  }, [properties, searchTerm, propertyType, listingType, priceRange])

  const fetchProperties = async () => {
    setLoading(true)
    try {
      // Mock data - in real app this would come from API
      const mockProperties: Property[] = [
        {
          id: "1",
          title: "Luxury Villa in East Legon",
          description: "Stunning 4-bedroom villa with modern amenities, swimming pool, and beautiful garden. Perfect for families seeking luxury living in one of Accra's most prestigious neighborhoods.",
          price: 850000,
          property_type: "villa",
          listing_type: "sale",
          bedrooms: 4,
          bathrooms: 3,
          area_sqm: 320,
          location: "East Legon, Accra",
          address: "East Legon Hills, Accra",
          images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
          ],
          features: ["Swimming Pool", "Garden", "Garage", "Security", "Generator", "Air Conditioning"],
          status: "available",
          created_at: new Date().toISOString(),
        },
        {
          id: "2",
          title: "Modern Apartment in Airport Residential",
          description: "Contemporary 2-bedroom apartment with city views, fully furnished, and located in a secure gated community with 24/7 security.",
          price: 2500,
          property_type: "apartment",
          listing_type: "rent",
          bedrooms: 2,
          bathrooms: 2,
          area_sqm: 120,
          location: "Airport Residential, Accra",
          address: "Airport Residential Area, Accra",
          images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
          ],
          features: ["Furnished", "City View", "24/7 Security", "Gym", "Swimming Pool", "Parking"],
          status: "available",
          created_at: new Date().toISOString(),
        },
        {
          id: "3",
          title: "Family House in Tema",
          description: "Spacious 3-bedroom family house with large backyard, perfect for families. Located in a quiet residential area with easy access to schools and shopping centers.",
          price: 450000,
          property_type: "house",
          listing_type: "sale",
          bedrooms: 3,
          bathrooms: 2,
          area_sqm: 200,
          location: "Tema, Greater Accra",
          address: "Tema Community 1, Tema",
          images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"
          ],
          features: ["Backyard", "Security", "Parking", "Garden"],
          status: "available",
          created_at: new Date().toISOString(),
        },
        {
          id: "4",
          title: "Commercial Space in Accra Mall",
          description: "Prime commercial space in Accra Mall, perfect for retail or office use. High foot traffic location with modern amenities.",
          price: 12000,
          property_type: "commercial",
          listing_type: "rent",
          area_sqm: 150,
          location: "Accra Mall, Accra",
          address: "Accra Mall, Spintex Road, Accra",
          images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
          ],
          features: ["High Foot Traffic", "Modern Amenities", "Security", "Parking"],
          status: "available",
          created_at: new Date().toISOString(),
        },
      ]

      setProperties(mockProperties)
    } catch (error) {
      console.error("Error fetching properties:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterProperties = () => {
    let filtered = properties

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Property type filter
    if (propertyType !== "all") {
      filtered = filtered.filter(property => property.property_type === propertyType)
    }

    // Listing type filter
    if (listingType !== "all") {
      filtered = filtered.filter(property => property.listing_type === listingType)
    }

    // Price range filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      filtered = filtered.filter(property => {
        if (max) {
          return property.price >= min && property.price <= max
        } else {
          return property.price >= min
        }
      })
    }

    setFilteredProperties(filtered)
  }

  const formatPrice = (price: number) => {
    return `GH₵ ${price.toLocaleString()}`
  }

  const handleInquiry = (property: Property) => {
    // In a real app, this would open a contact form or modal
    alert(`Inquiry for ${property.title}\nContact us at: info@jtrealestate.com\nPhone: +233244196865`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600">Loading properties...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-red-600">JT</span> Real Estate
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {profile?.full_name || "User"}
              </span>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            <a href="/properties" className="text-red-600 font-medium">Properties</a>
            <a href="/about" className="text-gray-600 hover:text-red-600">About Us</a>
            <a href="/services" className="text-gray-600 hover:text-red-600">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-red-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search properties, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
            <Select value={listingType} onValueChange={setListingType}>
              <SelectTrigger>
                <SelectValue placeholder="Listing Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="sale">For Sale</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-1000">Under GH₵ 1,000</SelectItem>
                <SelectItem value="1000-5000">GH₵ 1,000 - 5,000</SelectItem>
                <SelectItem value="5000-50000">GH₵ 5,000 - 50,000</SelectItem>
                <SelectItem value="50000-500000">GH₵ 50,000 - 500,000</SelectItem>
                <SelectItem value="500000-">Over GH₵ 500,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Available Properties ({filteredProperties.length})
          </h2>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-600">No properties found matching your criteria.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2">
                    {property.listing_type === "sale" ? "For Sale" : "For Rent"}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 left-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{property.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-red-600">
                      {formatPrice(property.price)}
                    </span>
                    <Badge variant="secondary" className="capitalize">
                      {property.property_type}
                    </Badge>
                  </div>
                  
                  {property.bedrooms && property.bathrooms && (
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        {property.bedrooms} beds
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        {property.bathrooms} baths
                      </div>
                      {property.area_sqm && (
                        <div className="flex items-center">
                          <Square className="h-4 w-4 mr-1" />
                          {property.area_sqm} m²
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {property.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1"
                      onClick={() => handleInquiry(property)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.location.href = `/properties/${property.id}`}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 