"use client"

import { useAuth } from "../../src/components/auth-provider"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Home, Building, Key, Calculator, Shield, Users, MapPin, Phone } from "lucide-react"

export default function ServicesPage() {
  const { profile, signOut } = useAuth()

  const services = [
    {
      icon: Home,
      title: "Residential Sales",
      description: "Find your dream home with our comprehensive residential property services. From apartments to luxury villas.",
      features: ["Property search", "Viewing arrangements", "Negotiation support", "Legal guidance"]
    },
    {
      icon: Building,
      title: "Commercial Real Estate",
      description: "Expert commercial property solutions for businesses, investors, and developers.",
      features: ["Office spaces", "Retail properties", "Industrial facilities", "Investment opportunities"]
    },
    {
      icon: Key,
      title: "Property Rentals",
      description: "Short-term and long-term rental solutions for individuals and businesses.",
      features: ["Residential rentals", "Commercial leases", "Furnished options", "Flexible terms"]
    },
    {
      icon: Calculator,
      title: "Property Valuation",
      description: "Accurate property valuations for sales, purchases, and investment decisions.",
      features: ["Market analysis", "Comparative pricing", "Investment potential", "Detailed reports"]
    },
    {
      icon: Shield,
      title: "Property Management",
      description: "Comprehensive property management services for landlords and investors.",
      features: ["Tenant screening", "Rent collection", "Maintenance coordination", "Financial reporting"]
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Expert real estate consultation for buyers, sellers, and investors.",
      features: ["Market insights", "Investment advice", "Legal guidance", "Negotiation support"]
    }
  ]

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
            <a href="/properties" className="text-gray-600 hover:text-red-600">Properties</a>
            <a href="/about" className="text-gray-600 hover:text-red-600">About Us</a>
            <a href="/services" className="text-red-600 font-medium">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-red-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs. From buying and selling 
              to property management and consultation, we're here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose JT Real Estate?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine local expertise with professional service to deliver exceptional results 
              for all your real estate needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of the Greater Accra Region market and neighborhoods.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Service</h3>
              <p className="text-gray-600">
                Over 10 years of experience with hundreds of satisfied clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Support</h3>
              <p className="text-gray-600">
                Dedicated support throughout your entire real estate journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your real estate needs and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="h-4 w-4 mr-2" />
              Call Us Now
            </Button>
            <Button variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
              <MapPin className="h-4 w-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 