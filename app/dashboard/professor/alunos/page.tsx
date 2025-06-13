import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Search, Mail, MessageCircle, BarChart, Clock, Award, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfessorAlunos() {
  const alunos = [
    {
      id: 1,
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      curso: "Desenvolvimento Web Completo",
      progresso: 75,
      ultimoAcesso: "2 horas atrás",
      status: "Ativo",
      nota: 8.5,
      certificados: 2,
      tempoEstudo: "45h",
      dataMatricula: "15/01/2024",
    },
    {
      id: 2,
      nome: "Carlos Silva",
      email: "carlos.silva@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      curso: "JavaScript Avançado",
      progresso: 45,
      ultimoAcesso: "1 dia atrás",
      status: "Ativo",
      nota: 7.8,
      certificados: 1,
      tempoEstudo: "28h",
      dataMatricula: "20/01/2024",
    },
    {
      id: 3,
      nome: "Maria Santos",
      email: "maria.santos@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      curso: "React e Next.js",
      progresso: 90,
      ultimoAcesso: "30 min atrás",
      status: "Ativo",
      nota: 9.2,
      certificados: 3,
      tempoEstudo: "67h",
      dataMatricula: "10/01/2024",
    },
    {
      id: 4,
      nome: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      avatar: "/placeholder.svg?height=40&width=40",
      curso: "Desenvolvimento Web Completo",
      progresso: 20,
      ultimoAcesso: "1 semana atrás",
      status: "Inativo",
      nota: 6.5,
      certificados: 0,
      tempoEstudo: "12h",
      dataMatricula: "25/01/2024",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meus Alunos</h1>
          <p className="text-muted-foreground">Acompanhe o progresso e desempenho dos seus alunos.</p>
        </div>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Enviar Mensagem em Massa
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6,424</div>
            <p className="text-xs text-muted-foreground">+347 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alunos Ativos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,847</div>
            <p className="text-xs text-muted-foreground">91% do total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+5% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nota Média</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2</div>
            <p className="text-xs text-muted-foreground">Excelente desempenho</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Visão Geral do Desempenho</CardTitle>
          <CardDescription>Métricas de engajamento e progresso dos alunos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="font-semibold">Distribuição de Progresso</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>0-25% concluído</span>
                  <span>15% dos alunos</span>
                </div>
                <Progress value={15} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>26-50% concluído</span>
                  <span>25% dos alunos</span>
                </div>
                <Progress value={25} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>51-75% concluído</span>
                  <span>35% dos alunos</span>
                </div>
                <Progress value={35} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>76-100% concluído</span>
                  <span>25% dos alunos</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Engajamento Semanal</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Segunda</span>
                  <span>2,847 acessos</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Terça</span>
                  <span>3,156 acessos</span>
                </div>
                <Progress value={95} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Quarta</span>
                  <span>2,934 acessos</span>
                </div>
                <Progress value={88} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Quinta</span>
                  <span>3,245 acessos</span>
                </div>
                <Progress value={97} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Certificados Emitidos</h3>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-green-600">1,247</div>
                <div className="text-sm text-muted-foreground">Certificados este mês</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-green-50 rounded">
                    <div className="font-medium">Dev Web</div>
                    <div>456 certificados</div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <div className="font-medium">JavaScript</div>
                    <div>342 certificados</div>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <div className="font-medium">React</div>
                    <div>289 certificados</div>
                  </div>
                  <div className="p-2 bg-yellow-50 rounded">
                    <div className="font-medium">Node.js</div>
                    <div>160 certificados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar alunos por nome, email ou curso..." className="pl-8" />
        </div>
      </div>

      {/* Students Management */}
      <Tabs defaultValue="todos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todos">Todos os Alunos</TabsTrigger>
          <TabsTrigger value="ativos">Ativos (5,847)</TabsTrigger>
          <TabsTrigger value="inativos">Inativos (577)</TabsTrigger>
          <TabsTrigger value="destaque">Destaques</TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Alunos</CardTitle>
              <CardDescription>Todos os alunos matriculados em seus cursos</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Aluno</TableHead>
                    <TableHead>Curso</TableHead>
                    <TableHead>Progresso</TableHead>
                    <TableHead>Último Acesso</TableHead>
                    <TableHead>Nota</TableHead>
                    <TableHead>Tempo de Estudo</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alunos.map((aluno) => (
                    <TableRow key={aluno.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={aluno.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {aluno.nome
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{aluno.nome}</div>
                            <div className="text-sm text-muted-foreground">{aluno.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{aluno.curso}</div>
                          <div className="text-sm text-muted-foreground">Matriculado em {aluno.dataMatricula}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{aluno.progresso}%</span>
                          </div>
                          <Progress value={aluno.progresso} className="h-2 w-20" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          {aluno.ultimoAcesso}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={aluno.nota >= 8 ? "default" : aluno.nota >= 7 ? "secondary" : "destructive"}>
                          {aluno.nota}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          {aluno.tempoEstudo}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={aluno.status === "Ativo" ? "default" : "secondary"}>{aluno.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <BarChart className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ativos">
          <Card>
            <CardHeader>
              <CardTitle>Alunos Ativos</CardTitle>
              <CardDescription>Alunos que acessaram nos últimos 7 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Atividade por Horário</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Manhã (6h-12h)</span>
                        <span>35% dos acessos</span>
                      </div>
                      <Progress value={35} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Tarde (12h-18h)</span>
                        <span>45% dos acessos</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Noite (18h-24h)</span>
                        <span>20% dos acessos</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Dispositivos Utilizados</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Desktop</span>
                        <span>60% dos alunos</span>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Mobile</span>
                        <span>35% dos alunos</span>
                      </div>
                      <Progress value={35} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Tablet</span>
                        <span>5% dos alunos</span>
                      </div>
                      <Progress value={5} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inativos">
          <Card>
            <CardHeader>
              <CardTitle>Alunos Inativos</CardTitle>
              <CardDescription>Alunos que não acessam há mais de 7 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">577 Alunos Inativos</h3>
                <p className="text-muted-foreground">Considere estratégias de reengajamento</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 border rounded">
                    <div className="font-medium">Inativos há 1-2 semanas</div>
                    <div className="text-muted-foreground">234 alunos</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium">Inativos há 2-4 semanas</div>
                    <div className="text-muted-foreground">189 alunos</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium">Inativos há mais de 1 mês</div>
                    <div className="text-muted-foreground">154 alunos</div>
                  </div>
                </div>
                <Button className="mt-4">
                  <Mail className="mr-2 h-4 w-4" />
                  Campanha de Reengajamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="destaque">
          <Card>
            <CardHeader>
              <CardTitle>Alunos Destaque</CardTitle>
              <CardDescription>Alunos com melhor desempenho e engajamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100">
                    <div className="text-2xl">🏆</div>
                    <div className="font-bold">Maria Santos</div>
                    <div className="text-sm text-muted-foreground">React e Next.js</div>
                    <div className="text-xs text-muted-foreground">90% progresso • Nota 9.2</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                    <div className="text-2xl">⭐</div>
                    <div className="font-bold">Ana Costa</div>
                    <div className="text-sm text-muted-foreground">Desenvolvimento Web</div>
                    <div className="text-xs text-muted-foreground">75% progresso • Nota 8.5</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
                    <div className="text-2xl">🎯</div>
                    <div className="font-bold">Carlos Silva</div>
                    <div className="text-sm text-muted-foreground">JavaScript Avançado</div>
                    <div className="text-xs text-muted-foreground">45% progresso • Nota 7.8</div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-4">Critérios de Destaque</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Progresso acima de 80%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Nota acima de 8.0</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Acesso diário consistente</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Participação ativa no fórum</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
