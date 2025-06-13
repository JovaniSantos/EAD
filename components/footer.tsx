import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">EduPlatform</h3>
            <p className="text-sm text-muted-foreground">
              Plataforma moderna de ensino a distância com aulas gravadas e ao vivo.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-foreground">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/professores" className="text-muted-foreground hover:text-foreground">
                  Professores
                </Link>
              </li>
              <li>
                <Link href="/conferencias" className="text-muted-foreground hover:text-foreground">
                  Conferências
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ajuda" className="text-muted-foreground hover:text-foreground">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">contato@eduplatform.com</li>
              <li className="text-muted-foreground">+55 (11) 99999-9999</li>
              <li className="text-muted-foreground">Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2023 EduPlatform. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
