import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

const teachers = [
  {
    id: 1,
    name: "Ana Silva",
    specialty: "Desenvolvimento Web",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Especialista em desenvolvimento web com mais de 10 anos de experiência.",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    specialty: "Inteligência Artificial",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Doutor em Ciência da Computação com foco em IA e Machine Learning.",
  },
  {
    id: 3,
    name: "Mariana Costa",
    specialty: "Design UX/UI",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Designer premiada com experiência em grandes empresas de tecnologia.",
  },
  {
    id: 4,
    name: "Roberto Alves",
    specialty: "Marketing Digital",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Consultor de marketing digital com vasta experiência em estratégias de crescimento.",
  },
]

export function FeaturedTeachers() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nossos Professores</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conheça os especialistas que compartilham seu conhecimento em nossa plataforma.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {teachers.map((teacher) => (
            <Card key={teacher.id}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <h3 className="text-lg font-bold">{teacher.name}</h3>
                <p className="text-sm text-muted-foreground">{teacher.specialty}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm">{teacher.bio}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-rocketseat-purple text-rocketseat-purple hover:bg-rocketseat-purple hover:text-white"
                >
                  <Link href={`/professores/${teacher.id}`}>Ver Perfil</Link>
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
            <Link href="/professores">Ver Todos os Professores</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
