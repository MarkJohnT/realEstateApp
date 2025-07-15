"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

// Mock user and profile types for demo
interface MockUser {
  id: string
  email: string
}

interface MockProfile {
  id: string
  email: string
  full_name?: string
  phone?: string
  avatar_url?: string
  role: "client" | "agent" | "admin"
  created_at: string
  updated_at: string
}

interface AuthContextType {
  user: MockUser | null
  profile: MockProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error?: string }>
  signUp: (email: string, password: string, fullName: string, phone: string) => Promise<{ error?: string }>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<MockProfile>) => Promise<{ error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null)
  const [profile, setProfile] = useState<MockProfile | null>(null)
  const [loading, setLoading] = useState(false)

  // Check for existing session in localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("demo-user")
    const savedProfile = localStorage.getItem("demo-profile")

    if (savedUser && savedProfile) {
      setUser(JSON.parse(savedUser))
      setProfile(JSON.parse(savedProfile))
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      // Demo authentication - accept any email/password
      const mockUser: MockUser = {
        id: "demo-user-id",
        email: email,
      }

      const mockProfile: MockProfile = {
        id: "demo-user-id",
        email: email,
        full_name: email === "johntey789@gmail.com" ? "John Tey" : "Demo User",
        phone: email === "johntey789@gmail.com" ? "+233244196865" : "+233000000000",
        role: email === "johntey789@gmail.com" ? "admin" : "client",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      setUser(mockUser)
      setProfile(mockProfile)

      // Save to localStorage for persistence
      localStorage.setItem("demo-user", JSON.stringify(mockUser))
      localStorage.setItem("demo-profile", JSON.stringify(mockProfile))

      return {}
    } catch (error) {
      return { error: "An unexpected error occurred" }
    }
  }

  const signUp = async (email: string, password: string, fullName: string, phone: string) => {
    try {
      const mockUser: MockUser = {
        id: "demo-user-id-" + Date.now(),
        email: email,
      }

      const mockProfile: MockProfile = {
        id: mockUser.id,
        email: email,
        full_name: fullName,
        phone: phone,
        role: "client",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      setUser(mockUser)
      setProfile(mockProfile)

      // Save to localStorage for persistence
      localStorage.setItem("demo-user", JSON.stringify(mockUser))
      localStorage.setItem("demo-profile", JSON.stringify(mockProfile))

      return {}
    } catch (error) {
      return { error: "An unexpected error occurred" }
    }
  }

  const signOut = async () => {
    setUser(null)
    setProfile(null)
    localStorage.removeItem("demo-user")
    localStorage.removeItem("demo-profile")
  }

  const updateProfile = async (updates: Partial<MockProfile>) => {
    if (!user || !profile) return { error: "Not authenticated" }

    try {
      const updatedProfile = { ...profile, ...updates, updated_at: new Date().toISOString() }
      setProfile(updatedProfile)
      localStorage.setItem("demo-profile", JSON.stringify(updatedProfile))
      return {}
    } catch (error) {
      return { error: "Failed to update profile" }
    }
  }

  const value = {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
