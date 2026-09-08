"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"

const FURNITURE_ICON = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%208%20sept.%202026%2C%2020_13_03-PcfUL3JhVsf2aKPHjNvQPUiOXt00Lv.png"

const LoadingContext = createContext<{ setLoading: (loading: boolean) => void } | null>(null)

export function LuxuryLoadingOverlay({ visible }: { visible: boolean }) {
  return (
    <div
      className={`luxury-loading fixed inset-0 z-[100] flex items-center justify-center bg-[#1e1912] transition-opacity duration-500 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!visible}
      aria-label="Chargement en cours"
      role="status"
    >
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
        <svg className="absolute inset-0 h-full w-full animate-orbit" viewBox="0 0 240 240" fill="none" aria-hidden="true">
          <path d="M32 120a88 88 0 1 1 176 0" stroke="#b18a3c" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute inset-0 h-full w-full animate-orbit-reverse" viewBox="0 0 240 240" fill="none" aria-hidden="true">
          <path d="M208 120a88 88 0 1 1-176 0" stroke="#d7b66a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-[0_18px_55px_rgba(0,0,0,0.45)] sm:h-36 sm:w-36">
          <img src={FURNITURE_ICON} alt="ArtHome" className="h-full w-full object-cover" />
        </div>
      </div>
      <span className="sr-only">Chargement en cours</span>
    </div>
  )
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [manualLoading, setManualLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [routeLoading, setRouteLoading] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setInitialLoading(false), 650)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    setRouteLoading(true)
    const timeout = window.setTimeout(() => setRouteLoading(false), 450)
    return () => window.clearTimeout(timeout)
  }, [pathname])

  const contextValue = useMemo(() => ({ setLoading: setManualLoading }), [])
  const visible = initialLoading || routeLoading || manualLoading

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
      <LuxuryLoadingOverlay visible={visible} />
    </LoadingContext.Provider>
  )
}

export function useLuxuryLoading() {
  const context = useContext(LoadingContext)
  if (!context) throw new Error("useLuxuryLoading must be used inside LoadingProvider")
  return context
}
