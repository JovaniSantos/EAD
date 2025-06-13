import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Code,
  FileText,
  Flame,
  Lightbulb,
  MessageSquare,
  Share2,
  Trophy,
  Video,
} from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Primeira Aula",
    description: "Assistiu sua primeira aula na plataforma",
    icon: Video,
    earned: true,
    date: "10/01/2023",
    points: 10,
  },
  {
    id: 2,
    title: "Participante Ativo",
    description: "Participou de 5 discussões nos fóruns",
    icon: MessageSquare,
    earned: true,
    date: "15/01/2023",
    points: 25,
  },
  {
    id: 3,
    title: "Estudante Dedicado",
    description: "Completou 10 aulas em uma semana",
    icon: BookOpen,
    earned: true,
    date: "22/01/2023",
    points: 50,
  },
  {
    id: 4,
    title: "Mestre do Conhecimento",
    description: "Obteve nota máxima em 3 avaliações consecutivas",
    icon: Award,
    earned: false,
    progress: 67,
    points: 100,
  },
  {
    id: 5,
    title: "Colaborador",
    description: "Compartilhou recursos úteis com outros alunos",
    icon: Share2,
    earned: false,
    progress: 40,
    points: 30,
  },
  {
    id: 6,
    title: "Programador Iniciante",
    description: "Completou seu primeiro projeto prático",
    icon: Code,
    earned: false,
    progress: 80,
    points: 75,
  },
]

const badges = [
  {
    id: 1,
    name: "Explorador",
    icon: Lightbulb,
    level: 3,
    maxLevel: 5,
    color: "bg-rocketseat-purple text-white",
  },
  {
    id: 2,
    name: "Consistente",
    icon: Calendar,
    level: 2,
    maxLevel: 3,
    color: "bg-rocketseat-green text-white",
  },
  {
    id: 3,
    name: "Acadêmico",
    icon: FileText,
    level: 4,
    maxLevel: 5,
    color: "bg-rocketseat-purple-light text-white",
  },
]

const streaks = {
  current: 12,
  longest: 21,
  thisWeek: 5,
  nextMilestone: 15,
}

export function Achievements() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Conquistas e Gamificação</h2>
        <p className="text-muted-foreground">
          Acompanhe seu progresso, conquistas e mantenha-se motivado em sua jornada de aprendizado.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Pontos de Experiência</CardTitle>
            <CardDescription>Seu progresso total na plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-rocketseat-purple">1,250 XP</div>
            <Progress value={65} className="mt-2 bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple" />
            <p className="mt-2 text-sm text-muted-foreground">750 XP para o próximo nível</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Nível Atual</CardTitle>
            <CardDescription>Seu nível de experiência</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-rocketseat-purple">Nível 8</div>
              <p className="text-sm text-muted-foreground">Estudante Avançado</p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rocketseat-purple/10">
              <Trophy className="h-8 w-8 text-rocketseat-purple" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Sequência de Estudos</CardTitle>
            <CardDescription>Mantenha sua constância</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-rocketseat-green" />
              <div className="text-3xl font-bold text-rocketseat-green">{streaks.current} dias</div>
            </div>
            <div className="mt-2 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Maior sequência:</span>
                <span className="font-medium">{streaks.longest} dias</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Esta semana:</span>
                <span className="font-medium">{streaks.thisWeek}/7 dias</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Próximo marco:</span>
                <span className="font-medium">{streaks.nextMilestone} dias</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="achievements" className="space-y-4">
        <TabsList>
          <TabsTrigger value="achievements">Conquistas</TabsTrigger>
          <TabsTrigger value="badges">Emblemas</TabsTrigger>
        </TabsList>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={achievement.earned ? "" : "opacity-75"}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base font-medium">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        achievement.earned ? "bg-rocketseat-purple" : "bg-muted"
                      }`}
                    >
                      <achievement.icon
                        className={`h-5 w-5 ${achievement.earned ? "text-white" : "text-muted-foreground"}`}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {achievement.earned ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        Conquistado em {achievement.date}
                      </div>
                      <Badge variant="outline" className="bg-rocketseat-purple/10 text-rocketseat-purple">
                        +{achievement.points} XP
                      </Badge>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress
                        value={achievement.progress}
                        className="bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple"
                      />
                      <div className="flex justify-end">
                        <Badge variant="outline" className="bg-muted/50 text-muted-foreground">
                          +{achievement.points} XP
                        </Badge>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="badges" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {badges.map((badge) => (
              <Card key={badge.id}>
                <CardHeader className="text-center pb-2">
                  <div
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full mb-2"
                    style={{ backgroundColor: badge.color.split(" ")[0] }}
                  >
                    <badge.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg font-medium">{badge.name}</CardTitle>
                  <CardDescription>
                    Nível {badge.level} de {badge.maxLevel}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress
                    value={(badge.level / badge.maxLevel) * 100}
                    className="bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple"
                  />
                </CardContent>
                <CardFooter className="justify-center pt-0">
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
