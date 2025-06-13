"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, MapPin, User, Video } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Aula: Introdução ao React",
    type: "aula",
    date: new Date(2024, 5, 15, 19, 0),
    duration: "2h",
    instructor: "Ana Silva",
    course: "Desenvolvimento Web Completo",
    location: "Online - Zoom",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Workshop: Design System",
    type: "workshop",
    date: new Date(2024, 5, 18, 20, 0),
    duration: "3h",
    instructor: "Mariana Costa",
    course: "Design UX/UI Fundamentals",
    location: "Online - Google Meet",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Entrega: Projeto Final",
    type: "entrega",
    date: new Date(2024, 5, 20, 23, 59),
    duration: "-",
    instructor: "Ana Silva",
    course: "Desenvolvimento Web Completo",
    location: "Plataforma",
    status: "pending",
  },
  {
    id: 4,
    title: "Prova: JavaScript Avançado",
    type: "prova",
    date: new Date(2024, 5, 22, 14, 0),
    duration: "1h 30min",
    instructor: "Carlos Mendes",
    course: "JavaScript Avançado",
    location: "Online - Plataforma",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Mentoria Individual",
    type: "mentoria",
    date: new Date(2024, 5, 25, 16, 0),
    duration: "45min",
    instructor: "Ana Silva",
    course: "Desenvolvimento Web Completo",
    location: "Online - Google Meet",
    status: "scheduled",
  },
]

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "aula":
      return "bg-blue-500"
    case "workshop":
      return "bg-purple-500"
    case "entrega":
      return "bg-orange-500"
    case "prova":
      return "bg-red-500"
    case "mentoria":
      return "bg-green-500"
    default:
      return "bg-gray-500"
  }
}

const getEventTypeLabel = (type: string) => {
  switch (type) {
    case "aula":
      return "Aula"
    case "workshop":
      return "Workshop"
    case "entrega":
      return "Entrega"
    case "prova":
      return "Prova"
    case "mentoria":
      return "Mentoria"
    default:
      return "Evento"
  }
}

export default function CalendarioPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filteredEvents = events.filter((event) => {
    if (selectedFilter === "all") return true
    return event.type === selectedFilter
  })

  const todayEvents = events.filter((event) => {
    const today = new Date()
    return (
      event.date.getDate() === today.getDate() &&
      event.date.getMonth() === today.getMonth() &&
      event.date.getFullYear() === today.getFullYear()
    )
  })

  const upcomingEvents = events
    .filter((event) => event.date > new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5)

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Calendário</h1>
        <p className="text-muted-foreground">
          Gerencie sua agenda de aulas, workshops, entregas e outros eventos acadêmicos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Calendário</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                modifiers={{
                  hasEvent: events.map((event) => event.date),
                }}
                modifiersStyles={{
                  hasEvent: {
                    backgroundColor: "#8257e5",
                    color: "white",
                    borderRadius: "50%",
                  },
                }}
              />
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Eventos de Hoje</CardTitle>
            </CardHeader>
            <CardContent>
              {todayEvents.length > 0 ? (
                <div className="space-y-3">
                  {todayEvents.map((event) => (
                    <div key={event.id} className="flex items-start space-x-3">
                      <div className={`w-3 h-3 rounded-full mt-1 ${getEventTypeColor(event.type)}`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{event.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {event.date.toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Nenhum evento hoje</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="agenda" className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="agenda">Agenda</TabsTrigger>
                <TabsTrigger value="upcoming">Próximos</TabsTrigger>
              </TabsList>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  <SelectItem value="aula">Aulas</SelectItem>
                  <SelectItem value="workshop">Workshops</SelectItem>
                  <SelectItem value="entrega">Entregas</SelectItem>
                  <SelectItem value="prova">Provas</SelectItem>
                  <SelectItem value="mentoria">Mentorias</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="agenda" className="space-y-4">
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getEventTypeColor(event.type)} text-white`} variant="secondary">
                              {getEventTypeLabel(event.type)}
                            </Badge>
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                          </div>
                          <CardDescription>{event.course}</CardDescription>
                        </div>
                        <Badge
                          variant={event.status === "upcoming" ? "default" : "secondary"}
                          className={
                            event.status === "upcoming"
                              ? "bg-rocketseat-green text-white"
                              : event.status === "pending"
                                ? "bg-orange-500 text-white"
                                : ""
                          }
                        >
                          {event.status === "upcoming"
                            ? "Próximo"
                            : event.status === "pending"
                              ? "Pendente"
                              : "Agendado"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="h-4 w-4 text-rocketseat-purple" />
                          <span>
                            {event.date.toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-rocketseat-purple" />
                          <span>
                            {event.date.toLocaleTimeString("pt-BR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}{" "}
                            ({event.duration})
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-rocketseat-purple" />
                          <span>{event.instructor}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {event.location.includes("Online") ? (
                            <Video className="h-4 w-4 text-rocketseat-purple" />
                          ) : (
                            <MapPin className="h-4 w-4 text-rocketseat-purple" />
                          )}
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        {event.type === "aula" || event.type === "workshop" ? (
                          <Button size="sm" className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                            <Video className="mr-2 h-4 w-4" />
                            Entrar na Aula
                          </Button>
                        ) : event.type === "entrega" ? (
                          <Button size="sm" variant="outline">
                            <CalendarDays className="mr-2 h-4 w-4" />
                            Ver Detalhes
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline">
                            <Clock className="mr-2 h-4 w-4" />
                            Lembrete
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-4">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-4 h-4 rounded-full ${getEventTypeColor(event.type)}`}></div>
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.course}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {event.date.toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "short",
                            })}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {event.date.toLocaleTimeString("pt-BR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
