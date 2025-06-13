import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Play, Search, User, Users, Video } from "lucide-react"
import Link from "next/link"

const upcomingLives = [
  {
    id: 1,
    title: "Tendências em React 2024",
    instructor: "Ana Silva",
    date: "2024-06-15",
    time: "19:00",
    duration: "2h",
    platform: "Zoom",
    description:
      "Explore as principais novidades e tendências do React para 2024, incluindo Server Components e novas APIs.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 245,
    maxParticipants: 500,
    course: "Desenvolvimento Web Completo",
    status: "upcoming",
    category: "Desenvolvimento",
  },
  {
    id: 2,
    title: "Workshop: Design System na Prática",
    instructor: "Mariana Costa",
    date: "2024-06-18",
    time: "20:00",
    duration: "3h",
    platform: "Google Meet",
    description: "Aprenda a criar e implementar um design system completo do zero, com componentes reutilizáveis.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 156,
    maxParticipants: 200,
    course: "Design UX/UI Fundamentals",
    status: "upcoming",
    category: "Design",
  },
  {
    id: 3,
    title: "Q&A: JavaScript Avançado",
    instructor: "Carlos Mendes",
    date: "2024-06-20",
    time: "18:30",
    duration: "1h 30min",
    platform: "Zoom",
    description: "Sessão de perguntas e respostas sobre conceitos avançados de JavaScript e resolução de dúvidas.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 89,
    maxParticipants: 150,
    course: "JavaScript Avançado",
    status: "upcoming",
    category: "Programação",
  },
]

const pastLives = [
  {
    id: 4,
    title: "Introdução ao TypeScript",
    instructor: "Ana Silva",
    date: "2024-06-10",
    time: "19:00",
    duration: "2h",
    platform: "Zoom",
    description: "Fundamentos do TypeScript e como migrar projetos JavaScript existentes.",
    image: "/placeholder.svg?height=200&width=300",
    views: 1250,
    course: "Desenvolvimento Web Completo",
    status: "recorded",
    category: "Desenvolvimento",
  },
  {
    id: 5,
    title: "Princípios de UX Design",
    instructor: "Mariana Costa",
    date: "2024-06-08",
    time: "20:00",
    duration: "2h 30min",
    platform: "Google Meet",
    description: "Conceitos fundamentais de experiência do usuário e como aplicá-los em projetos reais.",
    image: "/placeholder.svg?height=200&width=300",
    views: 890,
    course: "Design UX/UI Fundamentals",
    status: "recorded",
    category: "Design",
  },
]

const liveLives = [
  {
    id: 6,
    title: "Debugging Avançado em JavaScript",
    instructor: "Carlos Mendes",
    startTime: "19:00",
    duration: "1h 45min",
    platform: "Zoom",
    description: "Técnicas avançadas de debugging e ferramentas para identificar e corrigir bugs complexos.",
    image: "/placeholder.svg?height=200&width=300",
    viewers: 156,
    course: "JavaScript Avançado",
    status: "live",
    category: "Programação",
  },
]

