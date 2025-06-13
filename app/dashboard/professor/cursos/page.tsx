import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Search, Plus, Users, Clock, Star, BarChart, Video, Edit } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function ProfessorCursos() {
  const meusCursos = [
    {
      id: 1,
      titulo: "Desenvolvimento Web Completo",
      descricao: "HTML, CSS, JavaScript e React do zero ao avançado",
      thumbnail: "/placeholder.svg?height=200&width=300",
      alunos: 2847,
      aulas: 45,
      duracao: "52h",
      avaliacao: 4.9,
      receita: "R$ 142.350",
      status: "Publicado",
      progresso: 100,
      categoria: "Programação",
      ultimaAtualizacao: "2 dias atrás",
    },
    {
      id: 2,
      titulo: "JavaScript Avançado",
      descricao: "Conceitos avançados, ES6+, async/await e mais",
      thumbnail: "/placeholder.svg?height=200&width=300",
      alunos: 1923,
      aulas: 32,
      duracao: "38h",
      avaliacao: 4.8,
      receita: "R$ 96.150",
      status: "Publicado",
      progresso: 100,
      categoria: "Programação",
      ultimaAtualizacao: "1 semana atrás",
    },
    {
      id: 3,
      titulo: "React e Next.js Moderno",
      descricao: "Desenvolvimento de aplicações modernas com React",
      thumbnail: "/placeholder.svg?height=200&width=300",
      alunos: 1654,
      aulas: 28,
      duracao: "42h",
      avaliacao: 4.7,
      receita: "R$ 82.700",
      status: "Publicado",
      progresso: 85,
      categoria: "Programação",
      ultimaAtualizacao: "3 dias atrás",
    },
    {
      id: 4,
      titulo: "Node.js e APIs RESTful",
      descricao: "Backend completo com Node.js e Express",
      thumbnail: "/placeholder.svg?height=200&width=300",
      alunos: 0,
      aulas: 12,
      duracao: "25h",
      avaliacao: 0,
      receita: "R$ 0",
      status: "Rascunho",
      progresso: 45,
      categoria: "Programação",
      ultimaAtualizacao: "Hoje",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meus Cursos</h1>
          <p className="text-muted-foreground">Gerencie e acompanhe o desempenho dos seus cursos.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/professor/criar-curso">
            <Plus className="mr-2 h-4 w-4" />
            Criar Novo Curso
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Publicados</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6,424</div>
            <p className="text-xs text-muted-foreground">+347 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 321.200</div>
            <p className="text-xs text-muted-foreground">+18% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">⭐ Excelente feedback</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar seus cursos..." className="pl-8" />
        </div>
      </div>

      {/* Courses */}
      <Tabs defaultValue="todos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todos">Todos os Cursos</TabsTrigger>
          <TabsTrigger value="publicados">Publicados (3)</TabsTrigger>
          <TabsTrigger value="rascunhos">Rascunhos (1)</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meusCursos.map((curso) => (
              <Card key={curso.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg leading-tight">{curso.titulo}</CardTitle>
                      <CardDescription className="text-sm">{curso.descricao}</CardDescription>
                    </div>
                    <Badge
                      variant={
                        curso.status === "Publicado" ? "default" : curso.status === "Rascunho" ? "secondary" : "outline"
                      }
                    >
                      {curso.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso do curso</span>
                      <span>{curso.progresso}%</span>
                    </div>
                    <Progress value={curso.progresso} className="h-2" />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{curso.alunos.toLocaleString()} alunos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span>{curso.aulas} aulas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{curso.duracao}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{curso.avaliacao > 0 ? curso.avaliacao : "N/A"}</span>
                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Receita gerada</span>
                      <span className="font-semibold text-green-600">{curso.receita}</span>
                    </div>
                  </div>

                  {/* Last Update */}
                  <div className="text-xs text-muted-foreground">Última atualização: {curso.ultimaAtualizacao}</div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" className="flex-1" size="sm">
                      <BarChart className="mr-2 h-4 w-4" />
                      Analytics
                    </Button>
                    <Button className="flex-1" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      {curso.status === "Rascunho" ? "Continuar" : "Editar"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="publicados">
          <Card>
            <CardHeader>
              <CardTitle>Cursos Publicados</CardTitle>
              <CardDescription>Cursos disponíveis para os alunos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">3 Cursos Publicados</h3>
                <p className="text-muted-foreground">Seus cursos estão disponíveis para matrícula</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 border rounded">
                    <div className="font-medium">Desenvolvimento Web</div>
                    <div className="text-muted-foreground">2,847 alunos</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium">JavaScript Avançado</div>
                    <div className="text-muted-foreground">1,923 alunos</div>
                  </div>
                  <div className="p-3 border rounded">
                    <div className="font-medium">React e Next.js</div>
                    <div className="text-muted-foreground">1,654 alunos</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rascunhos">
          <Card>
            <CardHeader>
              <CardTitle>Rascunhos</CardTitle>
              <CardDescription>Cursos em desenvolvimento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">1 Rascunho</h3>
                <p className="text-muted-foreground">Continue desenvolvendo seu curso</p>
                <div className="mt-4 p-4 border rounded-lg">
                  <div className="font-medium">Node.js e APIs RESTful</div>
                  <div className="text-sm text-muted-foreground">45% concluído • 12 aulas criadas</div>
                  <Button className="mt-2" size="sm">
                    Continuar Editando
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics dos Cursos</CardTitle>
              <CardDescription>Desempenho e métricas dos seus cursos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Crescimento de Alunos</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Janeiro</span>
                        <span>+234 alunos</span>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Fevereiro</span>
                        <span>+189 alunos</span>
                      </div>
                      <Progress value={48} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Março</span>
                        <span>+347 alunos</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Receita por Curso</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Desenvolvimento Web</span>
                        <span className="text-green-600">R$ 142.350</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>JavaScript Avançado</span>
                        <span className="text-green-600">R$ 96.150</span>
                      </div>
                      <Progress value={68} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>React e Next.js</span>
                        <span className="text-green-600">R$ 82.700</span>
                      </div>
                      <Progress value={58} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">68%</div>
                    <div className="text-sm text-muted-foreground">Taxa de Conclusão</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">4.8</div>
                    <div className="text-sm text-muted-foreground">Avaliação Média</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">92%</div>
                    <div className="text-sm text-muted-foreground">Satisfação</div>
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
