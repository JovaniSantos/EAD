import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Play, Search, Star, Video } from "lucide-react"
import Link from "next/link"

const enrolledCourses = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    instructor: "Ana Silva",
    progress: 75,
    totalLessons: 45,
    completedLessons: 34,
    image: "/placeholder.svg?height=200&width=300",
    category: "Desenvolvimento",
    level: "Iniciante",
    rating: 4.8,
    lastAccessed: "Hoje",
    nextLesson: "Introdução ao React",
    estimatedTime: "2h 30min restantes",
  },
  {
    id: 2,
    title: "JavaScript Avançado",
    instructor: "Carlos Mendes",
    progress: 45,
    totalLessons: 30,
    completedLessons: 14,
    image: "/placeholder.svg?height=200&width=300",
    category: "Programação",
    level: "Avançado",
    rating: 4.9,
    lastAccessed: "Ontem",
    nextLesson: "Promises e Async/Await",
    estimatedTime: "4h 15min restantes",
  },
  {
    id: 3,
    title: "Design UX/UI Fundamentals",
    instructor: "Mariana Costa",
    progress: 90,
    totalLessons: 25,
    completedLessons: 23,
    image: "/placeholder.svg?height=200&width=300",
    category: "Design",
    level: "Intermediário",
    rating: 4.7,
    lastAccessed: "2 dias atrás",
    nextLesson: "Projeto Final",
    estimatedTime: "1h restante",
  },
]

const availableCourses = [
  {
    id: 4,
    title: "Python para Data Science",
    instructor: "Julia Santos",
    image: "/placeholder.svg?height=200&width=300",
    category: "Data Science",
    level: "Intermediário",
    rating: 4.8,
    students: 1200,
    duration: "35 horas",
    price: "R$ 229,90",
  },
  {
    id: 5,
    title: "DevOps e Cloud Computing",
    instructor: "Fernando Lima",
    image: "/placeholder.svg?height=200&width=300",
    category: "DevOps",
    level: "Avançado",
    rating: 4.9,
    students: 850,
    duration: "45 horas",
    price: "R$ 349,90",
  },
  {
    id: 6,
    title: "Marketing Digital Estratégico",
    instructor: "Roberto Alves",
    image: "/placeholder.svg?height=200&width=300",
    category: "Marketing",
    level: "Iniciante",
    rating: 4.6,
    students: 2100,
    duration: "20 horas",
    price: "R$ 179,90",
  },
]

export default function CursosAlunoPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Meus Cursos</h1>
        <p className="text-muted-foreground">
          Gerencie seus cursos matriculados e explore novos conteúdos para expandir seus conhecimentos.
        </p>
      </div>

      <Tabs defaultValue="enrolled" className="space-y-4">
        <TabsList>
          <TabsTrigger value="enrolled" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Cursos Matriculados ({enrolledCourses.length})</span>
          </TabsTrigger>
          <TabsTrigger value="available" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            <span>Explorar Cursos</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="enrolled" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Pesquisar meus cursos..." className="pl-8" />
            </div>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Acessados recentemente</SelectItem>
                <SelectItem value="progress">Progresso</SelectItem>
                <SelectItem value="name">Nome A-Z</SelectItem>
                <SelectItem value="completion">Próximos ao fim</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-40 w-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-rocketseat-purple text-white">
                    {course.progress}% concluído
                  </Badge>
                </div>
                <CardHeader className="p-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <CardDescription>Prof. {course.instructor}</CardDescription>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{course.category}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso</span>
                        <span>
                          {course.completedLessons}/{course.totalLessons} aulas
                        </span>
                      </div>
                      <Progress
                        value={course.progress}
                        className="h-2 bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple"
                      />
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Último acesso:</span>
                        <span>{course.lastAccessed}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Próxima aula:</span>
                        <span className="font-medium">{course.nextLesson}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Tempo restante:</span>
                        <span>{course.estimatedTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex gap-2">
                  <Button asChild className="flex-1 bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                    <Link href={`/cursos/${course.id}`}>
                      <Play className="mr-2 h-4 w-4" />
                      Continuar
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Pesquisar cursos disponíveis..." className="pl-8" />
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
                  <SelectItem value="data">Data Science</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Nível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="beginner">Iniciante</SelectItem>
                  <SelectItem value="intermediate">Intermediário</SelectItem>
                  <SelectItem value="advanced">Avançado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-40 w-full object-cover"
                  />
                  <Badge className="absolute top-2 left-2" variant="outline">
                    {course.category}
                  </Badge>
                </div>
                <CardHeader className="p-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <CardDescription>Prof. {course.instructor}</CardDescription>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{course.level}</Badge>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duração:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Alunos:</span>
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Preço:</span>
                      <span className="font-bold text-rocketseat-purple">{course.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild className="w-full bg-rocketseat-green hover:bg-rocketseat-green-dark">
                    <Link href={`/cursos/${course.id}`}>Matricular-se</Link>
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
