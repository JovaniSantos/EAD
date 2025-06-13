import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Download, Play, User, Video } from "lucide-react"

interface CourseDetailProps {
  id: string
}

export function CourseDetail({ id }: CourseDetailProps) {
  // Simulando dados do curso
  const course = {
    id,
    title: "Desenvolvimento Web Completo",
    teacher: "Ana Silva",
    description:
      "Aprenda HTML, CSS, JavaScript, React e Node.js neste curso completo de desenvolvimento web. Ideal para iniciantes que desejam se tornar desenvolvedores full-stack.",
    image: "/placeholder.svg?height=400&width=800",
    type: "Gravado",
    modules: [
      {
        id: 1,
        title: "Introdução ao HTML",
        lessons: [
          { id: 1, title: "Estrutura básica do HTML", duration: "15:30", completed: true },
          { id: 2, title: "Tags e atributos", duration: "20:45", completed: true },
          { id: 3, title: "Formulários e inputs", duration: "25:10", completed: false },
        ],
      },
      {
        id: 2,
        title: "CSS Fundamentals",
        lessons: [
          { id: 4, title: "Seletores e propriedades", duration: "18:20", completed: false },
          { id: 5, title: "Box model e layout", duration: "22:15", completed: false },
          { id: 6, title: "Flexbox e Grid", duration: "30:05", completed: false },
        ],
      },
      {
        id: 3,
        title: "JavaScript Básico",
        lessons: [
          { id: 7, title: "Variáveis e tipos de dados", duration: "16:40", completed: false },
          { id: 8, title: "Funções e escopo", duration: "24:30", completed: false },
          { id: 9, title: "Manipulação do DOM", duration: "28:15", completed: false },
        ],
      },
    ],
    liveSessions: [
      {
        id: 1,
        title: "Q&A: Dúvidas sobre HTML e CSS",
        date: "15/06/2023",
        time: "19:00",
        platform: "Zoom",
      },
      {
        id: 2,
        title: "Workshop: Criando um site responsivo",
        date: "22/06/2023",
        time: "18:30",
        platform: "Google Meet",
      },
    ],
    materials: [
      { id: 1, title: "Slides - Introdução ao HTML", type: "PDF" },
      { id: 2, title: "Código fonte - Exemplos HTML", type: "ZIP" },
      { id: 3, title: "Cheat sheet - CSS", type: "PDF" },
    ],
    progress: 25,
    totalLessons: 9,
    completedLessons: 2,
  }

  return (
    <div className="container py-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img src={course.image || "/placeholder.svg"} alt={course.title} className="h-full w-full object-cover" />
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <Badge
                variant={course.type === "Gravado" ? "secondary" : "default"}
                className="ml-2"
                style={{
                  backgroundColor: course.type === "Gravado" ? "#996DFF" : "#04d361",
                  color: "white",
                }}
              >
                {course.type === "Gravado" ? <Video className="mr-1 h-3 w-3" /> : <Play className="mr-1 h-3 w-3" />}
                {course.type}
              </Badge>
            </div>
            <div className="mt-2 flex items-center text-muted-foreground">
              <User className="mr-1 h-4 w-4" />
              <span>Prof. {course.teacher}</span>
            </div>
            <p className="mt-4">{course.description}</p>
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm">
                <span>Progresso do curso</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="mt-2 bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple" />
              <p className="mt-2 text-sm text-muted-foreground">
                {course.completedLessons} de {course.totalLessons} aulas concluídas
              </p>
            </div>
          </div>
          <Tabs defaultValue="gravadas" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gravadas">Aulas Gravadas</TabsTrigger>
              <TabsTrigger value="ao-vivo">Aulas ao Vivo</TabsTrigger>
              <TabsTrigger value="materiais">Materiais</TabsTrigger>
            </TabsList>
            <TabsContent value="gravadas" className="mt-4">
              <div className="space-y-4">
                {course.modules.map((module) => (
                  <Card key={module.id}>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold">{module.title}</h3>
                      <Separator className="my-4" />
                      <div className="space-y-2">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between rounded-md p-2 hover:bg-muted/50"
                          >
                            <div className="flex items-center">
                              {lesson.completed ? (
                                <div className="mr-2 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3 w-3 text-primary-foreground"
                                  >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                </div>
                              ) : (
                                <div className="mr-2 h-5 w-5 rounded-full border border-muted-foreground" />
                              )}
                              <span className={lesson.completed ? "text-muted-foreground" : ""}>{lesson.title}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              <Button variant="ghost" size="icon" className="ml-2">
                                <Play className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ao-vivo" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2">
                {course.liveSessions.map((session) => (
                  <Card key={session.id}>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold">{session.title}</h3>
                      <div className="mt-2 space-y-2">
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
                      <Button className="mt-4 w-full bg-rocketseat-green hover:bg-rocketseat-green-dark">
                        <Play className="mr-2 h-4 w-4" />
                        Participar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="materiais" className="mt-4">
              <div className="space-y-2">
                {course.materials.map((material) => (
                  <div key={material.id} className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <h4 className="font-medium">{material.title}</h4>
                      <p className="text-sm text-muted-foreground">{material.type}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold">Informações do Curso</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium">Professor</h3>
                  <div className="mt-2 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-muted">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt={course.teacher}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{course.teacher}</p>
                      <p className="text-sm text-muted-foreground">Desenvolvimento Web</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium">Conteúdo</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      {course.modules.length} módulos
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      {course.totalLessons} aulas
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      {course.liveSessions.length} aulas ao vivo
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      {course.materials.length} materiais para download
                    </li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium">Certificado</h3>
                  <p className="mt-2 text-sm">Receba um certificado após concluir todas as aulas do curso.</p>
                </div>
                <Button className="w-full bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                  Continuar Estudando
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-rocketseat-purple text-rocketseat-purple hover:bg-rocketseat-purple hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Certificado
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="mt-4">
            <h3 className="font-medium">Compartilhar</h3>
            <div className="mt-2 flex space-x-2">
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
