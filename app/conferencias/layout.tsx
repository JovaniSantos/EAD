import type React from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Footer } from "@/components/footer"

export default function ConferenciasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