export default function AulasAoVivoPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Aulas ao Vivo</h1>
        <p className="text-muted-foreground">
          Participe de aulas interativas em tempo real e tire suas dúvidas diretamente com os professores.
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Próximas ({upcomingLives.length})</span>
          </TabsTrigger>
          <TabsTrigger value="live" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
              <Video className="h-4 w-4" />
            </div>
            <span>Ao Vivo ({liveLives.length})</span>
          </TabsTrigger>
          <TabsTrigger value="recorded" className="flex items-center gap-2">
            <Play className="h-4 w-4" />
            <span>Gravadas ({pastLives.length})</span>
          </TabsTrigger>
        </TabsList>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Pesquisar aulas..." className="pl-8" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="development">Desenvolvimento</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="programming">Programação</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Curso" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os cursos</SelectItem>
                <SelectItem value="web">Desenvolvimento Web</SelectItem>
                <SelectItem value="js">JavaScript Avançado</SelectItem>
                <SelectItem value="design">Design UX/UI</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingLives.map((live) => (
              <Card key={live.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={live.image || "/placeholder.svg"} alt={live.title} className="h-40 w-full object-cover" />
                  <Badge className="absolute top-2 right-2 bg-rocketseat-green text-white">
                    <Calendar className="h-3 w-3 mr-1" />
                    Agendada
                  </Badge>
                  <Badge className="absolute top-2 left-2" variant="outline">
                    {live.category}
                  </Badge>
                </div>
                <CardHeader className="p-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg line-clamp-2">{live.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        Prof. {live.instructor}
                      </div>
                    </CardDescription>
                    <p className="text-sm text-muted-foreground line-clamp-2">{live.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-rocketseat-purple" />
                        <span>{new Date(live.date).toLocaleDateString("pt-BR")}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-rocketseat-purple" />
                        <span>{live.time}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-rocketseat-purple">⏱️</span>
                        <span>{live.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-rocketseat-purple" />
                        <span>
                          {live.registered}/{live.maxParticipants}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Curso:</span>
                        <span className="font-medium">{live.course}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Plataforma:</span>
                        <span>{live.platform}</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-rocketseat-purple h-2 rounded-full"
                        style={{
                          width: `${(live.registered / live.maxParticipants) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex gap-2">
                  <Button asChild className="flex-1 bg-rocketseat-green hover:bg-rocketseat-green-dark">
                    <Link href={`/aulas-ao-vivo/${live.id}`}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Participar
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Users className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live" className="space-y-4">
          {liveLives.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {liveLives.map((live) => (
                <Card
                  key={live.id}
                  className="overflow-hidden border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20"
                >
                  <div className="relative">
                    <img src={live.image || "/placeholder.svg"} alt={live.title} className="h-40 w-full object-cover" />
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white animate-pulse">
                      <div className="h-2 w-2 bg-white rounded-full mr-1"></div>
                      AO VIVO
                    </Badge>
                    <Badge className="absolute top-2 left-2" variant="outline">
                      {live.category}
                    </Badge>
                  </div>
                  <CardHeader className="p-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg line-clamp-2">{live.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          Prof. {live.instructor}
                        </div>
                      </CardDescription>
                      <p className="text-sm text-muted-foreground line-clamp-2">{live.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-red-500" />
                          <span>Iniciou às {live.startTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-red-500" />
                          <span>{live.viewers} assistindo</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Curso:</span>
                          <span className="font-medium">{live.course}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Plataforma:</span>
                          <span>{live.platform}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button asChild className="w-full bg-red-500 hover:bg-red-600 text-white">
                      <Link href={`/aulas-ao-vivo/${live.id}`}>
                        <Play className="mr-2 h-4 w-4" />
                        Entrar na Aula
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Video className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Nenhuma aula ao vivo no momento</h3>
                <p className="text-muted-foreground">
                  Não há aulas acontecendo agora. Verifique as próximas aulas agendadas.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="recorded" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {pastLives.map((live) => (
              <Card key={live.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={live.image || "/placeholder.svg"} alt={live.title} className="h-40 w-full object-cover" />
                  <Badge className="absolute top-2 right-2 bg-rocketseat-purple text-white">
                    <Play className="h-3 w-3 mr-1" />
                    Gravada
                  </Badge>
                  <Badge className="absolute top-2 left-2" variant="outline">
                    {live.category}
                  </Badge>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg line-clamp-2">{live.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        Prof. {live.instructor}
                      </div>
                    </CardDescription>
                    <p className="text-sm text-muted-foreground line-clamp-2">{live.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-rocketseat-purple" />
                        <span>{new Date(live.date).toLocaleDateString("pt-BR")}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-rocketseat-purple" />
                        <span>{live.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-rocketseat-purple" />
                        <span>{live.views} visualizações</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-rocketseat-purple">📺</span>
                        <span>{live.platform}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Curso:</span>
                        <span className="font-medium">{live.course}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild className="w-full bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                    <Link href={`/aulas-ao-vivo/${live.id}`}>
                      <Play className="mr-2 h-4 w-4" />
                      Assistir Gravação
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
