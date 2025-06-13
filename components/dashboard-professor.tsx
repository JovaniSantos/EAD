import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Calendar, MessageSquare, Plus, Upload, Users, Video } from "lucide-react"
import Link from "next/link"

const createdCourses = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    students: 120,
    modules: 8,
    image: "/placeholder.svg?height=100&width=200",
    engagement: 85,
  },
  {
    id: 2,
    title: "JavaScript Avançado",
    students: 75,
    modules: 6,
    image: "/placeholder.svg?height=100&width=200",
    engagement: 78,
  },
  {
    id: 3,
    title: "React para Iniciantes",
    students: 95,
    modules: 5,
    image: "/placeholder.svg?height=100&width=200",
    engagement: 92,
  },
]

const upcomingLiveSessions = [
  {
    id: 1,
    title: "Tendências em Desenvolvimento Web 2023",
    date: "15/06/2023",
    time: "19:00",
    platform: "Zoom",
    registeredStudents: 45,
  },
  {
    id: 2,
    title: "Introdução ao React Hooks",
    date: "22/06/2023",
    time: "18:30",
    platform: "Google Meet",
    registeredStudents: 32,
  },
]

const studentQuestions = [
  {
    id: 1,
    student: "João Silva",
    course: "Desenvolvimento Web Completo",
    question: "Como posso implementar autenticação JWT no meu projeto?",
    date: "10/06/2023",
  },
  {
    id: 2,
    student: "Maria Oliveira",
    course: "JavaScript Avançado",
    question: "Qual a diferença entre let, const e var?",
    date: "11/06/2023",
  },
  {
    id: 3,
    student: "Pedro Santos",
    course: "React para Iniciantes",
    question: "Como funciona o useEffect com dependências vazias?",
    date: "12/06/2023",
  },
]

export function DashboardProfessor() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Painel do Professor" text="Gerencie seus cursos, aulas e interaja com seus alunos.">
        <Button className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
          <Plus className="mr-2 h-4 w-4" />
          Novo Curso
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Criados</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{createdCourses.length}</div>
            <p className="text-xs text-muted-foreground">Cursos ativos na plataforma</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{createdCourses.reduce((acc, course) => acc + course.students, 0)}</div>
            <p className="text-xs text-muted-foreground">Alunos matriculados em seus cursos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximas Aulas Ao Vivo</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingLiveSessions.length}</div>
            <p className="text-xs text-muted-foreground">Aulas agendadas para os próximos dias</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Perguntas Pendentes</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studentQuestions.length}</div>
            <p className="text-xs text-muted-foreground">Dúvidas de alunos para responder</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="cursos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cursos">Meus Cursos</TabsTrigger>
          <TabsTrigger value="aulas-ao-vivo">Aulas ao Vivo</TabsTrigger>
          <TabsTrigger value="perguntas">Perguntas dos Alunos</TabsTrigger>
        </TabsList>
        <TabsContent value="cursos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {createdCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="p-4">
                  <div className="aspect-video overflow-hidden rounded-md">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {course.students} alunos • {course.modules} módulos
                  </CardDescription>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Engajamento</span>
                      <span>{course.engagement}%</span>
                    </div>
                    <Progress
                      value={course.engagement}
                      className="mt-1 bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-rocketseat-purple text-rocketseat-purple hover:bg-rocketseat-purple hover:text-white"
                    asChild
                  >
                    <Link href={`/dashboard/professor/cursos/${course.id}`}>Gerenciar</Link>
                  </Button>
                  <Button className="flex-1 bg-rocketseat-purple hover:bg-rocketseat-purple-dark" asChild>
                    <Link href={`/dashboard/professor/cursos/${course.id}/conteudo`}>
                      <Upload className="mr-2 h-4 w-4" />
                      Conteúdo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="aulas-ao-vivo" className="space-y-4">
          <div className="flex justify-end">
            <Button className="bg-rocketseat-green hover:bg-rocketseat-green-dark">
              <Plus className="mr-2 h-4 w-4" />
              Agendar Nova Aula
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingLiveSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <CardTitle>{session.title}</CardTitle>
                  <CardDescription>
                    {session.date} às {session.time} • {session.platform}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Alunos inscritos</span>
                      <span>{session.registeredStudents}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Editar
                  </Button>
                  <Button className="flex-1">Iniciar Aula</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="perguntas" className="space-y-4">
          <div className="grid gap-4">
            {studentQuestions.map((question) => (
              <Card key={question.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{question.student}</CardTitle>
                    <span className="text-xs text-muted-foreground">{question.date}</span>
                  </div>
                  <CardDescription>{question.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{question.question}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Responder</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
