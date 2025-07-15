"use client"
import { useAuth } from "../src/components/auth-provider"
import { LoginForm } from "../src/components/login-form"
import { AdminDashboard } from "../src/components/admin-dashboard"
import { useEffect } from "react"

function Page() {
  const { user, profile } = useAuth()

  useEffect(() => {
    if (user && profile?.role !== "admin") {
      // Redirect regular users to properties page
      window.location.href = "/properties"
    }
  }, [user, profile])

  if (!user) {
    return <LoginForm onSuccess={() => window.location.reload()} />
  }

  if (profile?.role === "admin") {
    return <AdminDashboard />
  }

  // Loading state while redirecting
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-600">Redirecting to properties...</div>
      </div>
    </div>
  )
}

export default Page
