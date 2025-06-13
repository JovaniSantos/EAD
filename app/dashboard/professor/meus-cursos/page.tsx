import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Search, Plus, Users, Clock, Star, BarChart, Video } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function MeusCursos() {
  const cursos = [
    {
      id: 1,
      titulo: "Desenvolvimento Web Completo",
      descricao: "HTML, CSS, JavaScript e React",
      alunos: 342,
      status: "Ativo",
      avaliacao: 4.8,
      progresso: 100,
      aulas: 24,
      duracao: "40h",
      receita: "R$ 15.420,00",
    },
    {
      id: 2,
      titulo: "JavaScript Avançado",
      descricao: "Conceitos avançados e frameworks",
      alunos: 198,
      status: "Ativo",
      avaliacao: 4.9,
      progresso: 100,
      aulas: 18,
      duracao: "30h",
      receita: "R$ 8.910,00",
    },
    {
      id: 3,
      titulo: "React e Next.js",
      descricao: "Desenvolvimento moderno com React",
      alunos: 267,
      status: "Ativo",
      avaliacao: 4.7,
      progresso: 85,
      aulas: 20,
      duracao: "35h",
      receita: "R$ 12.015,00",
    },
    {
      id: 4,
      titulo: "Node.js e APIs",
      descricao: "Backend com Node.js e Express",
      alunos: 0,
      status: "Rascunho",
      avaliacao: 0,
      progresso: 45,
      aulas: 8,
      duracao: "25h",
      receita: "R$ 0,00",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meus Cursos</h1>
          <p className="text-muted-foreground">Gerencie seus cursos e acompanhe o desempenho.</p>
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
            <CardTitle className="text-sm font-medium">Cursos Ativos</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 novos este mês</p>
          </CardContent>
        </Card>

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
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 36.345</div>
            <p className="text-xs text-muted-foreground">+12% vs mês anterior</p>
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
          <TabsTrigger value="ativos">Ativos</TabsTrigger>
          <TabsTrigger value="rascunhos">Rascunhos</TabsTrigger>
          <TabsTrigger value="arquivados">Arquivados</TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cursos.map((curso) => (
              <Card key={curso.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video rounded-lg bg-muted flex items-center justify-center mb-4">
                    <BookOpen className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{curso.titulo}</CardTitle>
                      <CardDescription>{curso.descricao}</CardDescription>
                    </div>
                    <Badge
                      variant={
                        curso.status === "Ativo" ? "default" : curso.status === "Rascunho" ? "secondary" : "outline"
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

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{curso.alunos} alunos</span>
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
                      <span className="text-sm text-muted-foreground">Receita</span>
                      <span className="font-semibold text-green-600">{curso.receita}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/dashboard/professor/cursos/${curso.id}`}>Ver Detalhes</Link>
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link href={`/dashboard/professor/cursos/${curso.id}/editar`}>
                        {curso.status === "Rascunho" ? "Continuar" : "Editar"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ativos">
          <div className="text-center py-8">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">3 Cursos Ativos</h3>
            <p className="text-muted-foreground">Cursos disponíveis para os alunos</p>
          </div>
        </TabsContent>

        <TabsContent value="rascunhos">
          <div className="text-center py-8">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">1 Rascunho</h3>
            <p className="text-muted-foreground">Cursos em desenvolvimento</p>
            <Button className="mt-4" asChild>
              <Link href="/dashboard/professor/criar-curso">Criar Novo Curso</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="arquivados">
          <div className="text-center py-8">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">Nenhum Curso Arquivado</h3>
            <p className="text-muted-foreground">Cursos arquivados aparecerão aqui</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
