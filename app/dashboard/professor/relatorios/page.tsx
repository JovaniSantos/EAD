"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Users, DollarSign, Download, Target, Award, Eye, Filter, RefreshCw } from "lucide-react"

export default function RelatoriosPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d")

  const overviewStats = [
    {
      title: "Receita Total",
      value: "R$ 321.200",
      change: "+12.5%",
      period: "vs mês anterior",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Novos Alunos",
      value: "847",
      change: "+23.1%",
      period: "últimos 30 dias",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Taxa de Conclusão",
      value: "68%",
      change: "+5.2%",
      period: "vs período anterior",
      icon: Target,
      color: "text-purple-600",
    },
    {
      title: "Avaliação Média",
      value: "4.8",
      change: "+0.2",
      period: "últimas avaliações",
      icon: Award,
      color: "text-orange-600",
    },
  ]

  const cursosPerformance = [
    {
      nome: "React do Zero ao Avançado",
      alunos: 2847,
      receita: "R$ 142.350",
      conclusao: 72,
      avaliacao: 4.9,
      crescimento: "+15%",
    },
    {
      nome: "Next.js na Prática",
      alunos: 1893,
      receita: "R$ 94.650",
      conclusao: 68,
      avaliacao: 4.8,
      crescimento: "+8%",
    },
    {
      nome: "JavaScript Moderno",
      alunos: 1564,
      receita: "R$ 62.560",
      conclusao: 75,
      avaliacao: 4.7,
      crescimento: "+12%",
    },
    {
      nome: "TypeScript na Prática",
      alunos: 987,
      receita: "R$ 49.350",
      conclusao: 65,
      avaliacao: 4.8,
      crescimento: "+18%",
    },
    {
      nome: "Node.js Completo",
      alunos: 756,
      receita: "R$ 37.800",
      conclusao: 58,
      avaliacao: 4.6,
      crescimento: "+5%",
    },
  ]

  const engajamentoData = [
    { mes: "Set", aulas: 1250, exercicios: 890, forum: 340 },
    { mes: "Out", aulas: 1420, exercicios: 1050, forum: 420 },
    { mes: "Nov", aulas: 1680, exercicios: 1240, forum: 580 },
    { mes: "Dez", aulas: 1890, exercicios: 1450, forum: 650 },
    { mes: "Jan", aulas: 2150, exercicios: 1680, forum: 780 },
    { mes: "Fev", aulas: 2340, exercicios: 1820, forum: 890 },
  ]

  const topAlunos = [
    { nome: "Ana Silva", curso: "React Avançado", progresso: 95, tempo: "120h", nota: 9.5 },
    { nome: "Carlos Santos", curso: "Next.js Prática", progresso: 88, tempo: "98h", nota: 9.2 },
    { nome: "Maria Oliveira", curso: "JavaScript Moderno", progresso: 92, tempo: "85h", nota: 9.0 },
    { nome: "João Costa", curso: "TypeScript", progresso: 85, tempo: "76h", nota: 8.8 },
    { nome: "Lucia Ferreira", curso: "Node.js", progresso: 90, tempo: "102h", nota: 9.1 },
  ]

  const relatoriosDisponiveis = [
    {
      titulo: "Relatório Mensal de Performance",
      descricao: "Análise completa do desempenho dos cursos em Janeiro 2024",
      data: "01/02/2024",
      tipo: "PDF",
      tamanho: "2.4 MB",
    },
    {
      titulo: "Análise de Engajamento dos Alunos",
      descricao: "Métricas detalhadas de participação e interação",
      data: "28/01/2024",
      tipo: "Excel",
      tamanho: "1.8 MB",
    },
    {
      titulo: "Relatório Financeiro Q4 2023",
      descricao: "Resumo financeiro do último trimestre de 2023",
      data: "15/01/2024",
      tipo: "PDF",
      tamanho: "3.1 MB",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Relatórios</h1>
          <p className="text-gray-300">Análises detalhadas e insights dos seus cursos</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Período:</span>
        {["7d", "30d", "90d", "1y"].map((period) => (
          <Button
            key={period}
            variant={selectedPeriod === period ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod(period)}
            className={selectedPeriod === period ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            {period === "7d" && "7 dias"}
            {period === "30d" && "30 dias"}
            {period === "90d" && "90 dias"}
            {period === "1y" && "1 ano"}
          </Button>
        ))}
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm font-medium text-green-600">{stat.change}</span>
                    <span className="text-xs text-gray-400">{stat.period}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gray-700 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="engajamento">Engajamento</TabsTrigger>
          <TabsTrigger value="alunos">Top Alunos</TabsTrigger>
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Performance dos Cursos</CardTitle>
              <CardDescription className="text-gray-300">Análise detalhada do desempenho de cada curso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cursosPerformance.map((curso, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-white">{curso.nome}</h3>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {curso.crescimento}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Alunos</p>
                            <p className="font-semibold text-white">{curso.alunos.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Receita</p>
                            <p className="font-semibold text-white">{curso.receita}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Conclusão</p>
                            <p className="font-semibold text-white">{curso.conclusao}%</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Avaliação</p>
                            <p className="font-semibold text-white">{curso.avaliacao} ⭐</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span>Taxa de Conclusão</span>
                            <span>{curso.conclusao}%</span>
                          </div>
                          <Progress value={curso.conclusao} className="h-2" />
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engajamento" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Engajamento por Mês</CardTitle>
                <CardDescription className="text-gray-300">Atividades dos alunos nos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {engajamentoData.map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-white">{data.mes}</span>
                        <span className="text-sm text-gray-400">
                          {data.aulas + data.exercicios + data.forum} atividades
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-xs text-gray-300">Aulas assistidas: {data.aulas}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-300">Exercícios: {data.exercicios}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-300">Fórum: {data.forum}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Métricas de Tempo</CardTitle>
                <CardDescription className="text-gray-300">Tempo médio gasto pelos alunos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">2h 45m</div>
                    <p className="text-sm text-gray-300">Tempo médio por sessão</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-semibold text-white">156h</div>
                      <p className="text-xs text-gray-300">Tempo total semanal</p>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-white">89%</div>
                      <p className="text-xs text-gray-300">Taxa de retenção</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white">Manhã (6h-12h)</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white">Tarde (12h-18h)</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white">Noite (18h-24h)</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alunos" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Top Alunos do Mês</CardTitle>
              <CardDescription className="text-gray-300">Alunos com melhor desempenho e engajamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topAlunos.map((aluno, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-purple-100 text-purple-600 rounded-full font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{aluno.nome}</h3>
                        <p className="text-sm text-gray-300">{aluno.curso}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <p className="font-semibold text-white">{aluno.progresso}%</p>
                        <p className="text-gray-400">Progresso</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-white">{aluno.tempo}</p>
                        <p className="text-gray-400">Tempo</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-white">{aluno.nota}</p>
                        <p className="text-gray-400">Nota</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Destaque</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="downloads" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Relatórios Disponíveis</CardTitle>
              <CardDescription className="text-gray-300">Baixe relatórios detalhados em PDF ou Excel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relatoriosDisponiveis.map((relatorio, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{relatorio.titulo}</h3>
                        <p className="text-sm text-gray-300">{relatorio.descricao}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                          <span>{relatorio.data}</span>
                          <span>{relatorio.tipo}</span>
                          <span>{relatorio.tamanho}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Baixar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
