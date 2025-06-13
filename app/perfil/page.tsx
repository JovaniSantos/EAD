"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DashboardHeader } from "@/components/dashboard-header"
import { Footer } from "@/components/footer"
import { toast } from "@/components/ui/use-toast"
import { Bell, Camera, Mail, Save, Shield, User, Calendar, BookOpen, Award, Target } from "lucide-react"

export default function PerfilPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    bio: "Desenvolvedor apaixonado por tecnologia e sempre em busca de novos conhecimentos.",
    location: "São Paulo, SP",
    birthDate: "1990-05-15",
    occupation: "Desenvolvedor Frontend",
    company: "Tech Solutions",
    website: "https://joaosilva.dev",
    linkedin: "linkedin.com/in/joaosilva",
    github: "github.com/joaosilva",
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    courseReminders: true,
    weeklyDigest: true,
    language: "pt-BR",
    timezone: "America/Sao_Paulo",
    theme: "system",
  })

  const handleSaveProfile = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Perfil atualizado!",
        description: "Suas informações foram salvas com sucesso.",
      })
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao atualizar seu perfil.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSavePreferences = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Preferências atualizadas!",
        description: "Suas configurações foram salvas com sucesso.",
      })
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao atualizar suas preferências.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const stats = {
    coursesCompleted: 3,
    totalCourses: 5,
    studyHours: 127,
    certificates: 3,
    achievements: 8,
    currentStreak: 15,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
              <p className="text-muted-foreground">
                Gerencie suas informações pessoais, preferências e configurações de conta.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <div className="relative mx-auto mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback className="text-lg">JS</AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle>{profileData.name}</CardTitle>
                    <CardDescription>{profileData.occupation}</CardDescription>
                    <div className="flex justify-center mt-2">
                      <Badge variant="outline" className="text-rocketseat-purple border-rocketseat-purple">
                        Aluno Ativo
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-rocketseat-purple">{stats.coursesCompleted}</div>
                          <div className="text-xs text-muted-foreground">Cursos Concluídos</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-rocketseat-green">{stats.certificates}</div>
                          <div className="text-xs text-muted-foreground">Certificados</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso Geral</span>
                          <span>{Math.round((stats.coursesCompleted / stats.totalCourses) * 100)}%</span>
                        </div>
                        <Progress value={(stats.coursesCompleted / stats.totalCourses) * 100} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          <span>{stats.studyHours}h estudadas</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          <span>{stats.achievements} conquistas</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="h-3 w-3" />
                          <span>{stats.currentStreak} dias seguidos</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Membro desde 2024</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <Tabs defaultValue="personal" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="personal" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="hidden sm:inline">Pessoal</span>
                    </TabsTrigger>
                    <TabsTrigger value="preferences" className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      <span className="hidden sm:inline">Preferências</span>
                    </TabsTrigger>
                    <TabsTrigger value="security" className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span className="hidden sm:inline">Segurança</span>
                    </TabsTrigger>
                    <TabsTrigger value="social" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span className="hidden sm:inline">Social</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Informações Pessoais</CardTitle>
                        <CardDescription>Atualize suas informações básicas e dados de contato.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input
                              id="name"
                              value={profileData.name}
                              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                              id="email"
                              type="email"
                              value={profileData.email}
                              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Telefone</Label>
                            <Input
                              id="phone"
                              value={profileData.phone}
                              onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="birthDate">Data de Nascimento</Label>
                            <Input
                              id="birthDate"
                              type="date"
                              value={profileData.birthDate}
                              onChange={(e) => setProfileData({ ...profileData, birthDate: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="occupation">Profissão</Label>
                            <Input
                              id="occupation"
                              value={profileData.occupation}
                              onChange={(e) => setProfileData({ ...profileData, occupation: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Empresa</Label>
                            <Input
                              id="company"
                              value={profileData.company}
                              onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Localização</Label>
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Biografia</Label>
                          <Textarea
                            id="bio"
                            placeholder="Conte um pouco sobre você..."
                            value={profileData.bio}
                            onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                          />
                        </div>
                        <Button
                          onClick={handleSaveProfile}
                          disabled={isLoading}
                          className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark"
                        >
                          <Save className="mr-2 h-4 w-4" />
                          {isLoading ? "Salvando..." : "Salvar Alterações"}
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="preferences" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Notificações</CardTitle>
                        <CardDescription>Configure como você deseja receber notificações.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Notificações por E-mail</Label>
                            <p className="text-sm text-muted-foreground">Receba atualizações importantes por e-mail</p>
                          </div>
                          <Switch
                            checked={preferences.emailNotifications}
                            onCheckedChange={(checked) =>
                              setPreferences({ ...preferences, emailNotifications: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Notificações Push</Label>
                            <p className="text-sm text-muted-foreground">Receba notificações no navegador</p>
                          </div>
                          <Switch
                            checked={preferences.pushNotifications}
                            onCheckedChange={(checked) =>
                              setPreferences({ ...preferences, pushNotifications: checked })
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Lembretes de Curso</Label>
                            <p className="text-sm text-muted-foreground">Receba lembretes sobre aulas e prazos</p>
                          </div>
                          <Switch
                            checked={preferences.courseReminders}
                            onCheckedChange={(checked) => setPreferences({ ...preferences, courseReminders: checked })}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Resumo Semanal</Label>
                            <p className="text-sm text-muted-foreground">Receba um resumo semanal do seu progresso</p>
                          </div>
                          <Switch
                            checked={preferences.weeklyDigest}
                            onCheckedChange={(checked) => setPreferences({ ...preferences, weeklyDigest: checked })}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Preferências Gerais</CardTitle>
                        <CardDescription>Configure idioma, fuso horário e outras preferências.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="language">Idioma</Label>
                            <Select
                              value={preferences.language}
                              onValueChange={(value) => setPreferences({ ...preferences, language: value })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                                <SelectItem value="en-US">English (US)</SelectItem>
                                <SelectItem value="es-ES">Español</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timezone">Fuso Horário</Label>
                            <Select
                              value={preferences.timezone}
                              onValueChange={(value) => setPreferences({ ...preferences, timezone: value })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="America/Sao_Paulo">São Paulo (GMT-3)</SelectItem>
                                <SelectItem value="America/New_York">New York (GMT-5)</SelectItem>
                                <SelectItem value="Europe/London">London (GMT+0)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button
                          onClick={handleSavePreferences}
                          disabled={isLoading}
                          className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark"
                        >
                          <Save className="mr-2 h-4 w-4" />
                          {isLoading ? "Salvando..." : "Salvar Preferências"}
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Segurança da Conta</CardTitle>
                        <CardDescription>Gerencie a segurança da sua conta e altere sua senha.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Senha Atual</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">Nova Senha</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button variant="outline" className="w-full">
                          <Shield className="mr-2 h-4 w-4" />
                          Alterar Senha
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Autenticação de Dois Fatores</CardTitle>
                        <CardDescription>Adicione uma camada extra de segurança à sua conta.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>2FA Ativado</Label>
                            <p className="text-sm text-muted-foreground">
                              Proteja sua conta com autenticação de dois fatores
                            </p>
                          </div>
                          <Button variant="outline">Configurar</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="social" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Redes Sociais</CardTitle>
                        <CardDescription>Conecte suas redes sociais e compartilhe seu progresso.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            placeholder="https://seusite.com"
                            value={profileData.website}
                            onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="linkedin">LinkedIn</Label>
                          <Input
                            id="linkedin"
                            placeholder="linkedin.com/in/seuperfil"
                            value={profileData.linkedin}
                            onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="github">GitHub</Label>
                          <Input
                            id="github"
                            placeholder="github.com/seuusuario"
                            value={profileData.github}
                            onChange={(e) => setProfileData({ ...profileData, github: e.target.value })}
                          />
                        </div>
                        <Button
                          onClick={handleSaveProfile}
                          disabled={isLoading}
                          className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark"
                        >
                          <Save className="mr-2 h-4 w-4" />
                          {isLoading ? "Salvando..." : "Salvar Links"}
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
