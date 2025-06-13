"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Eye,
  FileAudio,
  Keyboard,
  Languages,
  LayoutGrid,
  Maximize,
  Minimize,
  MonitorSmartphone,
  Moon,
  Palette,
  Sun,
  Type,
} from "lucide-react"

export function AccessibilityControls() {
  const [fontSize, setFontSize] = useState(100)
  const [lineSpacing, setLineSpacing] = useState(1.5)
  const [highContrast, setHighContrast] = useState(false)
  const [dyslexicFont, setDyslexicFont] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [screenReaderMode, setScreenReaderMode] = useState(false)
  const [textAlignment, setTextAlignment] = useState("left")
  const [theme, setTheme] = useState("system")
  const [language, setLanguage] = useState("pt-BR")

  // Apply font size to document
  useEffect(() => {
    document.documentElement.style.setProperty("--accessibility-font-scale", `${fontSize}%`)
  }, [fontSize])

  // Apply line spacing to document
  useEffect(() => {
    document.documentElement.style.setProperty("--accessibility-line-spacing", `${lineSpacing}`)
  }, [lineSpacing])

  // Apply high contrast
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  // Apply dyslexic font
  useEffect(() => {
    if (dyslexicFont) {
      document.documentElement.classList.add("dyslexic-font")
    } else {
      document.documentElement.classList.remove("dyslexic-font")
    }
  }, [dyslexicFont])

  // Apply reduced motion
  useEffect(() => {
    if (reduceMotion) {
      document.documentElement.classList.add("reduce-motion")
    } else {
      document.documentElement.classList.remove("reduce-motion")
    }
  }, [reduceMotion])

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Configurações de Acessibilidade</h2>
        <p className="text-muted-foreground">
          Personalize a plataforma para atender às suas necessidades de acessibilidade.
        </p>
      </div>

      <Tabs defaultValue="text" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="text" className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            <span>Texto</span>
          </TabsTrigger>
          <TabsTrigger value="display" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Exibição</span>
          </TabsTrigger>
          <TabsTrigger value="navigation" className="flex items-center gap-2">
            <Keyboard className="h-4 w-4" />
            <span>Navegação</span>
          </TabsTrigger>
          <TabsTrigger value="media" className="flex items-center gap-2">
            <FileAudio className="h-4 w-4" />
            <span>Mídia</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Texto</CardTitle>
              <CardDescription>Ajuste o tamanho e o espaçamento do texto para melhor legibilidade.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="font-size">Tamanho da Fonte</Label>
                  <span className="text-sm">{fontSize}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Minimize className="h-4 w-4 text-muted-foreground" />
                  <Slider
                    id="font-size"
                    min={75}
                    max={200}
                    step={5}
                    value={[fontSize]}
                    onValueChange={(value) => setFontSize(value[0])}
                    className="flex-1"
                  />
                  <Maximize className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="line-spacing">Espaçamento entre Linhas</Label>
                  <span className="text-sm">{lineSpacing}x</span>
                </div>
                <Slider
                  id="line-spacing"
                  min={1}
                  max={3}
                  step={0.1}
                  value={[lineSpacing]}
                  onValueChange={(value) => setLineSpacing(value[0])}
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dyslexic-font">Fonte para Dislexia</Label>
                    <p className="text-sm text-muted-foreground">
                      Utiliza uma fonte especial que facilita a leitura para pessoas com dislexia
                    </p>
                  </div>
                  <Switch id="dyslexic-font" checked={dyslexicFont} onCheckedChange={setDyslexicFont} />
                </div>

                <div className="space-y-2">
                  <Label>Alinhamento do Texto</Label>
                  <div className="flex gap-2">
                    <Button
                      variant={textAlignment === "left" ? "default" : "outline"}
                      size="sm"
                      className={textAlignment === "left" ? "bg-rocketseat-purple hover:bg-rocketseat-purple-dark" : ""}
                      onClick={() => setTextAlignment("left")}
                    >
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={textAlignment === "center" ? "default" : "outline"}
                      size="sm"
                      className={
                        textAlignment === "center" ? "bg-rocketseat-purple hover:bg-rocketseat-purple-dark" : ""
                      }
                      onClick={() => setTextAlignment("center")}
                    >
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={textAlignment === "right" ? "default" : "outline"}
                      size="sm"
                      className={
                        textAlignment === "right" ? "bg-rocketseat-purple hover:bg-rocketseat-purple-dark" : ""
                      }
                      onClick={() => setTextAlignment("right")}
                    >
                      <AlignRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="display" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Exibição</CardTitle>
              <CardDescription>Ajuste o contraste, tema e outras configurações visuais.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="high-contrast">Alto Contraste</Label>
                    <p className="text-sm text-muted-foreground">
                      Aumenta o contraste entre texto e fundo para melhor legibilidade
                    </p>
                  </div>
                  <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reduce-motion">Reduzir Animações</Label>
                    <p className="text-sm text-muted-foreground">Minimiza ou remove animações e efeitos visuais</p>
                  </div>
                  <Switch id="reduce-motion" checked={reduceMotion} onCheckedChange={setReduceMotion} />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="theme-select">Tema</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger id="theme-select">
                    <SelectValue placeholder="Selecione um tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        <span>Claro</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        <span>Escuro</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="system">
                      <div className="flex items-center gap-2">
                        <MonitorSmartphone className="h-4 w-4" />
                        <span>Sistema</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="layout-density">Densidade do Layout</Label>
                <Select defaultValue="default">
                  <SelectTrigger id="layout-density">
                    <SelectValue placeholder="Selecione a densidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compact">Compacto</SelectItem>
                    <SelectItem value="default">Padrão</SelectItem>
                    <SelectItem value="comfortable">Confortável</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Navegação e Interação</CardTitle>
              <CardDescription>Configure opções de navegação e interação com a plataforma.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="screen-reader">Modo Leitor de Tela</Label>
                    <p className="text-sm text-muted-foreground">Otimiza a plataforma para uso com leitores de tela</p>
                  </div>
                  <Switch id="screen-reader" checked={screenReaderMode} onCheckedChange={setScreenReaderMode} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="keyboard-navigation">Navegação por Teclado Aprimorada</Label>
                    <p className="text-sm text-muted-foreground">Melhora a navegação usando apenas o teclado</p>
                  </div>
                  <Switch id="keyboard-navigation" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="language-select">Idioma</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language-select" className="flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    <SelectValue placeholder="Selecione um idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-structure">Estrutura de Conteúdo</Label>
                <Select defaultValue="list">
                  <SelectTrigger id="content-structure">
                    <SelectValue placeholder="Selecione a estrutura" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="list">Lista</SelectItem>
                    <SelectItem value="grid">
                      <div className="flex items-center gap-2">
                        <LayoutGrid className="h-4 w-4" />
                        <span>Grade</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Mídia</CardTitle>
              <CardDescription>Ajuste como vídeos, áudios e outros conteúdos multimídia são exibidos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-captions">Legendas Automáticas</Label>
                    <p className="text-sm text-muted-foreground">Ativar legendas automaticamente em vídeos</p>
                  </div>
                  <Switch id="auto-captions" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-play">Reprodução Automática</Label>
                    <p className="text-sm text-muted-foreground">Iniciar vídeos automaticamente ao abrir uma aula</p>
                  </div>
                  <Switch id="auto-play" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="transcripts">Transcrições</Label>
                    <p className="text-sm text-muted-foreground">
                      Mostrar transcrições de áudio e vídeo quando disponíveis
                    </p>
                  </div>
                  <Switch id="transcripts" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="playback-speed">Velocidade de Reprodução Padrão</Label>
                  <span className="text-sm">1.0x</span>
                </div>
                <Select defaultValue="1.0">
                  <SelectTrigger id="playback-speed">
                    <SelectValue placeholder="Selecione a velocidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.5">0.5x</SelectItem>
                    <SelectItem value="0.75">0.75x</SelectItem>
                    <SelectItem value="1.0">1.0x (Normal)</SelectItem>
                    <SelectItem value="1.25">1.25x</SelectItem>
                    <SelectItem value="1.5">1.5x</SelectItem>
                    <SelectItem value="2.0">2.0x</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audio-description">Descrição de Áudio</Label>
                <Select defaultValue="when-available">
                  <SelectTrigger id="audio-description">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="always">Sempre ativar</SelectItem>
                    <SelectItem value="when-available">Quando disponível</SelectItem>
                    <SelectItem value="never">Nunca ativar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Perfil de Acessibilidade</CardTitle>
          <CardDescription>Salve suas configurações para uso futuro</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="profile-name">Nome do Perfil</Label>
            <div className="flex gap-2">
              <Select defaultValue="default">
                <SelectTrigger id="profile-name" className="flex-1">
                  <SelectValue placeholder="Selecione ou crie um perfil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Padrão</SelectItem>
                  <SelectItem value="high-contrast">Alto Contraste</SelectItem>
                  <SelectItem value="dyslexic">Dislexia</SelectItem>
                  <SelectItem value="screen-reader">Leitor de Tela</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Visualizar
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Restaurar Padrões</Button>
          <Button className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark">Salvar Configurações</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
