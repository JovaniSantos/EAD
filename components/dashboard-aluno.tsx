import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Calendar, BadgeIcon as Certificate, Clock, Download, Play, Video } from "lucide-react"
import Link from "next/link"

const enrolledCourses = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    progress: 75,
    modules: 8,
    completedModules: 6,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "Inteligência Artificial: Fundamentos",
    progress: 30,
    modules: 10,
    completedModules: 3,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Design UX/UI Avançado",
    progress: 50,
    modules: 12,
    completedModules: 6,
    image: "/placeholder.svg?height=100&width=200",
  },
]

const upcomingLiveSessions = [
  {
    id: 1,
    title: "Tendências em Desenvolvimento Web 2023",
    teacher: "Ana Silva",
    date: "15/06/2023",
    time: "19:00",
    platform: "Zoom",
  },
  {
    id: 2,
    title: "O Futuro da Inteligência Artificial",
    teacher: "Carlos Mendes",
    date: "20/06/2023",
    time: "18:30",
    platform: "Google Meet",
  },
]

const certificates = [
  {
    id: 1,
    title: "Introdução ao JavaScript",
    date: "10/01/2023",
    teacher: "Ana Silva",
  },
  {
    id: 2,
    title: "HTML e CSS Básico",
    date: "05/12/2022",
    teacher: "Ana Silva",
  },
]

export function DashboardAluno() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Painel do Aluno"
        text="Gerencie seus cursos, acompanhe seu progresso e participe de aulas ao vivo."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Matriculados</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enrolledCourses.length}</div>
            <p className="text-xs text-muted-foreground">Cursos em andamento</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Médio</CardTitle>
            <Progress className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
            </div>
            <p className="text-xs text-muted-foreground">Média de conclusão dos cursos</p>
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
            <CardTitle className="text-sm font-medium">Certificados</CardTitle>
            <Certificate className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificates.length}</div>
            <p className="text-xs text-muted-foreground">Certificados obtidos</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="cursos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cursos">Meus Cursos</TabsTrigger>
          <TabsTrigger value="aulas-ao-vivo">Aulas ao Vivo</TabsTrigger>
          <TabsTrigger value="certificados">Certificados</TabsTrigger>
        </TabsList>
        <TabsContent value="cursos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
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
                    Progresso: {course.completedModules} de {course.modules} módulos
                  </CardDescription>
                  <Progress
                    value={course.progress}
                    className="mt-2 bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple"
                  />
                  <p className="mt-2 text-sm text-right">{course.progress}%</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild className="w-full bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                    <Link href={`/cursos/${course.id}`}>Continuar</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="aulas-ao-vivo" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingLiveSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <CardTitle>{session.title}</CardTitle>
                  <CardDescription>Prof. {session.teacher}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      {session.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4" />
                      {session.time}
                    </div>
                    <div className="text-sm">Plataforma: {session.platform}</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-rocketseat-green hover:bg-rocketseat-green-dark">
                    <Play className="mr-2 h-4 w-4" />
                    Participar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="certificados" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {certificates.map((certificate) => (
              <Card key={certificate.id}>
                <CardHeader>
                  <CardTitle>{certificate.title}</CardTitle>
                  <CardDescription>Prof. {certificate.teacher}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">Emitido em: {certificate.date}</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Certificado
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
