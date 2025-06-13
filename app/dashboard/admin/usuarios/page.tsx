import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Search, UserPlus, MoreHorizontal, Mail, Phone, Calendar, MapPin, TrendingUp } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

export default function AdminUsuarios() {
  const usuarios = [
    {
      id: 1,
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      telefone: "(11) 99999-1111",
      tipo: "Aluno",
      status: "Ativo",
      cursos: 3,
      ultimoAcesso: "2 horas atrás",
      localizacao: "São Paulo, SP",
      dataRegistro: "15/01/2024",
    },
    {
      id: 2,
      nome: "Prof. João Silva",
      email: "joao.professor@eduplatform.com",
      telefone: "(11) 88888-1111",
      tipo: "Professor",
      status: "Ativo",
      cursos: 8,
      ultimoAcesso: "30 min atrás",
      localizacao: "Rio de Janeiro, RJ",
      dataRegistro: "10/12/2023",
    },
    {
      id: 3,
      nome: "Carlos Mendes",
      email: "carlos.mendes@email.com",
      telefone: "(11) 99999-2222",
      tipo: "Aluno",
      status: "Inativo",
      cursos: 1,
      ultimoAcesso: "1 semana atrás",
      localizacao: "Belo Horizonte, MG",
      dataRegistro: "20/01/2024",
    },
    {
      id: 4,
      nome: "Maria Santos",
      email: "maria.admin@eduplatform.com",
      telefone: "(11) 77777-1111",
      tipo: "Admin",
      status: "Ativo",
      cursos: 0,
      ultimoAcesso: "Agora",
      localizacao: "Brasília, DF",
      dataRegistro: "01/01/2024",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Usuários</h1>
          <p className="text-muted-foreground">Administre todos os usuários da plataforma EduPlatform.</p>
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
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,534</div>
            <p className="text-xs text-muted-foreground">+12% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9,247</div>
            <p className="text-xs text-muted-foreground">87.8% do total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Novos Hoje</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+23% vs ontem</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">Excelente engajamento</p>
          </CardContent>
        </Card>
      </div>

      {/* Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Crescimento de Usuários</CardTitle>
          <CardDescription>Evolução do número de usuários nos últimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-6 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Jan</div>
                <div className="h-20 bg-purple-500 rounded-t flex items-end justify-center text-white text-xs pb-1">
                  8.2k
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Fev</div>
                <div className="h-24 bg-purple-500 rounded-t flex items-end justify-center text-white text-xs pb-1">
                  8.7k
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Mar</div>
                <div className="h-28 bg-purple-500 rounded-t flex items-end justify-center text-white text-xs pb-1">
                  9.1k
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Abr</div>
                <div className="h-32 bg-purple-500 rounded-t flex items-end justify-center text-white text-xs pb-1">
                  9.6k
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Mai</div>
                <div className="h-36 bg-purple-500 rounded-t flex items-end justify-center text-white text-xs pb-1">
                  10.1k
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Jun</div>
                <div className="h-40 bg-green-500 rounded-t flex items-end justify-center text-white text-xs pb-1">
                  10.5k
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
          <Input placeholder="Buscar por nome, email ou telefone..." className="pl-8" />
        </div>
      </div>

      {/* Users Table */}
      <Tabs defaultValue="todos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todos">Todos os Usuários</TabsTrigger>
          <TabsTrigger value="alunos">Alunos (10,482)</TabsTrigger>
          <TabsTrigger value="professores">Professores (52)</TabsTrigger>
          <TabsTrigger value="admins">Admins (3)</TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <Card>
            <CardHeader>
              <CardTitle>Lista Completa de Usuários</CardTitle>
              <CardDescription>Todos os usuários registrados na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Localização</TableHead>
                    <TableHead>Cursos/Atividade</TableHead>
                    <TableHead>Último Acesso</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usuarios.map((usuario) => (
                    <TableRow key={usuario.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{usuario.nome}</div>
                          <div className="text-sm text-muted-foreground">Registrado em {usuario.dataRegistro}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            usuario.tipo === "Admin"
                              ? "destructive"
                              : usuario.tipo === "Professor"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {usuario.tipo}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="mr-2 h-3 w-3 text-muted-foreground" />
                            {usuario.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="mr-2 h-3 w-3 text-muted-foreground" />
                            {usuario.telefone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                          {usuario.localizacao}
                        </div>
                      </TableCell>
                      <TableCell>
                        {usuario.tipo === "Professor" ? (
                          <span>{usuario.cursos} cursos criados</span>
                        ) : usuario.tipo === "Aluno" ? (
                          <span>{usuario.cursos} cursos matriculados</span>
                        ) : (
                          <span>Administração</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          {usuario.ultimoAcesso}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={usuario.status === "Ativo" ? "default" : "secondary"}>{usuario.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver perfil completo</DropdownMenuItem>
                            <DropdownMenuItem>Editar informações</DropdownMenuItem>
                            <DropdownMenuItem>Histórico de atividades</DropdownMenuItem>
                            <DropdownMenuItem>Enviar mensagem</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              {usuario.status === "Ativo" ? "Suspender" : "Reativar"}
                            </DropdownMenuItem>
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

        <TabsContent value="alunos">
          <Card>
            <CardHeader>
              <CardTitle>Alunos da Plataforma</CardTitle>
              <CardDescription>Estudantes matriculados em cursos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Distribuição por Nível</div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Iniciante</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Intermediário</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Avançado</span>
                        <span>10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Faixa Etária</div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>18-25 anos</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>26-35 anos</span>
                        <span>35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>36+ anos</span>
                        <span>20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Localização</div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Sudeste</span>
                        <span>55%</span>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Sul</span>
                        <span>20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Outros</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professores">
          <Card>
            <CardHeader>
              <CardTitle>Professores da Plataforma</CardTitle>
              <CardDescription>Instrutores e criadores de conteúdo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">52 Professores Ativos</h3>
                <p className="text-muted-foreground">Especialistas em diversas áreas do conhecimento</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium">Avaliação Média</div>
                    <div className="text-2xl font-bold text-green-600">4.8 ⭐</div>
                  </div>
                  <div>
                    <div className="font-medium">Cursos Criados</div>
                    <div className="text-2xl font-bold text-purple-600">215</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admins">
          <Card>
            <CardHeader>
              <CardTitle>Administradores</CardTitle>
              <CardDescription>Equipe de administração da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">3 Administradores</h3>
                <p className="text-muted-foreground">Equipe responsável pela gestão da plataforma</p>
                <Button className="mt-4">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Adicionar Administrador
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
