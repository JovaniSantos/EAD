import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Star, Users } from "lucide-react"
import Link from "next/link"

const teachers = [
  {
    id: 1,
    name: "Ana Silva",
    specialty: "Desenvolvimento Web",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Especialista em desenvolvimento web com mais de 10 anos de experiência em React, Node.js e tecnologias modernas.",
    rating: 4.9,
    students: 2500,
    courses: 8,
    experience: "10+ anos",
    company: "Google",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    specialty: "Inteligência Artificial",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Doutor em Ciência da Computação com foco em IA e Machine Learning. Pesquisador e consultor em grandes empresas.",
    rating: 4.8,
    students: 1800,
    courses: 6,
    experience: "15+ anos",
    company: "Microsoft",
  },
  {
    id: 3,
    name: "Mariana Costa",
    specialty: "Design UX/UI",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Designer premiada com experiência em grandes empresas de tecnologia. Especialista em design centrado no usuário.",
    rating: 4.9,
    students: 1200,
    courses: 5,
    experience: "8+ anos",
    company: "Apple",
  },
  {
    id: 4,
    name: "Roberto Alves",
    specialty: "Marketing Digital",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Consultor de marketing digital com vasta experiência em estratégias de crescimento e performance marketing.",
    rating: 4.7,
    students: 3200,
    courses: 12,
    experience: "12+ anos",
    company: "Meta",
  },
  {
    id: 5,
    name: "Julia Santos",
    specialty: "Data Science",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Cientista de dados com PhD em Estatística. Especialista em Python, R e análise de big data.",
    rating: 4.8,
    students: 1600,
    courses: 7,
    experience: "9+ anos",
    company: "Netflix",
  },
  {
    id: 6,
    name: "Fernando Lima",
    specialty: "DevOps & Cloud",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Arquiteto de soluções cloud com certificações AWS, Azure e GCP. Especialista em infraestrutura e automação.",
    rating: 4.9,
    students: 1400,
    courses: 9,
    experience: "11+ anos",
    company: "Amazon",
  },
]

export default function ProfessoresPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Nossos Professores</h1>
          <p className="text-muted-foreground">
            Conheça os especialistas que compartilham seu conhecimento e experiência em nossa plataforma.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Pesquisar professores..." className="pl-8" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Especialidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="web">Desenvolvimento Web</SelectItem>
                <SelectItem value="ai">Inteligência Artificial</SelectItem>
                <SelectItem value="design">Design UX/UI</SelectItem>
                <SelectItem value="marketing">Marketing Digital</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
                <SelectItem value="devops">DevOps & Cloud</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="rating">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Avaliação</SelectItem>
                <SelectItem value="students">Nº de Alunos</SelectItem>
                <SelectItem value="courses">Nº de Cursos</SelectItem>
                <SelectItem value="experience">Experiência</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4">
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-rocketseat-purple/20"
                  />
                </div>
                <h3 className="text-xl font-bold">{teacher.name}</h3>
                <p className="text-rocketseat-purple font-medium">{teacher.specialty}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{teacher.rating}</span>
                  <span className="text-sm text-muted-foreground">({teacher.students} alunos)</span>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{teacher.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Experiência:</span>
                    <Badge variant="outline">{teacher.experience}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Empresa:</span>
                    <span className="font-medium">{teacher.company}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4" />
                      <span>{teacher.courses} cursos</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      <span>{teacher.students} alunos</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-rocketseat-purple text-rocketseat-purple hover:bg-rocketseat-purple hover:text-white"
                >
                  <Link href={`/professores/${teacher.id}`}>Ver Perfil Completo</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
