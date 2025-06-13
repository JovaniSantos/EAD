"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Video,
  Users,
  Calendar,
  Clock,
  Plus,
  Search,
  Settings,
  Play,
  Pause,
  Share2,
  MessageSquare,
  BarChart3,
  CheckCircle,
  Link,
} from "lucide-react"

export default function AulasAoVivoPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const stats = [
    {
      title: "Aulas Agendadas",
      value: "12",
      change: "próximos 30 dias",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      title: "Aulas Realizadas",
      value: "48",
      change: "últimos 30 dias",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Participantes Totais",
      value: "2,847",
      change: "+15% vs mês anterior",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Tempo de Transmissão",
      value: "96h",
      change: "últimos 30 dias",
      icon: Clock,
      color: "text-orange-600",
    },
  ]

  const aulasAgendadas = [
    {
      id: 1,
      titulo: "React Hooks Avançados",
      curso: "React do Zero ao Avançado",
      data: "2024-02-15",
      hora: "19:00",
      duracao: "2h",
      participantes: 234,
      inscritos: 312,
      status: "agendada",
    },
    {
      id: 2,
      titulo: "Context API e Redux",
      curso: "React do Zero ao Avançado",
      data: "2024-02-18",
      hora: "19:00",
      duracao: "2h",
      participantes: 198,
      inscritos: 312,
      status: "agendada",
    },
    {
      id: 3,
      titulo: "Next.js Server Components",
      curso: "Next.js na Prática",
      data: "2024-02-20",
      hora: "20:00",
      duracao: "1h30",
      participantes: 156,
      inscritos: 189,
      status: "agendada",
    },
    {
      id: 4,
      titulo: "TypeScript Generics",
      curso: "TypeScript na Prática",
      data: "2024-02-22",
      hora: "19:00",
      duracao: "2h",
      participantes: 87,
      inscritos: 98,
      status: "agendada",
    },
  ]

  const aulasRecentes = [
    {
      id: 1,
      titulo: "Introdução ao React",
      curso: "React do Zero ao Avançado",
      data: "2024-02-01",
      duracao: "2h",
      participantes: 287,
      gravacao: true,
      avaliacao: 4.8,
    },
    {
      id: 2,
      titulo: "Componentes e Props",
      curso: "React do Zero ao Avançado",
      data: "2024-02-03",
      duracao: "2h",
      participantes: 265,
      gravacao: true,
      avaliacao: 4.7,
    },
    {
      id: 3,
      titulo: "State e Lifecycle",
      curso: "React do Zero ao Avançado",
      data: "2024-02-05",
      duracao: "2h",
      participantes: 254,
      gravacao: true,
      avaliacao: 4.9,
    },
  ]

  const aulaAtiva = {
    titulo: "Formulários e Validação em React",
    curso: "React do Zero ao Avançado",
    inicio: "18:45",
    duracao: "2h",
    participantes: 198,
    mensagens: 87,
    status: "ao vivo",
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ao vivo":
        return "bg-red-100 text-red-800"
      case "agendada":
        return "bg-green-100 text-green-800"
      case "concluída":
        return "bg-blue-100 text-blue-800"
      case "cancelada":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Aulas ao Vivo</h1>
          <p className="text-gray-300">Gerencie suas transmissões e aulas ao vivo</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Nova Aula
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-700 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Aula Ativa */}
      {aulaAtiva && (
        <Card className="bg-gray-800 border-gray-700 border-2 border-red-600">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-red-600 text-white">AO VIVO AGORA</Badge>
                  <span className="text-gray-300 text-sm">
                    Iniciou às {aulaAtiva.inicio} • {aulaAtiva.participantes} participantes
                  </span>
                </div>
                <CardTitle className="text-white mt-2">{aulaAtiva.titulo}</CardTitle>
                <CardDescription className="text-gray-300">{aulaAtiva.curso}</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700">
                  <Pause className="w-4 h-4 mr-2" />
                  Pausar
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Video className="w-4 h-4 mr-2" />
                  Encerrar
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Video className="w-16 h-16 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-400">Prévia da transmissão</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">Participantes</h3>
                  <Badge className="bg-blue-600 text-white">{aulaAtiva.participantes}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Ativos</span>
                  <span className="text-white">178</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Inativos</span>
                  <span className="text-white">20</span>
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>Engajamento</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">Chat</h3>
                  <Badge className="bg-green-600 text-white">{aulaAtiva.mensagens}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Perguntas</span>
                  <span className="text-white">34</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Comentários</span>
                  <span className="text-white">53</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 border-gray-600 text-gray-300 hover:text-white"
                >
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Ver Chat
                </Button>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">Compartilhar</h3>
                  <Share2 className="w-4 h-4 text-gray-300" />
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Link className="w-4 h-4 text-gray-300" />
                  <Input
                    value="https://plataforma.com/aula/123"
                    readOnly
                    className="h-8 bg-gray-800 border-gray-600 text-gray-300"
                  />
                </div>
                <Button variant="outline" size="sm" className="w-full border-gray-600 text-gray-300 hover:text-white">
                  <Copy className="w-4 h-4 mr-1" />
                  Copiar Link
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="agendadas" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger
            value="agendadas"
            className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-700"
          >
            Aulas Agendadas
          </TabsTrigger>
          <TabsTrigger
            value="recentes"
            className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-700"
          >
            Aulas Recentes
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-700"
          >
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="agendadas" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="text-white">Próximas Aulas</CardTitle>
                  <CardDescription className="text-gray-300">Aulas agendadas para os próximos dias</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Buscar aulas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64 bg-gray-700 border-gray-600 text-gray-300 placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aulasAgendadas.map((aula) => (
                  <div
                    key={aula.id}
                    className="border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-white">{aula.titulo}</h3>
                          <Badge className={getStatusColor(aula.status)}>{aula.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{aula.curso}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(aula.data).toLocaleDateString("pt-BR")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {aula.hora} ({aula.duracao})
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {aula.inscritos} inscritos
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span>Inscritos</span>
                            <span>
                              {aula.participantes}/{aula.inscritos} (
                              {Math.round((aula.participantes / aula.inscritos) * 100)}%)
                            </span>
                          </div>
                          <Progress value={(aula.participantes / aula.inscritos) * 100} className="h-2" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700"
                        >
                          <Settings className="w-4 h-4 mr-1" />
                          Editar
                        </Button>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                          <Play className="w-4 h-4 mr-1" />
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recentes" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Aulas Recentes</CardTitle>
              <CardDescription className="text-gray-300">Aulas realizadas nos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aulasRecentes.map((aula) => (
                  <div
                    key={aula.id}
                    className="border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-white">{aula.titulo}</h3>
                          <Badge className="bg-blue-100 text-blue-800">concluída</Badge>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{aula.curso}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(aula.data).toLocaleDateString("pt-BR")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {aula.duracao}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {aula.participantes} participantes
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            {aula.avaliacao}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700"
                        >
                          <BarChart3 className="w-4 h-4 mr-1" />
                          Analytics
                        </Button>
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                          disabled={!aula.gravacao}
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Ver Gravação
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Analytics de Aulas ao Vivo</CardTitle>
              <CardDescription className="text-gray-300">Métricas e estatísticas das suas transmissões</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-4">Participação Média</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">React do Zero ao Avançado</span>
                        <span className="text-white">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Next.js na Prática</span>
                        <span className="text-white">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">TypeScript na Prática</span>
                        <span className="text-white">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Node.js Completo</span>
                        <span className="text-white">71%</span>
                      </div>
                      <Progress value={71} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-4">Horários com Maior Audiência</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">19:00 - 21:00</span>
                        <span className="text-white">245 média</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">14:00 - 16:00</span>
                        <span className="text-white">180 média</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">10:00 - 12:00</span>
                        <span className="text-white">120 média</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">21:00 - 23:00</span>
                        <span className="text-white">95 média</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <h3 className="text-white font-medium mb-4">Engajamento por Aula</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300">Participação</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">Chat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">Perguntas</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">Introdução ao React</span>
                        <span className="text-gray-300">01/02/2024</span>
                      </div>
                      <div className="flex gap-1 h-2">
                        <div className="bg-purple-500 w-3/6 rounded-l"></div>
                        <div className="bg-green-500 w-2/6"></div>
                        <div className="bg-blue-500 w-1/6 rounded-r"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">Componentes e Props</span>
                        <span className="text-gray-300">03/02/2024</span>
                      </div>
                      <div className="flex gap-1 h-2">
                        <div className="bg-purple-500 w-4/6 rounded-l"></div>
                        <div className="bg-green-500 w-1/6"></div>
                        <div className="bg-blue-500 w-1/6 rounded-r"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">State e Lifecycle</span>
                        <span className="text-gray-300">05/02/2024</span>
                      </div>
                      <div className="flex gap-1 h-2">
                        <div className="bg-purple-500 w-3/6 rounded-l"></div>
                        <div className="bg-green-500 w-2/6"></div>
                        <div className="bg-blue-500 w-1/6 rounded-r"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Copy({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c0-1.1.9-2 2-2h2" />
      <path d="M4 12c0-1.1.9-2 2-2h2" />
      <path d="M4 8c0-1.1.9-2 2-2h2" />
    </svg>
  )
}

function Star({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
