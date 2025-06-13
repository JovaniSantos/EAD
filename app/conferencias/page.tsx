import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Play, Search, User, Users } from "lucide-react"
import Link from "next/link"

const conferences = [
  {
    id: 1,
    title: "Tendências em Desenvolvimento Web 2024",
    teacher: "Ana Silva",
    date: "15/06/2024",
    time: "19:00",
    duration: "2h",
    platform: "Zoom",
    description: "Explore as principais tendências e tecnologias que estão moldando o futuro do desenvolvimento web.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 245,
    maxParticipants: 500,
    category: "Desenvolvimento",
    level: "Intermediário",
    status: "upcoming",
  },
  {
    id: 2,
    title: "O Futuro da Inteligência Artificial",
    teacher: "Carlos Mendes",
    date: "20/06/2024",
    time: "18:30",
    duration: "1h 30min",
    platform: "Google Meet",
    description: "Uma visão abrangente sobre o futuro da IA e seu impacto na sociedade e no mercado de trabalho.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 189,
    maxParticipants: 300,
    category: "Inteligência Artificial",
    level: "Iniciante",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Design Thinking na Prática",
    teacher: "Mariana Costa",
    date: "25/06/2024",
    time: "20:00",
    duration: "2h 30min",
    platform: "Zoom",
    description: "Workshop prático sobre como aplicar Design Thinking em projetos reais de UX/UI.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 156,
    maxParticipants: 200,
    category: "Design",
    level: "Intermediário",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Estratégias de Marketing Digital para 2024",
    teacher: "Roberto Alves",
    date: "30/06/2024",
    time: "19:30",
    duration: "2h",
    platform: "Jitsi",
    description: "Descubra as estratégias mais eficazes de marketing digital para o próximo ano.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 298,
    maxParticipants: 400,
    category: "Marketing",
    level: "Avançado",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Python para Data Science: Primeiros Passos",
    teacher: "Julia Santos",
    date: "05/07/2024",
    time: "14:00",
    duration: "3h",
    platform: "Zoom",
    description: "Introdução prática ao Python aplicado à ciência de dados com exemplos reais.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 167,
    maxParticipants: 250,
    category: "Data Science",
    level: "Iniciante",
    status: "upcoming",
  },
  {
    id: 6,
    title: "DevOps: Automatização e CI/CD",
    teacher: "Fernando Lima",
    date: "10/07/2024",
    time: "16:00",
    duration: "2h 15min",
    platform: "Google Meet",
    description: "Aprenda a implementar pipelines de CI/CD e automatizar processos de desenvolvimento.",
    image: "/placeholder.svg?height=200&width=300",
    registered: 134,
    maxParticipants: 180,
    category: "DevOps",
    level: "Avançado",
    status: "upcoming",
  },
]

export default function ConferenciasPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Conferências e Webinars</h1>
          <p className="text-muted-foreground">
            Participe de eventos ao vivo com especialistas e amplie seus conhecimentos em tempo real.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Pesquisar conferências..." className="pl-8" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="development">Desenvolvimento</SelectItem>
                <SelectItem value="ai">Inteligência Artificial</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="upcoming">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upcoming">Próximas</SelectItem>
                <SelectItem value="live">Ao Vivo</SelectItem>
                <SelectItem value="past">Passadas</SelectItem>
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {conferences.map((conference) => (
            <Card key={conference.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={conference.image || "/placeholder.svg"}
                  alt={conference.title}
                  className="h-48 w-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-rocketseat-green text-white">
                  <Play className="h-3 w-3 mr-1" />
                  Ao Vivo
                </Badge>
                <Badge className="absolute top-2 left-2" variant="outline">
                  {conference.category}
                </Badge>
              </div>
              <CardHeader className="p-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold line-clamp-2">{conference.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="mr-1 h-4 w-4" />
                    <span>Prof. {conference.teacher}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{conference.description}</p>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-rocketseat-purple" />
                      <span>{conference.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-rocketseat-purple" />
                      <span>{conference.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-rocketseat-purple">⏱️</span>
                      <span>{conference.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-rocketseat-purple" />
                      <span>
                        {conference.registered}/{conference.maxParticipants}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{conference.level}</Badge>
                    <span className="text-sm text-muted-foreground">Plataforma: {conference.platform}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-rocketseat-purple h-2 rounded-full"
                      style={{
                        width: `${(conference.registered / conference.maxParticipants) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Button asChild className="w-full bg-rocketseat-green hover:bg-rocketseat-green-dark">
                  <Link href={`/conferencias/${conference.id}`}>Inscrever-se Gratuitamente</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
