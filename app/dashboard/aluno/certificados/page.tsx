import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Calendar, Download, Eye, Search, Share2, Star } from "lucide-react"

const certificates = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    instructor: "Ana Silva",
    completionDate: "2024-05-15",
    issueDate: "2024-05-16",
    duration: "40 horas",
    grade: 95,
    credentialId: "DWC-2024-001234",
    image: "/placeholder.svg?height=300&width=400",
    status: "issued",
    category: "Desenvolvimento",
    level: "Iniciante",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Design UX/UI Fundamentals",
    instructor: "Mariana Costa",
    completionDate: "2024-04-20",
    issueDate: "2024-04-21",
    duration: "25 horas",
    grade: 88,
    credentialId: "UXD-2024-005678",
    image: "/placeholder.svg?height=300&width=400",
    status: "issued",
    category: "Design",
    level: "Intermediário",
    skills: ["Figma", "Prototipagem", "Design System", "Usabilidade"],
  },
  {
    id: 3,
    title: "JavaScript Avançado",
    instructor: "Carlos Mendes",
    completionDate: "2024-06-10",
    issueDate: "pending",
    duration: "30 horas",
    grade: 92,
    credentialId: "JSA-2024-009876",
    image: "/placeholder.svg?height=300&width=400",
    status: "processing",
    category: "Programação",
    level: "Avançado",
    skills: ["ES6+", "Async/Await", "Closures", "Prototypes"],
  },
]

const achievements = [
  {
    id: 1,
    title: "Primeiro Certificado",
    description: "Parabéns por completar seu primeiro curso!",
    icon: "🎉",
    earnedDate: "2024-04-21",
    rarity: "common",
  },
  {
    id: 2,
    title: "Desenvolvedor Dedicado",
    description: "Complete 3 cursos de desenvolvimento",
    icon: "💻",
    earnedDate: "2024-05-16",
    rarity: "rare",
  },
  {
    id: 3,
    title: "Nota Máxima",
    description: "Obtenha nota acima de 90 em um curso",
    icon: "⭐",
    earnedDate: "2024-05-16",
    rarity: "epic",
  },
  {
    id: 4,
    title: "Designer em Formação",
    description: "Complete um curso de design",
    icon: "🎨",
    earnedDate: "2024-04-21",
    rarity: "uncommon",
  },
]

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "bg-gray-500"
    case "uncommon":
      return "bg-green-500"
    case "rare":
      return "bg-blue-500"
    case "epic":
      return "bg-purple-500"
    case "legendary":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

export default function CertificadosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Certificados e Conquistas</h1>
        <p className="text-muted-foreground">
          Visualize e gerencie seus certificados de conclusão e conquistas acadêmicas.
        </p>
      </div>

      <Tabs defaultValue="certificates" className="space-y-4">
        <TabsList>
          <TabsTrigger value="certificates" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span>Certificados ({certificates.length})</span>
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>Conquistas ({achievements.length})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="certificates" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Pesquisar certificados..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="development">Desenvolvimento</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="programming">Programação</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="issued">Emitidos</SelectItem>
                  <SelectItem value="processing">Processando</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <Card key={certificate.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="h-48 w-full object-cover"
                  />
                  <Badge
                    className="absolute top-2 right-2"
                    variant={certificate.status === "issued" ? "default" : "secondary"}
                    style={{
                      backgroundColor: certificate.status === "issued" ? "#04d361" : "#996DFF",
                      color: "white",
                    }}
                  >
                    {certificate.status === "issued" ? "Emitido" : "Processando"}
                  </Badge>
                  <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="bg-white/90">
                      {certificate.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="space-y-2">
                    <CardTitle className="text-lg line-clamp-2">{certificate.title}</CardTitle>
                    <CardDescription>Prof. {certificate.instructor}</CardDescription>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{certificate.level}</Badge>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{certificate.grade}%</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Duração:</span>
                        <span>{certificate.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Conclusão:</span>
                        <span>{new Date(certificate.completionDate).toLocaleDateString("pt-BR")}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Credencial:</span>
                        <span className="font-mono text-xs">{certificate.credentialId}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Habilidades:</span>
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex gap-2">
                  {certificate.status === "issued" ? (
                    <>
                      <Button size="sm" className="flex-1 bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full" disabled>
                      <Calendar className="mr-2 h-4 w-4" />
                      Em Processamento
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${getRarityColor(
                        achievement.rarity,
                      )} text-white`}
                    >
                      {achievement.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription className="text-sm">{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <Badge className={`${getRarityColor(achievement.rarity)} text-white`} variant="secondary">
                      {achievement.rarity === "common" && "Comum"}
                      {achievement.rarity === "uncommon" && "Incomum"}
                      {achievement.rarity === "rare" && "Raro"}
                      {achievement.rarity === "epic" && "Épico"}
                      {achievement.rarity === "legendary" && "Lendário"}
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      Conquistado em {new Date(achievement.earnedDate).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Progresso de Conquistas
              </CardTitle>
              <CardDescription>
                Continue aprendendo para desbloquear mais conquistas e badges especiais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Conquistas Desbloqueadas</span>
                  <span className="text-sm text-muted-foreground">{achievements.length}/20</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-rocketseat-purple h-2 rounded-full"
                    style={{ width: `${(achievements.length / 20) * 100}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rocketseat-purple">{achievements.length}</div>
                    <div className="text-muted-foreground">Conquistas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rocketseat-green">{certificates.length}</div>
                    <div className="text-muted-foreground">Certificados</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
