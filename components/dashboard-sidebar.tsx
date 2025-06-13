"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  BarChart3,
  BookOpen,
  Calendar,
  Award,
  MessageSquare,
  Brain,
  TrendingUp,
  Star,
  Settings,
  User,
  Accessibility,
  Home,
  LogOut,
  Menu,
  Users,
  Video,
  FileText,
  PlusCircle,
  BarChart,
  UserCheck,
  Shield,
  GraduationCap,
  Clock,
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  userRole?: "aluno" | "professor" | "admin"
}

const studentNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/aluno",
    icon: BarChart3,
  },
  {
    title: "Meus Cursos",
    href: "/dashboard/aluno/cursos",
    icon: BookOpen,
  },
  {
    title: "Aulas ao Vivo",
    href: "/dashboard/aluno/aulas-ao-vivo",
    icon: Video,
  },
  {
    title: "Calendário",
    href: "/dashboard/aluno/calendario",
    icon: Calendar,
  },
  {
    title: "Certificados",
    href: "/dashboard/aluno/certificados",
    icon: Award,
  },
  {
    title: "Fórum",
    href: "/forum",
    icon: MessageSquare,
  },
  {
    title: "Quizzes",
    href: "/quiz",
    icon: Brain,
  },
  {
    title: "Análise de Aprendizagem",
    href: "/dashboard/aluno/analytics",
    icon: TrendingUp,
  },
  {
    title: "Conquistas",
    href: "/dashboard/aluno/achievements",
    icon: Star,
  },
  {
    title: "Recomendações",
    href: "/dashboard/aluno/recommendations",
    icon: GraduationCap,
  },
]

const teacherNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/professor",
    icon: BarChart3,
  },
  {
    title: "Meus Cursos",
    href: "/dashboard/professor/cursos",
    icon: BookOpen,
  },
  {
    title: "Criar Curso",
    href: "/dashboard/professor/criar-curso",
    icon: PlusCircle,
  },
  {
    title: "Aulas ao Vivo",
    href: "/dashboard/professor/aulas-ao-vivo",
    icon: Video,
  },
  {
    title: "Meus Alunos",
    href: "/dashboard/professor/alunos",
    icon: Users,
  },
  {
    title: "Avaliações",
    href: "/dashboard/professor/avaliacoes",
    icon: FileText,
  },
  {
    title: "Relatórios",
    href: "/dashboard/professor/relatorios",
    icon: BarChart,
  },
  {
    title: "Calendário",
    href: "/dashboard/professor/calendario",
    icon: Calendar,
  },
  {
    title: "Fórum",
    href: "/forum",
    icon: MessageSquare,
  },
  {
    title: "Horários",
    href: "/dashboard/professor/horarios",
    icon: Clock,
  },
]

const adminNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: BarChart3,
  },
  {
    title: "Gestão de Usuários",
    href: "/dashboard/admin/usuarios",
    icon: Users,
  },
  {
    title: "Gestão de Cursos",
    href: "/dashboard/admin/cursos",
    icon: BookOpen,
  },
  {
    title: "Gestão de Professores",
    href: "/dashboard/admin/professores",
    icon: UserCheck,
  },
  {
    title: "Relatórios Gerais",
    href: "/dashboard/admin/relatorios",
    icon: BarChart,
  },
  {
    title: "Configurações do Sistema",
    href: "/dashboard/admin/configuracoes",
    icon: Settings,
  },
  {
    title: "Segurança",
    href: "/dashboard/admin/seguranca",
    icon: Shield,
  },
  {
    title: "Fórum (Moderação)",
    href: "/forum",
    icon: MessageSquare,
  },
  {
    title: "Logs do Sistema",
    href: "/dashboard/admin/logs",
    icon: FileText,
  },
]

const getConfigItems = (userRole: string) => [
  {
    title: "Perfil",
    href: "/perfil",
    icon: User,
  },
  {
    title: "Acessibilidade",
    href: "/accessibility",
    icon: Accessibility,
  },
  {
    title: "Página Inicial",
    href: "/",
    icon: Home,
  },
  {
    title: "Sair",
    href: "/login",
    icon: LogOut,
  },
]

export function DashboardSidebar({ className, userRole = "aluno", ...props }: SidebarProps) {
  const pathname = usePathname()

  const getNavItems = () => {
    switch (userRole) {
      case "professor":
        return teacherNavItems
      case "admin":
        return adminNavItems
      default:
        return studentNavItems
    }
  }

  const getRoleTitle = () => {
    switch (userRole) {
      case "professor":
        return "Painel do Professor"
      case "admin":
        return "Painel do Administrador"
      default:
        return "Painel do Aluno"
    }
  }

  const getUserCredentials = () => {
    switch (userRole) {
      case "professor":
        return {
          name: "Prof. João Silva",
          email: "joao.silva@eduplatform.com",
          role: "Professor de Desenvolvimento Web",
          avatar: "JS",
        }
      case "admin":
        return {
          name: "Maria Santos",
          email: "maria.santos@eduplatform.com",
          role: "Administradora do Sistema",
          avatar: "MS",
        }
      default:
        return {
          name: "Ana Costa",
          email: "ana.costa@email.com",
          role: "Estudante de Tecnologia",
          avatar: "AC",
        }
    }
  }

  const navItems = getNavItems()
  const configItems = getConfigItems(userRole)
  const userCredentials = getUserCredentials()

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* User Profile Section */}
      <div className="flex flex-col gap-2 p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rocketseat-purple text-white font-semibold">
            {userCredentials.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{userCredentials.name}</p>
            <p className="text-xs text-muted-foreground truncate">{userCredentials.role}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground truncate">{userCredentials.email}</p>
      </div>

      {/* Navigation Section */}
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <span className="text-lg font-semibold">{getRoleTitle()}</span>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-4 lg:p-6">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-rocketseat-purple/10",
                  pathname === item.href &&
                    "bg-rocketseat-purple text-white hover:bg-rocketseat-purple hover:text-white",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="border-t pt-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">Configurações</p>
              <nav className="grid gap-1">
                {configItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-rocketseat-purple/10",
                      pathname === item.href &&
                        "bg-rocketseat-purple text-white hover:bg-rocketseat-purple hover:text-white",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={cn("hidden border-r bg-muted/40 md:block", className)} {...props}>
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
