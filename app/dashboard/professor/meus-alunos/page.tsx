import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Search, Mail, MessageCircle, BarChart, Clock, Award } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MeusAlunos() {
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
          Enviar Mensagem
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
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+180 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alunos Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,089</div>
            <p className="text-xs text-muted-foreground">87% do total</p>
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

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar alunos..." className="pl-8" />
        </div>
      </div>

      {/* Students */}
      <Tabs defaultValue="todos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todos">Todos os Alunos</TabsTrigger>
          <TabsTrigger value="ativos">Ativos</TabsTrigger>
          <TabsTrigger value="inativos">Inativos</TabsTrigger>
          <TabsTrigger value="concluidos">Concluídos</TabsTrigger>
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
                      <TableCell>{aluno.curso}</TableCell>
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
              <CardDescription>Alunos que acessaram recentemente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">1,089 Alunos Ativos</h3>
                <p className="text-muted-foreground">Alunos que acessaram nos últimos 7 dias</p>
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
                <h3 className="mt-4 text-lg font-semibold">158 Alunos Inativos</h3>
                <p className="text-muted-foreground">Considere enviar uma mensagem de reengajamento</p>
                <Button className="mt-4">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="concluidos">
          <Card>
            <CardHeader>
              <CardTitle>Alunos que Concluíram</CardTitle>
              <CardDescription>Alunos que finalizaram pelo menos um curso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Award className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">847 Alunos Concluíram</h3>
                <p className="text-muted-foreground">Parabéns! Seus alunos estão tendo sucesso</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
