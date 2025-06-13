import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Play, Video } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    teacher: "Ana Silva",
    image: "/placeholder.svg?height=200&width=300",
    type: "Gravado",
    description: "Aprenda HTML, CSS, JavaScript, React e Node.js neste curso completo.",
  },
  {
    id: 2,
    title: "Inteligência Artificial: Fundamentos",
    teacher: "Carlos Mendes",
    image: "/placeholder.svg?height=200&width=300",
    type: "Ao Vivo",
    description: "Entenda os conceitos básicos de IA e machine learning com exemplos práticos.",
  },
  {
    id: 3,
    title: "Design UX/UI Avançado",
    teacher: "Mariana Costa",
    image: "/placeholder.svg?height=200&width=300",
    type: "Gravado",
    description: "Técnicas avançadas de design de interfaces e experiência do usuário.",
  },
  {
    id: 4,
    title: "Marketing Digital Estratégico",
    teacher: "Roberto Alves",
    image: "/placeholder.svg?height=200&width=300",
    type: "Ao Vivo",
    description: "Estratégias eficientes para marketing digital e crescimento de negócios.",
  },
]

export function FeaturedCourses() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Cursos em Destaque</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conheça nossos cursos mais populares, disponíveis em formato gravado ou ao vivo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full object-cover h-48"
                />
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
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="text-sm text-muted-foreground">Prof. {course.teacher}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm">{course.description}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button asChild className="w-full bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                  <Link href={`/cursos/${course.id}`}>Ver Detalhes</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="border-rocketseat-purple text-rocketseat-purple hover:bg-rocketseat-purple hover:text-white"
            asChild
          >
            <Link href="/cursos">Ver Todos os Cursos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
