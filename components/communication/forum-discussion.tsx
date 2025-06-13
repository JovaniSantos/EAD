"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Check, ChevronDown, ChevronUp, MessageSquare, Plus, Search, ThumbsUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ForumPost {
  id: number
  title: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  date: string
  likes: number
  replies: number
  tags: string[]
  solved: boolean
  course?: string
}

interface ForumReply {
  id: number
  postId: number
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  date: string
  likes: number
  isAnswer: boolean
}

const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "Como implementar autenticação JWT em uma aplicação React?",
    content:
      "Estou desenvolvendo uma aplicação React e preciso implementar autenticação usando JWT (JSON Web Tokens). Alguém poderia me explicar como fazer isso corretamente? Já tentei algumas abordagens, mas estou tendo problemas com o armazenamento e renovação dos tokens.",
    author: {
      name: "João Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Aluno",
    },
    date: "Hoje, 14:30",
    likes: 12,
    replies: 3,
    tags: ["React", "JWT", "Autenticação"],
    solved: true,
    course: "Desenvolvimento Web Completo",
  },
  {
    id: 2,
    title: "Dúvida sobre Flexbox vs Grid no CSS",
    content:
      "Estou confuso sobre quando usar Flexbox e quando usar Grid no CSS. Quais são as principais diferenças e em quais situações cada um é mais adequado? Alguém poderia dar exemplos práticos?",
    author: {
      name: "Maria Oliveira",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Aluno",
    },
    date: "Ontem, 10:15",
    likes: 8,
    replies: 5,
    tags: ["CSS", "Flexbox", "Grid"],
    solved: false,
    course: "Design UX/UI Avançado",
  },
  {
    id: 3,
    title: "Erro ao executar migrations no Node.js com Sequelize",
    content:
      "Estou tentando executar migrations no meu projeto Node.js usando Sequelize, mas estou recebendo o seguinte erro: 'Cannot find module 'sequelize-cli''. Já instalei todas as dependências com npm install. Alguém sabe como resolver?",
    author: {
      name: "Pedro Santos",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Aluno",
    },
    date: "2 dias atrás",
    likes: 5,
    replies: 2,
    tags: ["Node.js", "Sequelize", "Migrations"],
    solved: false,
  },
]

const forumReplies: ForumReply[] = [
  {
    id: 1,
    postId: 1,
    content:
      "Para implementar autenticação JWT em React, você precisa:\n\n1. Criar um serviço de autenticação que faça requisições para seu backend\n2. Armazenar o token JWT no localStorage ou em cookies HttpOnly\n3. Criar um interceptor para adicionar o token em todas as requisições\n4. Implementar lógica para renovação do token quando expirar\n\nAqui está um exemplo básico de como fazer isso:\n\n```javascript\n// authService.js\nconst login = async (credentials) => {\n  const response = await api.post('/auth/login', credentials);\n  localStorage.setItem('token', response.data.token);\n  return response.data.user;\n};\n\n// Em seu componente\nimport authService from './authService';\n\nconst handleLogin = async () => {\n  try {\n    const user = await authService.login({ email, password });\n    // Redirecionar ou atualizar estado\n  } catch (error) {\n    // Tratar erro\n  }\n};\n```",
    author: {
      name: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Professor",
    },
    date: "Hoje, 15:45",
    likes: 18,
    isAnswer: true,
  },
  {
    id: 2,
    postId: 1,
    content:
      "Complementando a resposta da Ana, é importante também considerar a segurança. Evite armazenar tokens JWT sensíveis apenas no localStorage, pois isso pode expor sua aplicação a ataques XSS. Uma abordagem mais segura é usar cookies HttpOnly para o token de refresh e manter o token de acesso apenas na memória (estado da aplicação).",
    author: {
      name: "Roberto Alves",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Aluno",
    },
    date: "Hoje, 16:20",
    likes: 7,
    isAnswer: false,
  },
  {
    id: 3,
    postId: 1,
    content:
      "Obrigado pelas respostas! Implementei a solução sugerida pela Ana e funcionou perfeitamente. Também segui a dica do Roberto sobre segurança e estou usando cookies HttpOnly para o refresh token.",
    author: {
      name: "João Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Aluno",
    },
    date: "Hoje, 17:05",
    likes: 3,
    isAnswer: false,
  },
]

