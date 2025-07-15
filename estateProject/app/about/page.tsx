"use client"

import { useAuth } from "../../src/components/auth-provider"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { MapPin, Phone, Mail, Award, Users, Home, Shield } from "lucide-react"

export default function AboutPage() {
  const { profile, signOut } = useAuth()

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
            <a href="/about" className="text-red-600 font-medium">About Us</a>
            <a href="/services" className="text-gray-600 hover:text-red-600">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-red-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About JT Real Estate Agency</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Your trusted partner in finding the perfect property in Tema and Greater Accra Region. 
              We specialize in residential and commercial real estate with over 10 years of experience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2014, JT Real Estate Agency has been serving the Greater Accra Region with 
              integrity, professionalism, and dedication. We understand that finding the right property 
              is one of life's most important decisions.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of experienced real estate professionals is committed to providing personalized 
              service, expert guidance, and transparent transactions. We take pride in helping families 
              find their dream homes and investors discover profitable opportunities.
            </p>
            <p className="text-gray-600">
              With deep local knowledge and a network of trusted partners, we offer comprehensive 
              real estate services including buying, selling, renting, and property management.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <span className="text-gray-500">Company Image</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="text-center py-6">
              <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-6">
              <Home className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-gray-600">Properties Sold</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-6">
              <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-6">
              <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Trusted Service</div>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="text-center py-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Tey</h3>
                <p className="text-red-600 mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 10 years of experience in real estate, John leads our team with 
                  passion and expertise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Addo</h3>
                <p className="text-red-600 mb-2">Senior Agent</p>
                <p className="text-gray-600 text-sm">
                  Specializing in residential properties with a focus on family homes and luxury villas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center py-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Osei</h3>
                <p className="text-red-600 mb-2">Commercial Specialist</p>
                <p className="text-gray-600 text-sm">
                  Expert in commercial real estate, helping businesses find the perfect location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We conduct business with honesty, transparency, and ethical practices. 
                  Your trust is our most valuable asset.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We strive for excellence in every transaction, providing the highest 
                  level of service and attention to detail.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Client Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Your needs come first. We listen, understand, and work tirelessly to 
                  find the perfect solution for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 