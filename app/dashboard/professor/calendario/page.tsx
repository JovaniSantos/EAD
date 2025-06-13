"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CalendarIcon,
  Plus,
  Clock,
  Users,
  Video,
  BookOpen,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Bell,
} from "lucide-react"

export default function CalendarioPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const eventos = [
    {
      id: 1,
      titulo: "Aula ao Vivo - React Hooks",
      curso: "React do Zero ao Avançado",
      data: "2024-02-05",
      hora: "19:00",
      duracao: "2h",
      tipo: "live",
      participantes: 234,
      status: "confirmado",
    },
    {
      id: 2,
      titulo: "Mentoria Individual - João Silva",
      curso: "Next.js na Prática",
      data: "2024-02-06",
      hora: "14:30",
      duracao: "1h",
      tipo: "mentoria",
      participantes: 1,
      status: "confirmado",
    },
    {
      id: 3,
      titulo: "Workshop - TypeScript Avançado",
      curso: "TypeScript na Prática",
      data: "2024-02-07",
      hora: "20:00",
      duracao: "3h",
      tipo: "workshop",
      participantes: 89,
      status: "pendente",
    },
    {
      id: 4,
      titulo: "Revisão de Projeto - E-commerce",
      curso: "Next.js na Prática",
      data: "2024-02-08",
      hora: "16:00",
      duracao: "1h30",
      tipo: "revisao",
      participantes: 12,
      status: "confirmado",
    },
    {
      id: 5,
      titulo: "Aula ao Vivo - Context API",
      curso: "React do Zero ao Avançado",
      data: "2024-02-09",
      hora: "19:00",
      duracao: "2h",
      tipo: "live",
      participantes: 234,
      status: "rascunho",
    },
  ]

  const proximosEventos = eventos.filter((evento) => new Date(evento.data) >= new Date()).slice(0, 3)

  const eventosHoje = eventos.filter((evento) => evento.data === new Date().toISOString().split("T")[0])

  const estatisticas = [
    {
      titulo: "Eventos este Mês",
      valor: "24",
      mudanca: "+6 vs mês anterior",
      icone: CalendarIcon,
      cor: "text-purple-600",
    },
    {
      titulo: "Horas de Aula",
      valor: "48h",
      mudanca: "+12h este mês",
      icone: Clock,
      cor: "text-blue-600",
    },
    {
      titulo: "Participantes Totais",
      valor: "1.2K",
      mudanca: "+15% vs mês anterior",
      icone: Users,
      cor: "text-green-600",
    },
    {
      titulo: "Taxa de Presença",
      valor: "87%",
      mudanca: "+3% vs mês anterior",
      icone: Video,
      cor: "text-orange-600",
    },
  ]

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "live":
        return "bg-red-100 text-red-800"
      case "mentoria":
        return "bg-blue-100 text-blue-800"
      case "workshop":
        return "bg-purple-100 text-purple-800"
      case "revisao":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado":
        return "bg-green-100 text-green-800"
      case "pendente":
        return "bg-yellow-100 text-yellow-800"
      case "rascunho":
        return "bg-gray-100 text-gray-800"
      case "cancelado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "live":
        return Video
      case "mentoria":
        return Users
      case "workshop":
        return BookOpen
      case "revisao":
        return AlertCircle
      default:
        return CalendarIcon
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Calendário</h1>
          <p className="text-gray-300">Gerencie suas aulas, mentorias e eventos</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Novo Evento
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {estatisticas.map((stat, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">{stat.titulo}</p>
                  <p className="text-2xl font-bold text-white">{stat.valor}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.mudanca}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-700 ${stat.cor}`}>
                  <stat.icone className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Calendário de Eventos</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-medium text-white">
                    {currentDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
                  </span>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Simplified Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((dia) => (
                  <div key={dia} className="text-center text-sm font-medium text-gray-400 py-2">
                    {dia}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 2 // Adjust for month start
                  const isToday = day === new Date().getDate()
                  const hasEvent = day > 0 && day <= 28 && [5, 6, 7, 8, 9].includes(day)

                  return (
                    <div
                      key={i}
                      className={`
                        aspect-square flex items-center justify-center text-sm cursor-pointer rounded-lg
                        ${day <= 0 || day > 28 ? "text-gray-300" : "text-white hover:bg-gray-750"}
                        ${isToday ? "bg-purple-600 text-white hover:bg-purple-700" : ""}
                        ${hasEvent ? "bg-purple-50 border border-purple-200" : ""}
                      `}
                    >
                      {day > 0 && day <= 28 ? day : ""}
                      {hasEvent && <div className="absolute mt-6 w-1 h-1 bg-purple-600 rounded-full"></div>}
                    </div>
                  )
                })}
              </div>

              {/* Events List */}
              <div className="space-y-3">
                <h3 className="font-semibold text-white">Próximos Eventos</h3>
                {eventos.slice(0, 4).map((evento) => {
                  const TipoIcon = getTipoIcon(evento.tipo)
                  return (
                    <div
                      key={evento.id}
                      className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors"
                    >
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <TipoIcon className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-white">{evento.titulo}</h4>
                          <Badge className={getTipoColor(evento.tipo)}>{evento.tipo}</Badge>
                          <Badge className={getStatusColor(evento.status)}>{evento.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-300">{evento.curso}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                          <span>{new Date(evento.data).toLocaleDateString("pt-BR")}</span>
                          <span>{evento.hora}</span>
                          <span>{evento.duracao}</span>
                          <span>{evento.participantes} participantes</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Video className="w-4 h-4 mr-1" />
                        Entrar
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's Events */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-white">Eventos de Hoje</CardTitle>
              <CardDescription className="text-gray-300">
                {new Date().toLocaleDateString("pt-BR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {eventosHoje.length > 0 ? (
                <div className="space-y-3">
                  {eventosHoje.map((evento) => (
                    <div key={evento.id} className="border-l-4 border-purple-500 pl-3 py-2">
                      <h4 className="font-medium text-white">{evento.titulo}</h4>
                      <p className="text-sm text-gray-300">{evento.curso}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {evento.hora} - {evento.duracao}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 text-center py-4">Nenhum evento agendado para hoje</p>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-white">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Video className="w-4 h-4 mr-2" />
                Agendar Aula ao Vivo
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Marcar Mentoria
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                Criar Workshop
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Configurar Lembretes
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-white">Próximos Eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {proximosEventos.map((evento) => (
                  <div key={evento.id} className="text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-white">{evento.titulo}</span>
                      <Badge className={getTipoColor(evento.tipo)} size="sm">
                        {evento.tipo}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-xs">{evento.curso}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                      <CalendarIcon className="w-3 h-3" />
                      {new Date(evento.data).toLocaleDateString("pt-BR")} às {evento.hora}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
