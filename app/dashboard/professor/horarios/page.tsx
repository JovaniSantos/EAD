"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Clock,
  Plus,
  Calendar,
  Users,
  Video,
  Edit,
  Trash2,
  Copy,
  Settings,
  CheckCircle,
  AlertCircle,
  Coffee,
  Moon,
} from "lucide-react"

export default function HorariosPage() {
  const [disponibilidadeAtiva, setDisponibilidadeAtiva] = useState(true)

  const estatisticas = [
    {
      titulo: "Horas Semanais",
      valor: "32h",
      mudanca: "+4h vs semana anterior",
      icone: Clock,
      cor: "text-purple-600",
    },
    {
      titulo: "Aulas Agendadas",
      valor: "18",
      mudanca: "esta semana",
      icone: Calendar,
      cor: "text-blue-600",
    },
    {
      titulo: "Alunos Atendidos",
      valor: "156",
      mudanca: "+12 novos agendamentos",
      icone: Users,
      cor: "text-green-600",
    },
    {
      titulo: "Taxa de Ocupação",
      valor: "78%",
      mudanca: "+5% vs semana anterior",
      icone: Video,
      cor: "text-orange-600",
    },
  ]

  const horariosSemana = [
    {
      dia: "Segunda",
      horarios: [
        { inicio: "09:00", fim: "10:30", tipo: "Aula", titulo: "React Hooks", alunos: 45, status: "confirmado" },
        { inicio: "14:00", fim: "15:00", tipo: "Mentoria", titulo: "João Silva", alunos: 1, status: "confirmado" },
        {
          inicio: "19:00",
          fim: "21:00",
          tipo: "Workshop",
          titulo: "TypeScript Avançado",
          alunos: 23,
          status: "pendente",
        },
      ],
    },
    {
      dia: "Terça",
      horarios: [
        { inicio: "10:00", fim: "11:30", tipo: "Aula", titulo: "Context API", alunos: 38, status: "confirmado" },
        {
          inicio: "16:00",
          fim: "17:00",
          tipo: "Revisão",
          titulo: "Projeto E-commerce",
          alunos: 8,
          status: "confirmado",
        },
      ],
    },
    {
      dia: "Quarta",
      horarios: [
        { inicio: "09:00", fim: "10:30", tipo: "Aula", titulo: "Next.js Routing", alunos: 52, status: "confirmado" },
        { inicio: "15:00", fim: "16:00", tipo: "Mentoria", titulo: "Maria Santos", alunos: 1, status: "rascunho" },
        { inicio: "20:00", fim: "21:30", tipo: "Live", titulo: "Q&A Semanal", alunos: 89, status: "confirmado" },
      ],
    },
    {
      dia: "Quinta",
      horarios: [
        { inicio: "11:00", fim: "12:30", tipo: "Aula", titulo: "State Management", alunos: 41, status: "confirmado" },
        { inicio: "14:30", fim: "15:30", tipo: "Mentoria", titulo: "Carlos Lima", alunos: 1, status: "confirmado" },
      ],
    },
    {
      dia: "Sexta",
      horarios: [
        { inicio: "09:30", fim: "11:00", tipo: "Aula", titulo: "Testing React", alunos: 35, status: "confirmado" },
        { inicio: "19:00", fim: "20:30", tipo: "Workshop", titulo: "Deploy & CI/CD", alunos: 28, status: "pendente" },
      ],
    },
    {
      dia: "Sábado",
      horarios: [
        { inicio: "10:00", fim: "12:00", tipo: "Intensivo", titulo: "Projeto Final", alunos: 15, status: "confirmado" },
      ],
    },
    {
      dia: "Domingo",
      horarios: [],
    },
  ]

  const disponibilidade = {
    segunda: { ativo: true, inicio: "09:00", fim: "21:00", intervalo: "12:00-13:00" },
    terca: { ativo: true, inicio: "10:00", fim: "18:00", intervalo: "12:00-13:00" },
    quarta: { ativo: true, inicio: "09:00", fim: "22:00", intervalo: "13:00-14:00" },
    quinta: { ativo: true, inicio: "11:00", fim: "19:00", intervalo: "12:30-13:30" },
    sexta: { ativo: true, inicio: "09:00", fim: "21:00", intervalo: "12:00-13:00" },
    sabado: { ativo: true, inicio: "10:00", fim: "16:00", intervalo: "12:00-13:00" },
    domingo: { ativo: false, inicio: "", fim: "", intervalo: "" },
  }

  const agendamentosPendentes = [
    {
      aluno: "Ana Costa",
      curso: "React Avançado",
      tipo: "Mentoria Individual",
      datasSugeridas: ["2024-02-10 14:00", "2024-02-12 16:00", "2024-02-15 10:00"],
      prioridade: "alta",
    },
    {
      aluno: "Pedro Oliveira",
      curso: "Next.js Prática",
      tipo: "Revisão de Projeto",
      datasSugeridas: ["2024-02-11 15:00", "2024-02-13 17:00"],
      prioridade: "media",
    },
    {
      aluno: "Lucia Ferreira",
      curso: "TypeScript",
      tipo: "Dúvidas Gerais",
      datasSugeridas: ["2024-02-09 11:00", "2024-02-14 14:00"],
      prioridade: "baixa",
    },
  ]

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "Aula":
        return "bg-blue-100 text-blue-800"
      case "Mentoria":
        return "bg-green-100 text-green-800"
      case "Workshop":
        return "bg-purple-100 text-purple-800"
      case "Live":
        return "bg-red-100 text-red-800"
      case "Revisão":
        return "bg-orange-100 text-orange-800"
      case "Intensivo":
        return "bg-indigo-100 text-indigo-800"
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

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case "alta":
        return "bg-red-100 text-red-800"
      case "media":
        return "bg-yellow-100 text-yellow-800"
      case "baixa":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Horários</h1>
          <p className="text-gray-300">Gerencie sua agenda e disponibilidade</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Novo Horário
          </Button>
        </div>
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

      <Tabs defaultValue="agenda" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="agenda">Agenda Semanal</TabsTrigger>
          <TabsTrigger value="disponibilidade">Disponibilidade</TabsTrigger>
          <TabsTrigger value="agendamentos">Agendamentos</TabsTrigger>
        </TabsList>

        <TabsContent value="agenda" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Agenda da Semana</CardTitle>
                  <CardDescription>Visualize todos os seus compromissos semanais</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-300">Disponibilidade:</span>
                  <Switch checked={disponibilidadeAtiva} onCheckedChange={setDisponibilidadeAtiva} />
                  <span className={`text-sm font-medium ${disponibilidadeAtiva ? "text-green-600" : "text-red-600"}`}>
                    {disponibilidadeAtiva ? "Ativa" : "Inativa"}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                {horariosSemana.map((dia, index) => (
                  <div key={index} className="space-y-3">
                    <div className="text-center">
                      <h3 className="font-semibold text-white">{dia.dia}</h3>
                      <p className="text-xs text-gray-400">
                        {new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                        })}
                      </p>
                    </div>
                    <div className="space-y-2 min-h-[200px]">
                      {dia.horarios.length > 0 ? (
                        dia.horarios.map((horario, horarioIndex) => (
                          <div
                            key={horarioIndex}
                            className="p-2 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium text-white">
                                {horario.inicio} - {horario.fim}
                              </span>
                              <Badge className={getStatusColor(horario.status)} size="sm">
                                {horario.status}
                              </Badge>
                            </div>
                            <Badge className={getTipoColor(horario.tipo)} size="sm">
                              {horario.tipo}
                            </Badge>
                            <p className="text-xs text-gray-300 mt-1 font-medium">{horario.titulo}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Users className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-400">{horario.alunos}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                          <Coffee className="w-8 h-8 mb-2" />
                          <span className="text-xs">Dia livre</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="disponibilidade" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Configurar Disponibilidade</CardTitle>
              <CardDescription>Defina seus horários de trabalho para cada dia da semana</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(disponibilidade).map(([dia, config]) => (
                  <div key={dia} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Switch checked={config.ativo} />
                      <div>
                        <h3 className="font-medium text-white capitalize">{dia}-feira</h3>
                        {config.ativo && (
                          <p className="text-sm text-gray-300">
                            {config.inicio} às {config.fim}
                            {config.intervalo && ` (Intervalo: ${config.intervalo})`}
                          </p>
                        )}
                      </div>
                    </div>
                    {config.ativo && (
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Editar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="w-4 h-4 mr-1" />
                          Copiar
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Dicas de Disponibilidade</h4>
                    <ul className="text-sm text-blue-800 mt-1 space-y-1">
                      <li>• Configure intervalos para descanso entre aulas</li>
                      <li>• Mantenha consistência nos horários semanais</li>
                      <li>• Reserve tempo para preparação de aulas</li>
                      <li>• Considere fusos horários dos alunos internacionais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agendamentos" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Solicitações Pendentes</CardTitle>
                <CardDescription>Agendamentos aguardando sua aprovação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agendamentosPendentes.map((agendamento, index) => (
                    <div
                      key={index}
                      className="border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-white">{agendamento.aluno}</h3>
                          <p className="text-sm text-gray-300">{agendamento.curso}</p>
                          <Badge className={getTipoColor(agendamento.tipo)} size="sm">
                            {agendamento.tipo}
                          </Badge>
                        </div>
                        <Badge className={getPrioridadeColor(agendamento.prioridade)}>{agendamento.prioridade}</Badge>
                      </div>

                      <div className="space-y-2 mb-3">
                        <p className="text-sm font-medium text-gray-300">Datas sugeridas:</p>
                        {agendamento.datasSugeridas.map((data, dataIndex) => (
                          <div key={dataIndex} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">
                              {new Date(data).toLocaleDateString("pt-BR")} às{" "}
                              {new Date(data).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                            </span>
                            <Button variant="outline" size="sm">
                              Aceitar
                            </Button>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Aprovar
                        </Button>
                        <Button variant="outline" size="sm">
                          Reagendar
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4 mr-1" />
                          Recusar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Resumo de Agendamentos</CardTitle>
                <CardDescription>Estatísticas dos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">47</div>
                      <p className="text-sm text-green-800">Aprovados</p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">8</div>
                      <p className="text-sm text-yellow-800">Pendentes</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <p className="text-sm text-blue-800">Reagendados</p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">3</div>
                      <p className="text-sm text-red-800">Recusados</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-white">Horários Mais Solicitados</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">19:00 - 20:00</span>
                        <span className="text-sm font-medium">23 solicitações</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">14:00 - 15:00</span>
                        <span className="text-sm font-medium">18 solicitações</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">10:00 - 11:00</span>
                        <span className="text-sm font-medium">15 solicitações</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Moon className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-900">Dica</span>
                    </div>
                    <p className="text-sm text-purple-800">
                      Considere abrir mais horários entre 19h-20h, é o período mais solicitado pelos alunos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
