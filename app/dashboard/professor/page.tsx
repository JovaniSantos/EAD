import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Video, BarChart, Clock, TrendingUp, Star } from "lucide-react"
import Link from "next/link"

export default function ProfessorDashboard() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard do Professor</h1>
          <p className="text-muted-foreground">Gerencie seus cursos, alunos e aulas ao vivo.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/professor/criar-curso">Criar Novo Curso</Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Ativos</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+180 novos este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aulas Ministradas</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12 esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">⭐ Excelente feedback</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="cursos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cursos">Meus Cursos</TabsTrigger>
          <TabsTrigger value="aulas">Próximas Aulas</TabsTrigger>
          <TabsTrigger value="alunos">Alunos Recentes</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
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
                <CardDescription className="mt-2">HTML, CSS, JavaScript e React</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>342 alunos matriculados</span>
                    <Badge variant="default">Ativo</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Taxa de conclusão: 78%</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/dashboard/professor/cursos">Gerenciar Curso</Link>
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
                <CardTitle className="text-lg">JavaScript Avançado</CardTitle>
                <CardDescription className="mt-2">Conceitos avançados e frameworks</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>198 alunos matriculados</span>
                    <Badge variant="default">Ativo</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Taxa de conclusão: 85%</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/dashboard/professor/cursos">Gerenciar Curso</Link>
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
                <CardTitle className="text-lg">React e Next.js</CardTitle>
                <CardDescription className="mt-2">Desenvolvimento moderno com React</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>267 alunos matriculados</span>
                    <Badge variant="default">Ativo</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Taxa de conclusão: 72%</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/dashboard/professor/cursos">Gerenciar Curso</Link>
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
                      Aula: Hooks Avançados no React
                    </CardTitle>
                    <CardDescription>Curso: React e Next.js</CardDescription>
                  </div>
                  <Badge variant="destructive" className="animate-pulse">
                    EM 30 MIN
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    14:00 - 16:00
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    267 alunos inscritos
                  </div>
                </div>
                <Button className="mt-4" asChild>
                  <Link href="/dashboard/professor/aulas-ao-vivo">Iniciar Aula</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5" />
                      Workshop: Boas Práticas em JavaScript
                    </CardTitle>
                    <CardDescription>Curso: JavaScript Avançado</CardDescription>
                  </div>
                  <Badge variant="secondary">AMANHÃ</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    19:00 - 21:00
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    198 alunos inscritos
                  </div>
                </div>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/dashboard/professor/aulas-ao-vivo">Ver Detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alunos" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Novos Alunos Esta Semana</CardTitle>
                <CardDescription>Alunos que se matricularam recentemente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Carlos Silva", course: "Desenvolvimento Web Completo", date: "Hoje" },
                    { name: "Ana Santos", course: "React e Next.js", date: "Ontem" },
                    { name: "Pedro Costa", course: "JavaScript Avançado", date: "2 dias atrás" },
                    { name: "Maria Oliveira", course: "Desenvolvimento Web Completo", date: "3 dias atrás" },
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{student.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="relatorios" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Engajamento dos Alunos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Participação em Aulas ao Vivo</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Conclusão de Exercícios</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Participação no Fórum</span>
                      <span>68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Performance dos Cursos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Desenvolvimento Web Completo</span>
                    <Badge variant="default">4.9 ⭐</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">JavaScript Avançado</span>
                    <Badge variant="default">4.8 ⭐</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">React e Next.js</span>
                    <Badge variant="default">4.7 ⭐</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
