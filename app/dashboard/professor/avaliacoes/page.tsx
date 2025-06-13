"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  Plus,
  Search,
  Calendar,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Edit,
  Eye,
  Download,
} from "lucide-react"

export default function AvaliacoesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const stats = [
    {
      title: "Total de Avaliações",
      value: "47",
      change: "+3 este mês",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      title: "Média Geral",
      value: "8.2",
      change: "+0.3 vs mês anterior",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Taxa de Conclusão",
      value: "89%",
      change: "+5% este mês",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      title: "Alunos Avaliados",
      value: "2,847",
      change: "em 8 cursos",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  const avaliacoes = [
    {
      id: 1,
      titulo: "Prova Final - React Avançado",
      curso: "React do Zero ao Avançado",
      tipo: "Prova",
      dataLimite: "2024-02-15",
      participantes: 234,
      concluidos: 198,
      mediaNotas: 8.5,
      status: "Ativa",
    },
    {
      id: 2,
      titulo: "Quiz - Hooks e Context",
      curso: "React do Zero ao Avançado",
      tipo: "Quiz",
      dataLimite: "2024-02-10",
      participantes: 234,
      concluidos: 234,
      mediaNotas: 7.8,
      status: "Finalizada",
    },
    {
      id: 3,
      titulo: "Projeto Prático - E-commerce",
      curso: "Next.js na Prática",
      tipo: "Projeto",
      dataLimite: "2024-02-20",
      participantes: 189,
      concluidos: 45,
      mediaNotas: 9.1,
      status: "Ativa",
    },
    {
      id: 4,
      titulo: "Avaliação - Fundamentos",
      curso: "JavaScript Moderno",
      tipo: "Prova",
      dataLimite: "2024-02-08",
      participantes: 156,
      concluidos: 156,
      mediaNotas: 7.9,
      status: "Finalizada",
    },
    {
      id: 5,
      titulo: "Quiz Rápido - ES6+",
      curso: "JavaScript Moderno",
      tipo: "Quiz",
      dataLimite: "2024-02-12",
      participantes: 156,
      concluidos: 134,
      mediaNotas: 8.3,
      status: "Ativa",
    },
  ]

  const proximasAvaliacoes = [
    {
      titulo: "Prova - TypeScript Avançado",
      curso: "TypeScript na Prática",
      data: "2024-02-18",
      participantes: 98,
    },
    {
      titulo: "Projeto Final - API REST",
      curso: "Node.js Completo",
      data: "2024-02-22",
      participantes: 145,
    },
    {
      titulo: "Quiz - Testes Automatizados",
      curso: "Testes com Jest",
      data: "2024-02-25",
      participantes: 67,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativa":
        return "bg-green-100 text-green-800"
      case "Finalizada":
        return "bg-gray-100 text-gray-800"
      case "Rascunho":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "Prova":
        return "bg-purple-100 text-purple-800"
      case "Quiz":
        return "bg-blue-100 text-blue-800"
      case "Projeto":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Avaliações</h1>
          <p className="text-gray-300">Gerencie provas, quizzes e projetos dos seus cursos</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Nova Avaliação
        </Button>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="text-white">Todas as Avaliações</CardTitle>
                  <CardDescription className="text-gray-300">
                    Gerencie suas avaliações e acompanhe o desempenho
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Buscar avaliações..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="todas" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="todas">Todas</TabsTrigger>
                  <TabsTrigger value="ativas">Ativas</TabsTrigger>
                  <TabsTrigger value="finalizadas">Finalizadas</TabsTrigger>
                  <TabsTrigger value="rascunhos">Rascunhos</TabsTrigger>
                </TabsList>

                <TabsContent value="todas" className="space-y-4">
                  {avaliacoes.map((avaliacao) => (
                    <div
                      key={avaliacao.id}
                      className="border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-white">{avaliacao.titulo}</h3>
                            <Badge className={getTipoColor(avaliacao.tipo)}>{avaliacao.tipo}</Badge>
                            <Badge className={getStatusColor(avaliacao.status)}>{avaliacao.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">{avaliacao.curso}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(avaliacao.dataLimite).toLocaleDateString("pt-BR")}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {avaliacao.concluidos}/{avaliacao.participantes} concluídos
                            </div>
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              Média: {avaliacao.mediaNotas}
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                              <span>Progresso</span>
                              <span>{Math.round((avaliacao.concluidos / avaliacao.participantes) * 100)}%</span>
                            </div>
                            <Progress value={(avaliacao.concluidos / avaliacao.participantes) * 100} className="h-2" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            Ver
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-1" />
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            <BarChart3 className="w-4 h-4 mr-1" />
                            Relatório
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="ativas">
                  <div className="text-center py-8 text-gray-400">
                    <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Filtro de avaliações ativas será implementado</p>
                  </div>
                </TabsContent>

                <TabsContent value="finalizadas">
                  <div className="text-center py-8 text-gray-400">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Filtro de avaliações finalizadas será implementado</p>
                  </div>
                </TabsContent>

                <TabsContent value="rascunhos">
                  <div className="text-center py-8 text-gray-400">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Filtro de rascunhos será implementado</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Próximas Avaliações */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-white">Próximas Avaliações</CardTitle>
              <CardDescription className="text-gray-300">Avaliações agendadas para os próximos dias</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {proximasAvaliacoes.map((avaliacao, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                  <h4 className="font-medium text-white">{avaliacao.titulo}</h4>
                  <p className="text-sm text-gray-300">{avaliacao.curso}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(avaliacao.data).toLocaleDateString("pt-BR")}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Users className="w-3 h-3" />
                      {avaliacao.participantes} alunos
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Ações Rápidas */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg text-white">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Criar Quiz Rápido
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Nova Prova
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Exportar Notas
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-2" />
                Relatório Geral
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
