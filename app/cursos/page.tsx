import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Play, Search, Star, User, Video } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    teacher: "Ana Silva",
    image: "/placeholder.svg?height=200&width=300",
    type: "Gravado",
    description: "Aprenda HTML, CSS, JavaScript, React e Node.js neste curso completo.",
    duration: "40 horas",
    level: "Iniciante",
    rating: 4.8,
    students: 1250,
    price: "R$ 199,90",
  },
  {
    id: 2,
    title: "Inteligência Artificial: Fundamentos",
    teacher: "Carlos Mendes",
    image: "/placeholder.svg?height=200&width=300",
    type: "Ao Vivo",
    description: "Entenda os conceitos básicos de IA e machine learning com exemplos práticos.",
    duration: "30 horas",
    level: "Intermediário",
    rating: 4.9,
    students: 890,
    price: "R$ 299,90",
  },
  {
    id: 3,
    title: "Design UX/UI Avançado",
    teacher: "Mariana Costa",
    image: "/placeholder.svg?height=200&width=300",
    type: "Gravado",
    description: "Técnicas avançadas de design de interfaces e experiência do usuário.",
    duration: "25 horas",
    level: "Avançado",
    rating: 4.7,
    students: 650,
    price: "R$ 249,90",
  },
  {
    id: 4,
    title: "Marketing Digital Estratégico",
    teacher: "Roberto Alves",
    image: "/placeholder.svg?height=200&width=300",
    type: "Ao Vivo",
    description: "Estratégias eficientes para marketing digital e crescimento de negócios.",
    duration: "20 horas",
    level: "Intermediário",
    rating: 4.6,
    students: 980,
    price: "R$ 179,90",
  },
  {
    id: 5,
    title: "Python para Data Science",
    teacher: "Julia Santos",
    image: "/placeholder.svg?height=200&width=300",
    type: "Gravado",
    description: "Aprenda Python aplicado à ciência de dados e análise estatística.",
    duration: "35 horas",
    level: "Intermediário",
    rating: 4.8,
    students: 1100,
    price: "R$ 229,90",
  },
  {
    id: 6,
    title: "DevOps e Cloud Computing",
    teacher: "Fernando Lima",
    image: "/placeholder.svg?height=200&width=300",
    type: "Gravado",
    description: "Domine as práticas de DevOps e computação em nuvem.",
    duration: "45 horas",
    level: "Avançado",
    rating: 4.9,
    students: 720,
    price: "R$ 349,90",
  },
]

export default function CursosPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Todos os Cursos</h1>
          <p className="text-muted-foreground">
            Explore nossa biblioteca completa de cursos e encontre o conhecimento que você precisa.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Pesquisar cursos..." className="pl-8" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="web">Desenvolvimento Web</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
                <SelectItem value="design">Design</SelectItem>
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
            <Select defaultValue="all">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="recorded">Gravado</SelectItem>
                <SelectItem value="live">Ao Vivo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="h-48 w-full object-cover" />
                <Badge
                  className="absolute top-2 right-2"
                  variant={course.type === "Gravado" ? "secondary" : "default"}
                  style={{
                    backgroundColor: course.type === "Gravado" ? "#996DFF" : "#04d361",
                    color: "white",
                  }}
                >
                  {course.type === "Gravado" ? <Video className="h-3 w-3 mr-1" /> : <Play className="h-3 w-3 mr-1" />}
                  {course.type}
                </Badge>
              </div>
              <CardHeader className="p-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold line-clamp-2">{course.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="mr-1 h-4 w-4" />
                    <span>Prof. {course.teacher}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-muted-foreground ml-1">({course.students})</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.level}</Badge>
                    <span className="text-lg font-bold text-rocketseat-purple">{course.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Button asChild className="w-full bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                  <Link href={`/cursos/${course.id}`}>Ver Detalhes</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
