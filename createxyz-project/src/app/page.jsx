"use client";
import React from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [showConsultationModal, setShowConsultationModal] =
    React.useState(false);
  const [consultationForm, setConsultationForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const properties = [
    {
      id: 1,
      title: "Luxury Villa in East Legon",
      price: "GH₵ 850,000",
      type: "For Sale",
      bedrooms: 4,
      bathrooms: 3,
      area: "320 sqm",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
      location: "East Legon, Accra",
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "GH₵ 2,500/month",
      type: "For Rent",
      bedrooms: 2,
      bathrooms: 2,
      area: "120 sqm",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      location: "Airport Residential, Accra",
    },
    {
      id: 3,
      title: "Executive Townhouse",
      price: "GH₵ 450,000",
      type: "For Sale",
      bedrooms: 3,
      bathrooms: 2,
      area: "200 sqm",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      location: "Tema, Greater Accra",
    },
  ];

  const services = [
    {
      title: "Property Viewing",
      description:
        "Professional property tours with a one-time registration fee of GH₵ 100. Visit multiple properties at no extra cost.",
      icon: "fas fa-home",
    },
    {
      title: "Sales Commission",
      description:
        "We charge a competitive 5% commission on successful property purchases.",
      icon: "fas fa-handshake",
    },
    {
      title: "Rental Services",
      description:
        "One month's rent as commission for successful rental agreements.",
      icon: "fas fa-key",
    },
    {
      title: "Property Management",
      description:
        "Complete property management services for landlords and investors.",
      icon: "fas fa-building",
    },
  ];

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Consultation request:", consultationForm);
    alert(
      "Thank you! Your consultation request has been submitted. We will contact you within 24 hours."
    );
    setShowConsultationModal(false);
    setConsultationForm({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      propertyType: "",
      budget: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsultationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">
                <span className="text-red-600">JT</span> Real Estate Agency
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "Properties", "Services", "About", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setActiveSection(item.toLowerCase())}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === item.toLowerCase()
                          ? "bg-red-600 text-white"
                          : "text-gray-300 hover:bg-red-600 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-gray-300 hover:text-white"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "Properties", "Services", "About", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setShowMobileMenu(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                      activeSection === item.toLowerCase()
                        ? "bg-red-600 text-white"
                        : "text-gray-300 hover:bg-red-600 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <div className="pt-16">
          <div
            className="relative h-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop')",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Find Your <span className="text-red-600">Dream Home</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Professional real estate services in Tema and Greater Accra
                  Region
                </p>
                <div className="space-x-4">
                  <button
                    onClick={() => setActiveSection("properties")}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                  >
                    View Properties
                  </button>
                  <button
                    onClick={() => setActiveSection("contact")}
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="text-white">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    500+
                  </div>
                  <div className="text-lg">Properties Sold</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    1000+
                  </div>
                  <div className="text-lg">Happy Clients</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    15+
                  </div>
                  <div className="text-lg">Years Experience</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    24/7
                  </div>
                  <div className="text-lg">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Properties Section */}
      {activeSection === "properties" && (
        <div className="pt-24 pb-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">
                Featured Properties
              </h2>
              <p className="text-xl text-gray-600">
                Discover our premium property listings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-black">
                        {property.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          property.type === "For Sale"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {property.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{property.location}</p>
                    <div className="text-2xl font-bold text-red-600 mb-4">
                      {property.price}
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>
                        <i className="fas fa-bed mr-1"></i>
                        {property.bedrooms} Beds
                      </span>
                      <span>
                        <i className="fas fa-bath mr-1"></i>
                        {property.bathrooms} Baths
                      </span>
                      <span>
                        <i className="fas fa-ruler-combined mr-1"></i>
                        {property.area}
                      </span>
                    </div>
                    <button className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      {activeSection === "services" && (
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Professional real estate services tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl text-red-600 mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="mt-16 bg-black rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Our Transparent Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    GH₵ 100
                  </div>
                  <div className="text-lg">Registration Fee</div>
                  <div className="text-sm text-gray-300 mt-2">
                    One-time fee for property viewing access
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5%</div>
                  <div className="text-lg">Sales Commission</div>
                  <div className="text-sm text-gray-300 mt-2">
                    Commission on successful property purchases
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    1 Month
                  </div>
                  <div className="text-lg">Rental Commission</div>
                  <div className="text-sm text-gray-300 mt-2">
                    One month's rent for successful rentals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <div className="pt-24 pb-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">
                  About JT Real Estate Agency
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Based in Tema, JT Real Estate Agency has been serving the
                  Greater Accra Region for over 15 years. We specialize in
                  connecting clients with their perfect properties, whether for
                  purchase or rental.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our experienced team understands the local market dynamics and
                  provides personalized service to ensure every client finds
                  exactly what they're looking for.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-red-600 mr-3"></i>
                    <span>
                      Licensed and certified real estate professionals
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-red-600 mr-3"></i>
                    <span>
                      Extensive property database across Greater Accra
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-red-600 mr-3"></i>
                    <span>Transparent pricing with no hidden fees</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-red-600 mr-3"></i>
                    <span>24/7 customer support and after-sales service</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                  alt="JT Real Estate Office"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600">
                Get in touch with our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Tell us about your property needs..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-black text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt text-red-600 mr-4 text-xl"></i>
                      <div>
                        <div className="font-semibold">Main Office</div>
                        <div className="text-gray-300">
                          Tema, Greater Accra Region, Ghana
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-phone text-red-600 mr-4 text-xl"></i>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-gray-300">+233 XX XXX XXXX</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-red-600 mr-4 text-xl"></i>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-gray-300">
                          info@jtrealestate.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-clock text-red-600 mr-4 text-xl"></i>
                      <div>
                        <div className="font-semibold">Business Hours</div>
                        <div className="text-gray-300">
                          Mon - Sat: 8:00 AM - 6:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-600 text-white p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-4">
                    Schedule a consultation with our expert team today. We're
                    here to help you find the perfect property or sell your
                    current one.
                  </p>
                  <button
                    onClick={() => setShowConsultationModal(true)}
                    className="bg-white text-red-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-black">
                  Schedule Consultation
                </h3>
                <button
                  onClick={() => setShowConsultationModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={consultationForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={consultationForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={consultationForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={consultationForm.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="villa">Villa</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={consultationForm.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={consultationForm.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={consultationForm.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under GH₵ 100,000">Under GH₵ 100,000</option>
                    <option value="GH₵ 100,000 - GH₵ 300,000">
                      GH₵ 100,000 - GH₵ 300,000
                    </option>
                    <option value="GH₵ 300,000 - GH₵ 500,000">
                      GH₵ 300,000 - GH₵ 500,000
                    </option>
                    <option value="GH₵ 500,000 - GH₵ 1,000,000">
                      GH₵ 500,000 - GH₵ 1,000,000
                    </option>
                    <option value="Over GH₵ 1,000,000">
                      Over GH₵ 1,000,000
                    </option>
                    <option value="Rental (Monthly)">Rental (Monthly)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={consultationForm.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions..."
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowConsultationModal(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-red-600">JT</span> Real Estate Agency
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted partner in finding the perfect property in Ghana.
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-facebook text-xl hover:text-red-600 cursor-pointer transition-colors"></i>
                <i className="fab fa-twitter text-xl hover:text-red-600 cursor-pointer transition-colors"></i>
                <i className="fab fa-instagram text-xl hover:text-red-600 cursor-pointer transition-colors"></i>
                <i className="fab fa-linkedin text-xl hover:text-red-600 cursor-pointer transition-colors"></i>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button
                    onClick={() => setActiveSection("home")}
                    className="hover:text-red-600 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("properties")}
                    className="hover:text-red-600 transition-colors"
                  >
                    Properties
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("services")}
                    className="hover:text-red-600 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("about")}
                    className="hover:text-red-600 transition-colors"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Property Sales</li>
                <li>Property Rentals</li>
                <li>Property Management</li>
                <li>Investment Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div>Tema, Greater Accra Region</div>
                <div>+233 XX XXX XXXX</div>
                <div>info@jtrealestate.com</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 JT Real Estate Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;