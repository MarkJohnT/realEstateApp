"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../../../src/components/auth-provider"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart, Phone, Mail, ArrowLeft, Calendar, User } from "lucide-react"

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

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const { profile, signOut } = useAuth()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    fetchProperty()
  }, [params.id])

  const fetchProperty = async () => {
    setLoading(true)
    try {
      // Mock data - in real app this would fetch from API based on params.id
      const mockProperties: Property[] = [
        {
          id: "1",
          title: "Luxury Villa in East Legon",
          description: "Stunning 4-bedroom villa with modern amenities, swimming pool, and beautiful garden. Perfect for families seeking luxury living in one of Accra's most prestigious neighborhoods. This exceptional property features high-quality finishes, spacious rooms, and a prime location with easy access to schools, shopping centers, and major roads.",
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
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"
          ],
          features: ["Swimming Pool", "Garden", "Garage", "Security", "Generator", "Air Conditioning", "Modern Kitchen", "Walk-in Closet"],
          status: "available",
          created_at: new Date().toISOString(),
        },
        {
          id: "2",
          title: "Modern Apartment in Airport Residential",
          description: "Contemporary 2-bedroom apartment with city views, fully furnished, and located in a secure gated community with 24/7 security. This modern apartment offers the perfect blend of comfort and convenience.",
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

      const foundProperty = mockProperties.find(p => p.id === params.id)
      setProperty(foundProperty || null)
    } catch (error) {
      console.error("Error fetching property:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return `GH₵ ${price.toLocaleString()}`
  }

  const handleInquiry = () => {
    alert(`Inquiry for ${property?.title}\nContact us at: info@jtrealestate.com\nPhone: +233244196865`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600">Loading property details...</div>
        </div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600">Property not found</div>
          <Button className="mt-4" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
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

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="outline" onClick={() => window.history.back()} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <Badge className="absolute top-4 right-4">
                  {property.listing_type === "sale" ? "For Sale" : "For Rent"}
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-4 left-4 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Thumbnail Images */}
              {property.images.length > 1 && (
                <div className="flex space-x-2 mt-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        currentImageIndex === index ? 'border-red-600' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">{property.title}</CardTitle>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {property.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {property.bedrooms && (
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 mr-2 text-gray-600" />
                      <span className="text-gray-600">{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 mr-2 text-gray-600" />
                      <span className="text-gray-600">{property.bathrooms} Bathrooms</span>
                    </div>
                  )}
                  {property.area_sqm && (
                    <div className="flex items-center">
                      <Square className="h-5 w-5 mr-2 text-gray-600" />
                      <span className="text-gray-600">{property.area_sqm} m²</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <Badge key={index} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {formatPrice(property.price)}
                  </div>
                  <div className="text-gray-600 mb-4">
                    {property.listing_type === "sale" ? "Sale Price" : "Monthly Rent"}
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full" onClick={handleInquiry}>
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleInquiry}>
                      <Mail className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium capitalize">{property.property_type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Listing Type</span>
                  <span className="font-medium capitalize">{property.listing_type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <Badge variant={property.status === "available" ? "default" : "secondary"}>
                    {property.status}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Listed</span>
                  <span className="font-medium">
                    {new Date(property.created_at).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Agent Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium">John Tey</div>
                    <div className="text-sm text-gray-600">Senior Agent</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-gray-600" />
                    +233 24 419 6865
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-gray-600" />
                    john@jtrealestate.com
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 