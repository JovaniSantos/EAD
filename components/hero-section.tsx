import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rocketseat-purple to-rocketseat-purple-dark">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Estude no seu ritmo ou participe de aulas ao vivo
              </h1>
              <p className="max-w-[600px] text-rocketseat-gray-light md:text-xl">
                Acesse conteúdo de qualidade quando e onde quiser, ou interaja em tempo real com os melhores
                professores.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-rocketseat-green hover:bg-rocketseat-green-dark text-white" asChild>
                <Link href="/cursos">Explorar Cursos</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link href="/conferencias">Ver Conferências</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Estudantes aprendendo online"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="550"
              src="/placeholder.svg?height=550&width=800"
              width="800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
