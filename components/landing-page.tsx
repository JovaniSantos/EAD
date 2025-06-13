import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCourses } from "@/components/featured-courses"
import { FeaturedTeachers } from "@/components/featured-teachers"
import { UpcomingConferences } from "@/components/upcoming-conferences"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import Link from "next/link"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">EduPlatform</span>
            </a>
            <MainNav />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturedCourses />
        <FeaturedTeachers />
        <UpcomingConferences />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
