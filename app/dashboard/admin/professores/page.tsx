import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, UserPlus, Star, BookOpen, DollarSign } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function AdminProfessores() {
  const professores = [
    {
      id: 1,
      nome: "Prof. João Silva",
      email: "joao.professor@eduplatform.com",
      especialidade: "Desenvolvimento Web",
      cursos: 8,
      alunos: 3247,
      avaliacao: 4.9,
      receita: "R$ 156.780",
      status: "Ativo",
      dataIngresso: "Jan 2023",
    },
    {
      id: 2,
      nome: "Prof. Ana Rodrigues",
      email: "ana.rodrigues@eduplatform.com",
      especialidade: "Design UX/UI",
      cursos: 5,
      alunos: 2156,
      avaliacao: 4.8,
      receita: "R$ 98.450",
      status: "Ativo",
      dataIngresso: "Mar 2023",
    },
    {
      id: 3,
      nome: "Prof. Carlos Mendes",
      email: "carlos.mendes@eduplatform.com",
      especialidade: "Data Science",
      cursos: 6,
      alunos: 1987,
      avaliacao: 4.7,
      receita: "R$ 87.230",
      status: "Ativo",
      dataIngresso: "Fev 2023",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Professores</h1>
          <p className="text-muted-foreground">Administre os instrutores e criadores de conteúdo.</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Convidar Professor
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Professores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52</div>
            <p className="text-xs text-muted-foreground">+3 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">⭐ Excelente qualidade</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Criados</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">215</div>
            <p className="text-xs text-muted-foreground">Total de cursos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Gerada</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.2M</div>
            <p className="text-xs text-muted-foreground">Total acumulado</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle>Top Professores do Mês</CardTitle>
          <CardDescription>Professores com melhor desempenho em junho</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100">
              <div className="text-2xl">🥇</div>
              <div className="font-bold">Prof. João Silva</div>
              <div className="text-sm text-muted-foreground">Desenvolvimento Web</div>
              <div className="text-xs text-muted-foreground">3,247 alunos • 4.9 ⭐</div>
            </div>
            <div className="text-center p-4 border rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="text-2xl">🥈</div>
              <div className="font-bold">Prof. Ana Rodrigues</div>
              <div className="text-sm text-muted-foreground">Design UX/UI</div>
              <div className="text-xs text-muted-foreground">2,156 alunos • 4.8 ⭐</div>
            </div>
            <div className="text-center p-4 border rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="text-2xl">🥉</div>
              <div className="font-bold">Prof. Carlos Mendes</div>
              <div className="text-sm text-muted-foreground">Data Science</div>
              <div className="text-xs text-muted-foreground">1,987 alunos • 4.7 ⭐</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar professores por nome, especialidade ou email..." className="pl-8" />
        </div>
      </div>

      {/* Teachers Management */}
      <Tabs defaultValue="todos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todos">Todos os Professores</TabsTrigger>
          <TabsTrigger value="ativos">Ativos (49)</TabsTrigger>
          <TabsTrigger value="novos">Novos (3)</TabsTrigger>
          <TabsTrigger value="especialidades">Por Especialidade</TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Professores</CardTitle>
              <CardDescription>Todos os instrutores da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {professores.map((professor) => (
                  <div key={professor.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>
                          {professor.nome
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{professor.nome}</div>
                        <div className="text-sm text-muted-foreground">{professor.email}</div>
                        <Badge variant="outline" className="mt-1">
                          {professor.especialidade}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-8 text-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Cursos</div>
                        <div className="font-bold">{professor.cursos}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Alunos</div>
                        <div className="font-bold">{professor.alunos.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Avaliação</div>
                        <div className="font-bold flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          {professor.avaliacao}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Receita</div>
                        <div className="font-bold text-green-600">{professor.receita}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Ver Perfil
                      </Button>
                      <Button size="sm">Contatar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ativos">
          <Card>
            <CardHeader>
              <CardTitle>Professores Ativos</CardTitle>
              <CardDescription>Professores que publicaram conteúdo recentemente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Atividade nos Últimos 30 Dias</div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Novos cursos publicados</span>
                        <span>8</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Aulas ao vivo realizadas</span>
                        <span>156</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Interações no fórum</span>
                        <span>342</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Distribuição por Especialidade</div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Programação</span>
                        <span>18 professores</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Design</span>
                        <span>12 professores</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Marketing</span>
                        <span>8 professores</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="novos">
          <Card>
            <CardHeader>
              <CardTitle>Novos Professores</CardTitle>
              <CardDescription>Professores que ingressaram recentemente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">3 Novos Professores</h3>
                <p className="text-muted-foreground">Bem-vindos à equipe EduPlatform!</p>
                <div className="mt-4 space-y-2">
                  <div className="text-sm">• Prof. Ricardo Santos - Blockchain</div>
                  <div className="text-sm">• Prof. Marina Costa - Fotografia</div>
                  <div className="text-sm">• Prof. Lucas Oliveira - Mobile</div>
                </div>
                <Button className="mt-4">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Convidar Mais Professores
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="especialidades">
          <Card>
            <CardHeader>
              <CardTitle>Professores por Especialidade</CardTitle>
              <CardDescription>Distribuição de professores por área de conhecimento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <div className="text-lg font-bold">18</div>
                  <div className="text-sm font-medium">Programação</div>
                  <div className="text-xs text-muted-foreground">34.6% do total</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-lg font-bold">12</div>
                  <div className="text-sm font-medium">Design</div>
                  <div className="text-xs text-muted-foreground">23.1% do total</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-lg font-bold">8</div>
                  <div className="text-sm font-medium">Marketing</div>
                  <div className="text-xs text-muted-foreground">15.4% do total</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-lg font-bold">6</div>
                  <div className="text-sm font-medium">Data Science</div>
                  <div className="text-xs text-muted-foreground">11.5% do total</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-lg font-bold">5</div>
                  <div className="text-sm font-medium">Negócios</div>
                  <div className="text-xs text-muted-foreground">9.6% do total</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-lg font-bold">3</div>
                  <div className="text-sm font-medium">Outros</div>
                  <div className="text-xs text-muted-foreground">5.8% do total</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
