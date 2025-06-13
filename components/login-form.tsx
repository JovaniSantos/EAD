"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Github, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular delay de autenticação
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Verificar credenciais e determinar tipo de usuário
    let userType = "aluno"
    let userName = "Usuário"

    if (email === "ana.costa@email.com" && password === "123456") {
      userType = "aluno"
      userName = "Ana Costa"
    } else if (email === "joao.professor@eduplatform.com" && password === "123456") {
      userType = "professor"
      userName = "Prof. João Silva"
    } else if (email === "maria.admin@eduplatform.com" && password === "123456") {
      userType = "admin"
      userName = "Maria Santos"
    } else {
      setIsLoading(false)
      toast({
        title: "Erro no login",
        description: "Email ou senha incorretos.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Login realizado com sucesso!",
      description: `Bem-vindo(a), ${userName}!`,
    })

    // Redirecionar baseado no tipo de usuário
    router.push(`/dashboard/${userType}`)
    setIsLoading(false)
  }

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Login Social",
      description: `Login com ${provider} será implementado em breve.`,
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Entrar</CardTitle>
        <CardDescription className="text-center">Digite suas credenciais para acessar sua conta</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={() => handleSocialLogin("Google")} className="w-full">
            <Mail className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin("GitHub")} className="w-full">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>

        <div className="text-center text-sm">
          <Link href="/forgot-password" className="text-rocketseat-purple hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm font-medium mb-2">Credenciais de teste:</p>
          <div className="text-xs space-y-1">
            <p>
              <strong>Aluno:</strong> ana.costa@email.com
            </p>
            <p>
              <strong>Professor:</strong> joao.professor@eduplatform.com
            </p>
            <p>
              <strong>Admin:</strong> maria.admin@eduplatform.com
            </p>
            <p>
              <strong>Senha:</strong> 123456
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-muted-foreground w-full">
          Não tem uma conta?{" "}
          <Link href="/register" className="text-rocketseat-purple hover:underline">
            Cadastre-se
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
