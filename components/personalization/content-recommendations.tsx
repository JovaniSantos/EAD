import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Clock, Star, TrendingUpIcon as Trending } from "lucide-react"
import Link from "next/link"

const recommendedCourses = [
  {
    id: 1,
    title: "Desenvolvimento Web Avançado",
    description: "Aprenda técnicas avançadas de desenvolvimento web com React e Node.js",
    image: "/placeholder.svg?height=150&width=250",
    instructor: "Ana Silva",
    duration: "12 horas",
    level: "Avançado",
    match: 95,
    reason: "Baseado em seus cursos anteriores",
  },
  {
    id: 2,
    title: "Inteligência Artificial: Fundamentos",
    description: "Introdução aos conceitos e aplicações de IA e Machine Learning",
    image: "/placeholder.svg?height=150&width=250",
    instructor: "Carlos Mendes",
    duration: "10 horas",
    level: "Intermediário",
    match: 87,
    reason: "Tópico em alta na sua área",
  },
  {
    id: 3,
    title: "Design UX/UI para Desenvolvedores",
    description: "Aprenda princípios de design para criar interfaces mais intuitivas",
    image: "/placeholder.svg?height=150&width=250",
    instructor: "Mariana Costa",
    duration: "8 horas",
    level: "Iniciante",
    match: 82,
    reason: "Complementa suas habilidades",
  },
]

const continueLearning = [
  {
    id: 1,
    title: "JavaScript Moderno",
    progress: 65,
    lastLesson: "Promises e Async/Await",
    image: "/placeholder.svg?height=100&width=180",
    timeLeft: "2h 15min restantes",
  },
  {
    id: 2,
    title: "Banco de Dados SQL",
    progress: 42,
    lastLesson: "Consultas Avançadas",
    image: "/placeholder.svg?height=100&width=180",
    timeLeft: "3h 30min restantes",
  },
]

const trendingTopics = [
  { id: 1, name: "React Native", count: 1250 },
  { id: 2, name: "Machine Learning", count: 980 },
  { id: 3, name: "DevOps", count: 875 },
  { id: 4, name: "Blockchain", count: 720 },
  { id: 5, name: "Flutter", count: 650 },
]

export function ContentRecommendations() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Recomendações Personalizadas</h2>
        <p className="text-muted-foreground">
          Conteúdos selecionados especialmente para você com base em seu histórico e interesses.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Continue Aprendendo</CardTitle>
            <CardDescription>Retome de onde parou nos seus cursos em andamento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {continueLearning.map((course) => (
                <div key={course.id} className="flex overflow-hidden rounded-lg border">
                  <div className="w-1/3">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex w-2/3 flex-col justify-between p-4">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Última aula: {course.lastLesson}</p>
                      <div className="mt-2 h-2 w-full rounded-full bg-rocketseat-purple/20">
                        <div
                          className="h-2 rounded-full bg-rocketseat-purple"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        <Clock className="mr-1 inline-block h-3 w-3" />
                        {course.timeLeft}
                      </span>
                      <Button size="sm" className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                        Continuar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recommended" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recommended" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>Recomendados para Você</span>
          </TabsTrigger>
          <TabsTrigger value="trending" className="flex items-center gap-2">
            <Trending className="h-4 w-4" />
            <span>Tópicos em Alta</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-40 w-full object-cover"
                  />
                  <Badge className="absolute right-2 top-2" style={{ backgroundColor: "#8257e5", color: "white" }}>
                    {course.match}% match
                  </Badge>
                </div>
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {course.level}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium text-rocketseat-purple">Por que recomendamos:</span> {course.reason}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                    <Link href={`/cursos/${course.id}`}>Ver Detalhes</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tópicos em Alta</CardTitle>
              <CardDescription>Os assuntos mais populares na plataforma neste momento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rocketseat-purple/10">
                        <Trending className="h-5 w-5 text-rocketseat-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium">{topic.name}</h3>
                        <p className="text-sm text-muted-foreground">{topic.count} alunos estudando</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Todos os Tópicos
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
