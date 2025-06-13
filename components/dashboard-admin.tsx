import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BarChart, Calendar, CheckCircle, FileText, Users, Video } from "lucide-react"

const stats = [
  {
    title: "Total de Alunos",
    value: "10,482",
    icon: Users,
    description: "Alunos ativos na plataforma",
    change: "+12% no último mês",
  },
  {
    title: "Total de Professores",
    value: "52",
    icon: Users,
    description: "Professores ativos na plataforma",
    change: "+3 no último mês",
  },
  {
    title: "Total de Cursos",
    value: "215",
    icon: Video,
    description: "Cursos disponíveis na plataforma",
    change: "+8 no último mês",
  },
  {
    title: "Conferências Realizadas",
    value: "1,248",
    icon: Calendar,
    description: "Aulas ao vivo realizadas",
    change: "+85 no último mês",
  },
]

const pendingCourses = [
  {
    id: 1,
    title: "Machine Learning para Iniciantes",
    teacher: "Carlos Mendes",
    submittedDate: "10/06/2023",
    modules: 8,
  },
  {
    id: 2,
    title: "Desenvolvimento Mobile com Flutter",
    teacher: "Juliana Alves",
    submittedDate: "11/06/2023",
    modules: 10,
  },
  {
    id: 3,
    title: "Segurança da Informação",
    teacher: "Ricardo Santos",
    submittedDate: "12/06/2023",
    modules: 6,
  },
]

const userManagement = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@email.com",
    role: "Aluno",
    status: "Ativo",
    joinDate: "01/01/2023",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    role: "Aluno",
    status: "Ativo",
    joinDate: "15/02/2023",
  },
  {
    id: 3,
    name: "Pedro Santos",
    email: "pedro.santos@email.com",
    role: "Professor",
    status: "Pendente",
    joinDate: "10/06/2023",
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana.costa@email.com",
    role: "Aluno",
    status: "Inativo",
    joinDate: "05/03/2023",
  },
]

const reports = [
  {
    id: 1,
    title: "Relatório de Engajamento - Maio 2023",
    description: "Análise detalhada do engajamento dos alunos nos cursos",
    date: "01/06/2023",
  },
  {
    id: 2,
    title: "Relatório de Vendas - Maio 2023",
    description: "Análise de vendas e receita da plataforma",
    date: "02/06/2023",
  },
  {
    id: 3,
    title: "Relatório de Desempenho - Q2 2023",
    description: "Análise de desempenho da plataforma no segundo trimestre",
    date: "10/06/2023",
  },
]

export function DashboardAdmin() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Painel do Administrador"
        text="Gerencie o ecossistema EAD, usuários, cursos e conferências."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="text-xs text-green-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Visão Geral de Engajamento</CardTitle>
            <CardDescription>Engajamento dos alunos nos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
              <BarChart className="h-8 w-8 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Gráfico de Engajamento</span>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Estatísticas de Uso</CardTitle>
            <CardDescription>Métricas de uso da plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Taxa de Conclusão de Cursos</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Participação em Aulas ao Vivo</span>
                  <span>72%</span>
                </div>
                <Progress value={72} className="bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Satisfação dos Alunos</span>
                  <span>95%</span>
                </div>
                <Progress value={95} className="bg-rocketseat-green/20 [&>div]:bg-rocketseat-green" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="cursos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cursos">Aprovação de Cursos</TabsTrigger>
          <TabsTrigger value="usuarios">Gerenciamento de Usuários</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>
        <TabsContent value="cursos" className="space-y-4">
          <div className="grid gap-4">
            {pendingCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{course.title}</CardTitle>
                    <Badge variant="outline">Pendente</Badge>
                  </div>
                  <CardDescription>
                    Professor: {course.teacher} • Enviado em: {course.submittedDate}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Este curso contém {course.modules} módulos e está aguardando aprovação.</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Revisar
                  </Button>
                  <Button variant="destructive" className="flex-1">
                    Rejeitar
                  </Button>
                  <Button className="flex-1 bg-rocketseat-green hover:bg-rocketseat-green-dark">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Aprovar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="usuarios" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-6 p-4 font-medium border-b">
              <div className="col-span-2">Nome</div>
              <div className="col-span-2">Email</div>
              <div>Função</div>
              <div>Status</div>
            </div>
            {userManagement.map((user) => (
              <div key={user.id} className="grid grid-cols-6 p-4 border-b last:border-0">
                <div className="col-span-2 font-medium">{user.name}</div>
                <div className="col-span-2 text-muted-foreground">{user.email}</div>
                <div>{user.role}</div>
                <div>
                  <Badge
                    variant={user.status === "Ativo" ? "default" : user.status === "Pendente" ? "outline" : "secondary"}
                  >
                    {user.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Adicionar Usuário</Button>
            <Button variant="outline">Gerenciar Permissões</Button>
          </div>
        </TabsContent>
        <TabsContent value="relatorios" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reports.map((report) => (
              <Card key={report.id}>
                <CardHeader>
                  <CardTitle className="text-base">{report.title}</CardTitle>
                  <CardDescription>Gerado em: {report.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{report.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    Visualizar
                  </Button>
                  <Button className="flex-1">Download</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
