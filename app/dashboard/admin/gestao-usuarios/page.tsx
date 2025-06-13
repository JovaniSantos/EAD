import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Search, UserPlus, MoreHorizontal, Mail, Phone, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function GestaoUsuarios() {
  const alunos = [
    {
      id: 1,
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      telefone: "(11) 99999-1111",
      status: "Ativo",
      cursos: 3,
      dataRegistro: "15/01/2024",
    },
    {
      id: 2,
      nome: "Carlos Silva",
      email: "carlos.silva@email.com",
      telefone: "(11) 99999-2222",
      status: "Ativo",
      cursos: 2,
      dataRegistro: "20/01/2024",
    },
    {
      id: 3,
      nome: "Maria Santos",
      email: "maria.santos@email.com",
      telefone: "(11) 99999-3333",
      status: "Inativo",
      cursos: 1,
      dataRegistro: "10/01/2024",
    },
    {
      id: 4,
      nome: "Pedro Oliveira",
      email: "pedro.oliveira@email.com",
      telefone: "(11) 99999-4444",
      status: "Ativo",
      cursos: 4,
      dataRegistro: "25/01/2024",
    },
  ]

  const professores = [
    {
      id: 1,
      nome: "Prof. João Silva",
      email: "joao.professor@eduplatform.com",
      telefone: "(11) 88888-1111",
      status: "Ativo",
      cursos: 8,
      especialidade: "Desenvolvimento Web",
    },
    {
      id: 2,
      nome: "Prof. Ana Rodrigues",
      email: "ana.rodrigues@eduplatform.com",
      telefone: "(11) 88888-2222",
      status: "Ativo",
      cursos: 5,
      especialidade: "Design UX/UI",
    },
    {
      id: 3,
      nome: "Prof. Carlos Mendes",
      email: "carlos.mendes@eduplatform.com",
      telefone: "(11) 88888-3333",
      status: "Ativo",
      cursos: 6,
      especialidade: "Data Science",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Usuários</h1>
          <p className="text-muted-foreground">Gerencie alunos, professores e administradores da plataforma.</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Adicionar Usuário
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
            <div className="text-2xl font-bold">10,482</div>
            <p className="text-xs text-muted-foreground">+180 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Professores Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52</div>
            <p className="text-xs text-muted-foreground">+3 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Online</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,247</div>
            <p className="text-xs text-muted-foreground">Agora mesmo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Novos Hoje</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+12% vs ontem</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar usuários..." className="pl-8" />
        </div>
      </div>

      {/* Users Tables */}
      <Tabs defaultValue="alunos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="alunos">Alunos</TabsTrigger>
          <TabsTrigger value="professores">Professores</TabsTrigger>
          <TabsTrigger value="admins">Administradores</TabsTrigger>
        </TabsList>

        <TabsContent value="alunos">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Alunos</CardTitle>
              <CardDescription>Gerencie todos os alunos cadastrados na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Cursos</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data de Registro</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alunos.map((aluno) => (
                    <TableRow key={aluno.id}>
                      <TableCell className="font-medium">{aluno.nome}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                          {aluno.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                          {aluno.telefone}
                        </div>
                      </TableCell>
                      <TableCell>{aluno.cursos} cursos</TableCell>
                      <TableCell>
                        <Badge variant={aluno.status === "Ativo" ? "default" : "secondary"}>{aluno.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          {aluno.dataRegistro}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Suspender</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
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

        <TabsContent value="professores">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Professores</CardTitle>
              <CardDescription>Gerencie todos os professores da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Especialidade</TableHead>
                    <TableHead>Cursos</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {professores.map((professor) => (
                    <TableRow key={professor.id}>
                      <TableCell className="font-medium">{professor.nome}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                          {professor.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                          {professor.telefone}
                        </div>
                      </TableCell>
                      <TableCell>{professor.especialidade}</TableCell>
                      <TableCell>{professor.cursos} cursos</TableCell>
                      <TableCell>
                        <Badge variant="default">{professor.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Ver cursos</DropdownMenuItem>
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

        <TabsContent value="admins">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Administradores</CardTitle>
              <CardDescription>Gerencie os administradores do sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">Administradores do Sistema</h3>
                <p className="text-muted-foreground">Apenas 3 administradores ativos no sistema</p>
                <Button className="mt-4">Adicionar Administrador</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