export function ForumDiscussion() {
  const [activePost, setActivePost] = useState<number | null>(1)
  const [newReply, setNewReply] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const togglePost = (postId: number) => {
    setActivePost(activePost === postId ? null : postId)
  }

  const handleSubmitReply = () => {
    if (newReply.trim()) {
      // In a real app, this would send the reply to the server
      alert("Resposta enviada com sucesso!")
      setNewReply("")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Fórum de Discussão</h2>
        <p className="text-muted-foreground">
          Participe de discussões, tire dúvidas e compartilhe conhecimento com outros alunos e professores.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar no fórum..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
          <Plus className="mr-2 h-4 w-4" />
          Nova Discussão
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todas as Discussões</TabsTrigger>
          <TabsTrigger value="my-courses">Meus Cursos</TabsTrigger>
          <TabsTrigger value="my-posts">Minhas Discussões</TabsTrigger>
          <TabsTrigger value="unanswered">Sem Resposta</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {forumPosts.map((post) => (
            <Card key={post.id} className={cn(activePost === post.id && "border-rocketseat-purple")}>
              <CardHeader className="p-4 pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex cursor-pointer items-start gap-4" onClick={() => togglePost(post.id)}>
                    <Avatar>
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <CardTitle className="text-base">{post.title}</CardTitle>
                      <CardDescription>
                        <span className="font-medium">{post.author.name}</span> ({post.author.role}) • {post.date}
                      </CardDescription>
                      {post.course && (
                        <div className="flex items-center text-xs text-muted-foreground">
                          <BookOpen className="mr-1 h-3 w-3" />
                          {post.course}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {post.solved && (
                      <Badge className="bg-rocketseat-green text-white">
                        <Check className="mr-1 h-3 w-3" />
                        Resolvido
                      </Badge>
                    )}
                    <Button variant="ghost" size="icon" onClick={() => togglePost(post.id)}>
                      {activePost === post.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-rocketseat-purple/10 text-rocketseat-purple">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              {activePost === post.id && (
                <>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="rounded-md bg-muted/50 p-4">
                        <p className="whitespace-pre-line">{post.content}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </Button>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MessageSquare className="mr-1 h-4 w-4" />
                            {post.replies} respostas
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Compartilhar
                        </Button>
                      </div>

                      <Separator />

                      {forumReplies
                        .filter((reply) => reply.postId === post.id)
                        .map((reply) => (
                          <div key={reply.id} className="space-y-2">
                            <div className="flex items-start gap-4">
                              <Avatar>
                                <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                                <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="font-medium">{reply.author.name}</span>{" "}
                                    <span className="text-sm text-muted-foreground">
                                      ({reply.author.role}) • {reply.date}
                                    </span>
                                  </div>
                                  {reply.isAnswer && (
                                    <Badge className="bg-rocketseat-green text-white">
                                      <Check className="mr-1 h-3 w-3" />
                                      Melhor Resposta
                                    </Badge>
                                  )}
                                </div>
                                <div className="rounded-md bg-muted/50 p-4">
                                  <p className="whitespace-pre-line">{reply.content}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>{reply.likes}</span>
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    Responder
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Separator />
                          </div>
                        ))}

                      <div className="space-y-2">
                        <h4 className="font-medium">Sua Resposta</h4>
                        <Textarea
                          placeholder="Escreva sua resposta aqui..."
                          value={newReply}
                          onChange={(e) => setNewReply(e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      onClick={handleSubmitReply}
                      disabled={!newReply.trim()}
                      className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark"
                    >
                      Enviar Resposta
                    </Button>
                  </CardFooter>
                </>
              )}

              {activePost !== post.id && (
                <CardContent className="flex items-center justify-between p-4 pt-0">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </Button>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      {post.replies} respostas
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="my-courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Discussões dos Seus Cursos</CardTitle>
              <CardDescription>Veja as discussões relacionadas aos cursos em que você está matriculado</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">As discussões dos seus cursos aparecerão aqui.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-posts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Minhas Discussões</CardTitle>
              <CardDescription>Discussões que você criou ou participou</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">Suas discussões aparecerão aqui.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unanswered" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Discussões Sem Resposta</CardTitle>
              <CardDescription>Ajude outros alunos respondendo às suas dúvidas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">Discussões sem resposta aparecerão aqui.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
