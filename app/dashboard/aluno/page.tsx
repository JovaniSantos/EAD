import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Award, Video, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard do Aluno</h1>
          <p className="text-muted-foreground">Acompanhe seu progresso e gerencie seus estudos.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Matriculados</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Cursos em andamento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52%</div>
            <p className="text-xs text-muted-foreground">Média de conclusão dos cursos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximas Aulas Ao Vivo</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Aulas agendadas para os próximos dias</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificados</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Certificados obtidos</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="cursos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cursos">Meus Cursos</TabsTrigger>
          <TabsTrigger value="aulas">Aulas ao Vivo</TabsTrigger>
          <TabsTrigger value="certificados">Certificados</TabsTrigger>
        </TabsList>

        <TabsContent value="cursos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Desenvolvimento Web Completo</CardTitle>
                <CardDescription className="mt-2">Aprenda HTML, CSS, JavaScript e React do zero</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso: 6 de 8 módulos</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/dashboard/aluno/cursos">Continuar Curso</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Inteligência Artificial: Fundamentos</CardTitle>
                <CardDescription className="mt-2">Conceitos básicos de IA e Machine Learning</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso: 3 de 10 módulos</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/dashboard/aluno/cursos">Continuar Curso</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">Design UX/UI Avançado</CardTitle>
                <CardDescription className="mt-2">Técnicas avançadas de design de interfaces</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso: 6 de 12 módulos</span>
                    <span>50%</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/dashboard/aluno/cursos">Continuar Curso</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="aulas" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5" />
                      Workshop: React Hooks Avançados
                    </CardTitle>
                    <CardDescription>Aprenda sobre useCallback, useMemo e custom hooks</CardDescription>
                  </div>
                  <Badge variant="destructive" className="animate-pulse">
                    AO VIVO
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    14:00 - 16:00
                  </div>
                  <div>Prof. João Silva</div>
                </div>
                <Button className="mt-4" asChild>
                  <Link href="/dashboard/aluno/aulas-ao-vivo">Entrar na Aula</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5" />
                      Mentoria: Carreira em Tech
                    </CardTitle>
                    <CardDescription>Dicas para crescer na carreira de tecnologia</CardDescription>
                  </div>
                  <Badge variant="secondary">AMANHÃ</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    19:00 - 20:30
                  </div>
                  <div>Prof. Maria Santos</div>
                </div>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/dashboard/aluno/aulas-ao-vivo">Ver Detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="certificados" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    JavaScript Fundamentals
                  </CardTitle>
                  <Badge variant="default">Concluído</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Certificado emitido em 15 de Janeiro de 2024</p>
                <Button variant="outline" className="w-full">
                  Download Certificado
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    CSS Grid e Flexbox
                  </CardTitle>
                  <Badge variant="default">Concluído</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Certificado emitido em 28 de Dezembro de 2023</p>
                <Button variant="outline" className="w-full">
                  Download Certificado
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
