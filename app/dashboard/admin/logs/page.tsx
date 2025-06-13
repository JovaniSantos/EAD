import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FileText,
  Download,
  Search,
  Filter,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Shield,
} from "lucide-react"

export default function AdminLogs() {
  const logs = [
    {
      id: 1,
      timestamp: "2024-01-15 14:32:15",
      nivel: "INFO",
      categoria: "Autenticação",
      usuario: "admin@eduplatform.com",
      acao: "Login realizado com sucesso",
      ip: "192.168.1.100",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
    {
      id: 2,
      timestamp: "2024-01-15 14:30:42",
      nivel: "WARNING",
      categoria: "Segurança",
      usuario: "joao.professor@eduplatform.com",
      acao: "Tentativa de acesso a área restrita",
      ip: "203.45.67.89",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
    {
      id: 3,
      timestamp: "2024-01-15 14:28:33",
      nivel: "ERROR",
      categoria: "Sistema",
      usuario: "sistema",
      acao: "Falha na conexão com banco de dados",
      ip: "localhost",
      userAgent: "Sistema Interno",
    },
    {
      id: 4,
      timestamp: "2024-01-15 14:25:18",
      nivel: "INFO",
      categoria: "Curso",
      usuario: "ana.costa@email.com",
      acao: "Curso 'React Avançado' concluído",
      ip: "45.123.67.234",
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15",
    },
    {
      id: 5,
      timestamp: "2024-01-15 14:22:07",
      nivel: "CRITICAL",
      categoria: "Segurança",
      usuario: "desconhecido",
      acao: "Tentativa de SQL Injection detectada",
      ip: "78.90.123.45",
      userAgent: "curl/7.68.0",
    },
  ]

  const estatisticas = [
    { categoria: "Autenticação", total: 15847, info: 15234, warning: 456, error: 123, critical: 34 },
    { categoria: "Sistema", total: 8923, info: 7845, warning: 789, error: 234, critical: 55 },
    { categoria: "Segurança", total: 2156, info: 1234, warning: 567, error: 289, critical: 66 },
    { categoria: "Curso", total: 12456, info: 12123, warning: 234, error: 89, critical: 10 },
    { categoria: "Pagamento", total: 3456, info: 3234, warning: 156, error: 56, critical: 10 },
  ]

  const getNivelIcon = (nivel: string) => {
    switch (nivel) {
      case "INFO":
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      case "WARNING":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "ERROR":
        return <XCircle className="h-4 w-4 text-orange-500" />
      case "CRITICAL":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case "INFO":
        return "bg-blue-500/20 text-blue-500"
      case "WARNING":
        return "bg-yellow-500/20 text-yellow-500"
      case "ERROR":
        return "bg-orange-500/20 text-orange-500"
      case "CRITICAL":
        return "bg-red-500/20 text-red-500"
      default:
        return "bg-gray-500/20 text-gray-500"
    }
  }

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Logs do Sistema</h1>
          <p className="text-gray-300">Monitore todas as atividades e eventos da plataforma.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Estatísticas dos Logs */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total de Logs</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">42.838</div>
            <p className="text-xs text-gray-400">Últimas 24 horas</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Info</CardTitle>
            <CheckCircle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">39.670</div>
            <p className="text-xs text-gray-400">92.6% do total</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Warning</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">2.202</div>
            <p className="text-xs text-gray-400">5.1% do total</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Error</CardTitle>
            <XCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">791</div>
            <p className="text-xs text-gray-400">1.8% do total</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Critical</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">175</div>
            <p className="text-xs text-gray-400">0.4% do total</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar logs por usuário, ação ou IP..."
            className="pl-8 bg-gray-700 border-gray-600 text-white"
          />
        </div>
        <Select defaultValue="todos">
          <SelectTrigger className="w-40 bg-gray-700 border-gray-600 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os Níveis</SelectItem>
            <SelectItem value="info">INFO</SelectItem>
            <SelectItem value="warning">WARNING</SelectItem>
            <SelectItem value="error">ERROR</SelectItem>
            <SelectItem value="critical">CRITICAL</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="todas">
          <SelectTrigger className="w-40 bg-gray-700 border-gray-600 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas Categorias</SelectItem>
            <SelectItem value="autenticacao">Autenticação</SelectItem>
            <SelectItem value="sistema">Sistema</SelectItem>
            <SelectItem value="seguranca">Segurança</SelectItem>
            <SelectItem value="curso">Curso</SelectItem>
            <SelectItem value="pagamento">Pagamento</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Logs */}
      <Tabs defaultValue="recentes" className="space-y-4">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="recentes" className="text-gray-300">
            Logs Recentes
          </TabsTrigger>
          <TabsTrigger value="estatisticas" className="text-gray-300">
            Estatísticas
          </TabsTrigger>
          <TabsTrigger value="criticos" className="text-gray-300">
            Críticos
          </TabsTrigger>
          <TabsTrigger value="auditoria" className="text-gray-300">
            Auditoria
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recentes">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Logs Recentes</CardTitle>
              <CardDescription className="text-gray-300">Últimas atividades registradas no sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-start justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">{getNivelIcon(log.nivel)}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={getNivelColor(log.nivel)}>{log.nivel}</Badge>
                          <Badge variant="outline" className="text-gray-300">
                            {log.categoria}
                          </Badge>
                          <span className="text-xs text-gray-400">{log.timestamp}</span>
                        </div>
                        <div className="font-medium text-white mb-1">{log.acao}</div>
                        <div className="text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {log.usuario}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          IP: {log.ip} • {log.userAgent.substring(0, 50)}...
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Detalhes
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="estatisticas">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Estatísticas por Categoria</CardTitle>
              <CardDescription className="text-gray-300">Distribuição de logs por categoria e nível</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estatisticas.map((stat, index) => (
                  <div key={index} className="p-4 border border-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium text-white">{stat.categoria}</div>
                      <div className="text-sm text-gray-400">Total: {stat.total.toLocaleString()}</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-500">{stat.info.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">INFO</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-500">{stat.warning.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">WARNING</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-500">{stat.error.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">ERROR</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-500">{stat.critical.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">CRITICAL</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="criticos">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Logs Críticos</CardTitle>
              <CardDescription className="text-gray-300">Eventos que requerem atenção imediata</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {logs
                  .filter((log) => log.nivel === "CRITICAL" || log.nivel === "ERROR")
                  .map((log) => (
                    <div
                      key={log.id}
                      className="flex items-start justify-between p-4 border border-red-500/30 bg-red-500/5 rounded-lg"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">{getNivelIcon(log.nivel)}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={getNivelColor(log.nivel)}>{log.nivel}</Badge>
                            <Badge variant="outline" className="text-gray-300">
                              {log.categoria}
                            </Badge>
                            <span className="text-xs text-gray-400">{log.timestamp}</span>
                          </div>
                          <div className="font-medium text-white mb-1">{log.acao}</div>
                          <div className="text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {log.usuario}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">IP: {log.ip}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Investigar
                        </Button>
                        <Button size="sm">Resolver</Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="auditoria">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Logs de Auditoria</CardTitle>
              <CardDescription className="text-gray-300">Ações administrativas e mudanças importantes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    timestamp: "2024-01-15 14:30:00",
                    usuario: "admin@eduplatform.com",
                    acao: "Usuário 'joao.professor@eduplatform.com' promovido a Professor",
                    categoria: "Gestão de Usuários",
                  },
                  {
                    timestamp: "2024-01-15 14:25:00",
                    usuario: "admin@eduplatform.com",
                    acao: "Curso 'React Avançado' aprovado para publicação",
                    categoria: "Gestão de Cursos",
                  },
                  {
                    timestamp: "2024-01-15 14:20:00",
                    usuario: "admin@eduplatform.com",
                    acao: "Configurações de segurança atualizadas",
                    categoria: "Configurações",
                  },
                  {
                    timestamp: "2024-01-15 14:15:00",
                    usuario: "sistema",
                    acao: "Backup automático realizado com sucesso",
                    categoria: "Sistema",
                  },
                ].map((log, index) => (
                  <div key={index} className="flex items-start justify-between p-4 border border-gray-700 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <Shield className="h-4 w-4 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-purple-500/20 text-purple-500">AUDITORIA</Badge>
                          <Badge variant="outline" className="text-gray-300">
                            {log.categoria}
                          </Badge>
                          <span className="text-xs text-gray-400">{log.timestamp}</span>
                        </div>
                        <div className="font-medium text-white mb-1">{log.acao}</div>
                        <div className="text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {log.usuario}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
