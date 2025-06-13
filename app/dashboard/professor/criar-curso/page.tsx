import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Upload, Video, FileText, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CriarCurso() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Criar Novo Curso</h1>
          <p className="text-muted-foreground">Configure seu curso e comece a ensinar.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Salvar Rascunho</Button>
          <Button>Publicar Curso</Button>
        </div>
      </div>

      <Tabs defaultValue="basico" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basico">Informações Básicas</TabsTrigger>
          <TabsTrigger value="conteudo">Conteúdo</TabsTrigger>
          <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          <TabsTrigger value="publicacao">Publicação</TabsTrigger>
        </TabsList>

        <TabsContent value="basico" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Informações do Curso
                </CardTitle>
                <CardDescription>Defina as informações básicas do seu curso</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="titulo">Título do Curso</Label>
                  <Input id="titulo" placeholder="Ex: Desenvolvimento Web Completo" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição Curta</Label>
                  <Input id="descricao" placeholder="Ex: Aprenda HTML, CSS, JavaScript e React" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoria</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programacao">Programação</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="negocios">Negócios</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nivel">Nível</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iniciante">Iniciante</SelectItem>
                      <SelectItem value="intermediario">Intermediário</SelectItem>
                      <SelectItem value="avancado">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duracao">Duração (horas)</Label>
                    <Input id="duracao" type="number" placeholder="40" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preco">Preço (R$)</Label>
                    <Input id="preco" type="number" placeholder="199.90" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Mídia do Curso
                </CardTitle>
                <CardDescription>Adicione imagens e vídeo de apresentação</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Imagem de Capa</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Clique para fazer upload ou arraste a imagem</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG até 2MB (1280x720 recomendado)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Vídeo de Apresentação</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Video className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Adicione um vídeo de apresentação</p>
                    <p className="text-xs text-muted-foreground">MP4 até 100MB (máximo 5 minutos)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Descrição Detalhada</CardTitle>
              <CardDescription>Descreva detalhadamente o que os alunos aprenderão</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Descreva o conteúdo do curso, objetivos de aprendizagem, pré-requisitos e o que os alunos conseguirão fazer após completar o curso..."
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conteudo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                Estrutura do Curso
              </CardTitle>
              <CardDescription>Organize o conteúdo em módulos e aulas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Módulos e Aulas</h3>
                <Button variant="outline">
                  <Video className="mr-2 h-4 w-4" />
                  Adicionar Módulo
                </Button>
              </div>

              <div className="space-y-4">
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Módulo 1: Introdução</CardTitle>
                      <Badge variant="secondary">3 aulas</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-muted rounded">
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4" />
                        <span className="text-sm">Aula 1: Bem-vindos ao curso</span>
                      </div>
                      <span className="text-xs text-muted-foreground">5 min</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted rounded">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span className="text-sm">Aula 2: Configurando o ambiente</span>
                      </div>
                      <span className="text-xs text-muted-foreground">15 min</span>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full">
                      + Adicionar Aula
                    </Button>
                  </CardContent>
                </Card>

                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Video className="mx-auto h-8 w-8 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">Adicione mais módulos ao seu curso</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="configuracoes" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Configurações de Acesso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="acesso">Tipo de Acesso</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pago">Curso Pago</SelectItem>
                      <SelectItem value="gratuito">Curso Gratuito</SelectItem>
                      <SelectItem value="assinatura">Por Assinatura</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="certificado">Certificado</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Emitir certificado?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sim">Sim, emitir certificado</SelectItem>
                      <SelectItem value="nao">Não emitir certificado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idioma">Idioma</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                      <SelectItem value="en">Inglês</SelectItem>
                      <SelectItem value="es">Espanhol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configurações Avançadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prerequisitos">Pré-requisitos</Label>
                  <Textarea
                    id="prerequisitos"
                    placeholder="Liste os conhecimentos necessários para este curso..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                  <Input id="tags" placeholder="javascript, react, frontend, web" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="publicacao" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revisar e Publicar</CardTitle>
              <CardDescription>Revise todas as informações antes de publicar seu curso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-semibold">Informações Básicas</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Título:</span>
                      <span>Desenvolvimento Web Completo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Categoria:</span>
                      <span>Programação</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nível:</span>
                      <span>Iniciante</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duração:</span>
                      <span>40 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Preço:</span>
                      <span>R$ 199,90</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Conteúdo</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Módulos:</span>
                      <span>1 módulo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Aulas:</span>
                      <span>2 aulas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Certificado:</span>
                      <span>Sim</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    Salvar como Rascunho
                  </Button>
                  <Button className="flex-1">Publicar Curso</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Ao publicar, seu curso ficará disponível para os alunos
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
