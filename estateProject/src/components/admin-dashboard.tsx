"use client"

import { useState, useEffect } from "react"
import { useAuth } from "./auth-provider"

export function AdminDashboard() {
  const { profile } = useAuth()
  const [activeTab, setActiveTab] = useState("properties")
  const [properties, setProperties] = useState([])
  const [consultations, setConsultations] = useState([])
  const [inquiries, setInquiries] = useState([])
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (profile?.role === "admin") {
      fetchAllData()
    }
  }, [profile])

  const fetchAllData = async () => {
    setLoading(true)
    try {
      // Mock data for demo
      const mockProperties = [
        {
          id: "1",
          title: "Luxury Villa in East Legon",
          price: 850000,
          property_type: "villa",
          listing_type: "sale",
          location: "East Legon, Accra",
          status: "available",
          created_at: new Date().toISOString(),
        },
        {
          id: "2",
          title: "Modern Apartment in Airport Residential",
          price: 2500,
          property_type: "apartment",
          listing_type: "rent",
          location: "Airport Residential, Accra",
          status: "available",
          created_at: new Date().toISOString(),
        },
      ]

      const mockConsultations = [
        {
          id: "1",
          full_name: "John Doe",
          email: "john@example.com",
          phone: "+233123456789",
          preferred_date: "2025-01-15",
          preferred_time: "10:00 AM",
          property_type: "apartment",
          budget_range: "GH₵ 100,000 - GH₵ 300,000",
          status: "pending",
          created_at: new Date().toISOString(),
        },
      ]

      const mockInquiries = [
        {
          id: "1",
          full_name: "Jane Smith",
          email: "jane@example.com",
          phone: "+233987654321",
          message: "Interested in the villa",
          status: "new",
          created_at: new Date().toISOString(),
          properties: { title: "Luxury Villa in East Legon" },
        },
      ]

      const mockContacts = [
        {
          id: "1",
          full_name: "Mike Johnson",
          email: "mike@example.com",
          phone: "+233555666777",
          message: "Looking for rental properties",
          status: "new",
          created_at: new Date().toISOString(),
        },
      ]

      setProperties(mockProperties)
      setConsultations(mockConsultations)
      setInquiries(mockInquiries)
      setContacts(mockContacts)
    } catch (error) {
      console.error("Error fetching admin data:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateConsultationStatus = async (id, status) => {
    try {
      // Mock update - in real app this would update the database
      setConsultations((prev) =>
        prev.map((consultation) => (consultation.id === id ? { ...consultation, status } : consultation)),
      )
    } catch (error) {
      console.error("Error updating consultation:", error)
    }
  }

  if (profile?.role !== "admin") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: "properties", name: "Properties", count: properties.length },
              { id: "consultations", name: "Consultations", count: consultations.length },
              { id: "inquiries", name: "Inquiries", count: inquiries.length },
              { id: "contacts", name: "Messages", count: contacts.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-600">Loading...</div>
          </div>
        ) : (
          <>
            {/* Properties Tab */}
            {activeTab === "properties" && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Properties</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Property
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Created
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {properties.map((property) => (
                        <tr key={property.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{property.title}</div>
                              <div className="text-sm text-gray-500">{property.location}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            GH₵ {property.price.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {property.property_type} - {property.listing_type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                property.status === "available"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {property.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(property.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Consultations Tab */}
            {activeTab === "consultations" && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Consultation Requests</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Preferred Date/Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {consultations.map((consultation) => (
                        <tr key={consultation.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{consultation.full_name}</div>
                              <div className="text-sm text-gray-500">
                                {consultation.property_type} - {consultation.budget_range}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{consultation.email}</div>
                            <div className="text-sm text-gray-500">{consultation.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {consultation.preferred_date} {consultation.preferred_time}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                consultation.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : consultation.status === "confirmed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {consultation.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <select
                              value={consultation.status}
                              onChange={(e) => updateConsultationStatus(consultation.id, e.target.value)}
                              className="text-sm border border-gray-300 rounded px-2 py-1"
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Similar tables for inquiries and contacts... */}
          </>
        )}
      </div>
    </div>
  )
}
