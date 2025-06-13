import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const conferences = [
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
  {
    id: 3,
    title: "Design Thinking na Prática",
    teacher: "Mariana Costa",
    date: "25/06/2023",
    time: "20:00",
    platform: "Zoom",
  },
  {
    id: 4,
    title: "Estratégias de Marketing para 2023",
    teacher: "Roberto Alves",
    date: "30/06/2023",
    time: "19:30",
    platform: "Jitsi",
  },
]

export function UpcomingConferences() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Próximas Conferências</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Participe de nossas conferências ao vivo e interaja diretamente com os professores.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {conferences.map((conference) => (
            <Card key={conference.id}>
              <CardHeader className="p-4">
                <h3 className="text-lg font-bold">{conference.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="mr-1 h-4 w-4" />
                  Prof. {conference.teacher}
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    {conference.date}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-1 h-4 w-4" />
                    {conference.time}
                  </div>
                  <div className="text-sm">Plataforma: {conference.platform}</div>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Button asChild className="w-full bg-rocketseat-green hover:bg-rocketseat-green-dark">
                  <Link href={`/conferencias/${conference.id}`}>Participar</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="border-rocketseat-green text-rocketseat-green hover:bg-rocketseat-green hover:text-white"
            asChild
          >
            <Link href="/conferencias">Ver Todas as Conferências</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
