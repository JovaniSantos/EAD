"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, LogOut, Settings, User } from "lucide-react"
import Link from "next/link"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  // Determinar o tipo de usuário baseado na URL
  const getUserRole = (): "aluno" | "professor" | "admin" => {
    if (pathname.includes("/admin")) return "admin"
    if (pathname.includes("/professor")) return "professor"
    return "aluno"
  }

  const userRole = getUserRole()

  const getUserCredentials = () => {
    switch (userRole) {
      case "professor":
        return {
          name: "Prof. João Silva",
          email: "joao.professor@eduplatform.com",
          role: "Professor de Desenvolvimento Web",
          avatar: "JS",
          notifications: "5",
        }
      case "admin":
        return {
          name: "Maria Santos",
          email: "maria.admin@eduplatform.com",
          role: "Administradora do Sistema",
          avatar: "MS",
          notifications: "12",
        }
      default:
        return {
          name: "Ana Costa",
          email: "ana.costa@email.com",
          role: "Estudante de Tecnologia",
          avatar: "AC",
          notifications: "3",
        }
    }
  }

  const userCredentials = getUserCredentials()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2 md:hidden">
          <DashboardSidebar userRole={userRole} />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EduPlatform</span>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EduPlatform</span>
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rocketseat-purple text-xs text-white">
              {userCredentials.notifications}
            </span>
          </Button>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                  <AvatarFallback className="bg-rocketseat-purple text-white">{userCredentials.avatar}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{userCredentials.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/perfil">
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r md:block">
          <DashboardSidebar userRole={userRole} />
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
