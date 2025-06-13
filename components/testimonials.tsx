import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "João Pereira",
    role: "Estudante de Tecnologia",
    content:
      "Os cursos são excelentes! Consegui aprender desenvolvimento web em apenas 3 meses e já estou trabalhando na área.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Oliveira",
    role: "Profissional de Marketing",
    content: "As aulas ao vivo são muito interativas. Os professores são atenciosos e respondem todas as dúvidas.",
    rating: 5,
  },
  {
    id: 3,
    name: "Pedro Santos",
    role: "Designer Gráfico",
    content: "Melhorei muito minhas habilidades de UX/UI com os cursos da plataforma. Recomendo a todos!",
    rating: 4,
  },
]

const stats = [
  { value: "10k+", label: "Alunos" },
  { value: "200+", label: "Cursos" },
  { value: "50+", label: "Professores" },
  { value: "95%", label: "Satisfação" },
]

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">O Que Dizem Nossos Alunos</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Veja o que nossos alunos estão falando sobre a experiência na plataforma.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader className="p-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-rocketseat-purple text-rocketseat-purple" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <StarIcon key={i + testimonial.rating} className="h-4 w-4 fill-muted text-muted" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <blockquote className="space-y-2">
                  <p className="text-sm">{testimonial.content}</p>
                  <footer className="text-sm font-medium">
                    {testimonial.name} — {testimonial.role}
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
