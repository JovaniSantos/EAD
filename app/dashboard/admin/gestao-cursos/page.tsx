import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BookOpen, Search, Plus, MoreHorizontal, Users, Clock, Star } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function GestaoCursos() {
  const cursos = [
    {
      id: 1,
      titulo: "Desenvolvimento Web Completo",
      professor: "Prof. João Silva",
      alunos: 342,
      status: "Ativo",
      categoria: "Programação",
      avaliacao: 4.8,
      duracao: "40h",
      dataLancamento: "15/01/2024",
    },
    {
      id: 2,
      titulo: "Design UX/UI Avançado",
      professor: "Prof. Ana Rodrigues",
      alunos: 198,
      status: "Ativo",
      categoria: "Design",
      avaliacao: 4.9,
      duracao: "35h",
      dataLancamento: "20/01/2024",
    },
    {
      id: 3,
      titulo: "Data Science com Python",
      professor: "Prof. Carlos Mendes",
      alunos: 267,
      status: "Em Revisão",
      categoria: "Data Science",
      avaliacao: 4.7,
      duracao: "50h",
      dataLancamento: "10/02/2024",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Cursos</h1>
          <p className="text-muted-foreground">Gerencie todos os cursos da plataforma.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Curso
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
            <CardTitle className="text-sm font-medium">Cursos Ativos</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">187</div>
            <p className="text-xs text-muted-foreground">87% do total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Revisão</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Aguardando aprovação</p>
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

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar cursos..." className="pl-8" />
        </div>
      </div>

      {/* Courses Table */}
      <Tabs defaultValue="todos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todos">Todos os Cursos</TabsTrigger>
          <TabsTrigger value="ativos">Ativos</TabsTrigger>
          <TabsTrigger value="revisao">Em Revisão</TabsTrigger>
          <TabsTrigger value="rascunho">Rascunhos</TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Cursos</CardTitle>
              <CardDescription>Todos os cursos disponíveis na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Curso</TableHead>
                    <TableHead>Professor</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Alunos</TableHead>
                    <TableHead>Duração</TableHead>
                    <TableHead>Avaliação</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cursos.map((curso) => (
                    <TableRow key={curso.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{curso.titulo}</div>
                          <div className="text-sm text-muted-foreground">Lançado em {curso.dataLancamento}</div>
                        </div>
                      </TableCell>
                      <TableCell>{curso.professor}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{curso.categoria}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                          {curso.alunos}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          {curso.duracao}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Star className="mr-2 h-4 w-4 text-yellow-500" />
                          {curso.avaliacao}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            curso.status === "Ativo"
                              ? "default"
                              : curso.status === "Em Revisão"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {curso.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Ver alunos</DropdownMenuItem>
                            <DropdownMenuItem>Relatórios</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Desativar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
              <CardTitle>Cursos Ativos</CardTitle>
              <CardDescription>Cursos disponíveis para matrícula</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">187 Cursos Ativos</h3>
                <p className="text-muted-foreground">Cursos disponíveis para matrícula dos alunos</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revisao">
          <Card>
            <CardHeader>
              <CardTitle>Cursos em Revisão</CardTitle>
              <CardDescription>Cursos aguardando aprovação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">12 Cursos em Revisão</h3>
                <p className="text-muted-foreground">Cursos aguardando aprovação para publicação</p>
                <Button className="mt-4">Revisar Cursos</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rascunho">
          <Card>
            <CardHeader>
              <CardTitle>Rascunhos</CardTitle>
              <CardDescription>Cursos em desenvolvimento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">16 Rascunhos</h3>
                <p className="text-muted-foreground">Cursos em desenvolvimento pelos professores</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
