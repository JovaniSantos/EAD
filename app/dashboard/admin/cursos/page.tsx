import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Search, Plus, Users, Star, DollarSign } from "lucide-react"

export default function AdminCursos() {
  const categorias = [
    { nome: "Programação", cursos: 89, cor: "bg-blue-500" },
    { nome: "Design", cursos: 45, cor: "bg-pink-500" },
    { nome: "Marketing", cursos: 32, cor: "bg-green-500" },
    { nome: "Negócios", cursos: 28, cor: "bg-yellow-500" },
    { nome: "Data Science", cursos: 21, cor: "bg-purple-500" },
  ]

  const cursosPopulares = [
    {
      titulo: "Desenvolvimento Web Completo",
      professor: "Prof. João Silva",
      alunos: 2847,
      avaliacao: 4.9,
      receita: "R$ 142.350",
      categoria: "Programação",
    },
    {
      titulo: "Design UX/UI Avançado",
      professor: "Prof. Ana Rodrigues",
      alunos: 1923,
      avaliacao: 4.8,
      receita: "R$ 96.150",
      categoria: "Design",
    },
    {
      titulo: "Marketing Digital Estratégico",
      professor: "Prof. Carlos Mendes",
      alunos: 1654,
      avaliacao: 4.7,
      receita: "R$ 82.700",
      categoria: "Marketing",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Cursos</h1>
          <p className="text-muted-foreground">Administre todo o catálogo de cursos da plataforma.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Aprovar Curso
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Cursos</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">215</div>
            <p className="text-xs text-muted-foreground">+8 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.2M</div>
            <p className="text-xs text-muted-foreground">+15% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alunos Matriculados</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47.3K</div>
            <p className="text-xs text-muted-foreground">Total de matrículas</p>
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
      </div>

      {/* Categories Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Distribuição por Categoria</CardTitle>
          <CardDescription>Cursos organizados por área de conhecimento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            {categorias.map((categoria, index) => (
              <div key={index} className="text-center space-y-2">
                <div
                  className={`h-20 ${categoria.cor} rounded-lg flex items-center justify-center text-white font-bold text-lg`}
                >
                  {categoria.cursos}
                </div>
                <div className="text-sm font-medium">{categoria.nome}</div>
                <div className="text-xs text-muted-foreground">{categoria.cursos} cursos</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar cursos por título, professor ou categoria..." className="pl-8" />
        </div>
      </div>

      {/* Course Analytics */}
      <Tabs defaultValue="populares" className="space-y-4">
        <TabsList>
          <TabsTrigger value="populares">Mais Populares</TabsTrigger>
          <TabsTrigger value="receita">Maior Receita</TabsTrigger>
          <TabsTrigger value="novos">Novos Cursos</TabsTrigger>
          <TabsTrigger value="pendentes">Pendentes (12)</TabsTrigger>
        </TabsList>

        <TabsContent value="populares">
          <Card>
            <CardHeader>
              <CardTitle>Cursos Mais Populares</CardTitle>
              <CardDescription>Cursos com maior número de alunos matriculados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cursosPopulares.map((curso, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{curso.titulo}</div>
                        <div className="text-sm text-muted-foreground">{curso.professor}</div>
                        <Badge variant="outline" className="mt-1">
                          {curso.categoria}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">Alunos</div>
                          <div className="font-bold">{curso.alunos.toLocaleString()}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">Avaliação</div>
                          <div className="font-bold flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {curso.avaliacao}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">Receita</div>
                          <div className="font-bold text-green-600">{curso.receita}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="receita">
          <Card>
            <CardHeader>
              <CardTitle>Cursos com Maior Receita</CardTitle>
              <CardDescription>Ranking de cursos por faturamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">R$ 142.350</div>
                    <div className="text-sm text-muted-foreground">Desenvolvimento Web</div>
                    <div className="text-xs text-muted-foreground">2,847 alunos</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">R$ 96.150</div>
                    <div className="text-sm text-muted-foreground">Design UX/UI</div>
                    <div className="text-xs text-muted-foreground">1,923 alunos</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">R$ 82.700</div>
                    <div className="text-sm text-muted-foreground">Marketing Digital</div>
                    <div className="text-xs text-muted-foreground">1,654 alunos</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="novos">
          <Card>
            <CardHeader>
              <CardTitle>Cursos Recém-Lançados</CardTitle>
              <CardDescription>Cursos publicados nos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">8 Novos Cursos</h3>
                <p className="text-muted-foreground">Cursos lançados este mês</p>
                <div className="mt-4 space-y-2">
                  <div className="text-sm">• Python para Data Science</div>
                  <div className="text-sm">• React Native Avançado</div>
                  <div className="text-sm">• Gestão de Projetos Ágeis</div>
                  <div className="text-sm">• Inteligência Artificial Prática</div>
                  <div className="text-sm">• E mais 4 cursos...</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pendentes">
          <Card>
            <CardHeader>
              <CardTitle>Cursos Pendentes de Aprovação</CardTitle>
              <CardDescription>Cursos aguardando revisão e aprovação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-yellow-200 bg-yellow-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Blockchain e Criptomoedas</div>
                      <div className="text-sm text-muted-foreground">Prof. Ricardo Santos</div>
                      <div className="text-xs text-muted-foreground">Enviado há 2 dias</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Revisar
                      </Button>
                      <Button size="sm">Aprovar</Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg border-yellow-200 bg-yellow-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Fotografia Digital Profissional</div>
                      <div className="text-sm text-muted-foreground">Prof. Marina Costa</div>
                      <div className="text-xs text-muted-foreground">Enviado há 1 dia</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Revisar
                      </Button>
                      <Button size="sm">Aprovar</Button>
                    </div>
                  </div>
                </div>

                <div className="text-center py-4">
                  <Button variant="outline">Ver Todos os Pendentes (12)</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
