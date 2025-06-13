import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Shield, AlertTriangle, Eye, UserX, Activity, Key, CheckCircle } from "lucide-react"

export default function AdminSeguranca() {
  const alertasSeguranca = [
    {
      id: 1,
      tipo: "Tentativa de Login Suspeita",
      descricao: "Múltiplas tentativas de login falharam para admin@eduplatform.com",
      severidade: "Alta",
      timestamp: "2 minutos atrás",
      status: "Ativo",
      ip: "192.168.1.100",
    },
    {
      id: 2,
      tipo: "Acesso de IP Desconhecido",
      descricao: "Login realizado de localização não usual",
      severidade: "Média",
      timestamp: "15 minutos atrás",
      status: "Investigando",
      ip: "203.45.67.89",
    },
    {
      id: 3,
      tipo: "Tentativa de SQL Injection",
      descricao: "Tentativa de injeção SQL detectada no formulário de busca",
      severidade: "Crítica",
      timestamp: "1 hora atrás",
      status: "Bloqueado",
      ip: "45.123.67.234",
    },
  ]

  const usuariosBloqueados = [
    {
      id: 1,
      nome: "João Suspeito",
      email: "joao.suspeito@email.com",
      motivo: "Múltiplas violações de termos",
      dataBloqueio: "2024-01-15",
      ip: "192.168.1.50",
    },
    {
      id: 2,
      nome: "Maria Spam",
      email: "maria.spam@email.com",
      motivo: "Envio de spam no fórum",
      dataBloqueio: "2024-01-14",
      ip: "10.0.0.25",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Segurança do Sistema</h1>
          <p className="text-gray-300">Monitore e gerencie a segurança da plataforma.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Logs de Auditoria
          </Button>
          <Button>
            <Shield className="mr-2 h-4 w-4" />
            Scan de Segurança
          </Button>
        </div>
      </div>

      {/* Status de Segurança */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Nível de Segurança</CardTitle>
            <Shield className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Alto</div>
            <p className="text-xs text-gray-400">Score: 94/100</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Alertas Ativos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">3</div>
            <p className="text-xs text-gray-400">2 críticos, 1 médio</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">IPs Bloqueados</CardTitle>
            <UserX className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">47</div>
            <p className="text-xs text-gray-400">Últimas 24h: +5</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Último Backup</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">03:00</div>
            <p className="text-xs text-gray-400">Sucesso - 2.3GB</p>
          </CardContent>
        </Card>
      </div>

      {/* Score de Segurança */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Score de Segurança</CardTitle>
          <CardDescription className="text-gray-300">Avaliação geral da segurança da plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Autenticação e Autorização</span>
              <span className="text-white font-bold">98/100</span>
            </div>
            <Progress value={98} className="h-2" />

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Criptografia de Dados</span>
              <span className="text-white font-bold">95/100</span>
            </div>
            <Progress value={95} className="h-2" />

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Proteção contra Ataques</span>
              <span className="text-white font-bold">92/100</span>
            </div>
            <Progress value={92} className="h-2" />

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Monitoramento e Logs</span>
              <span className="text-white font-bold">89/100</span>
            </div>
            <Progress value={89} className="h-2" />

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Backup e Recuperação</span>
              <span className="text-white font-bold">96/100</span>
            </div>
            <Progress value={96} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Configurações de Segurança */}
      <Tabs defaultValue="alertas" className="space-y-4">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="alertas" className="text-gray-300">
            Alertas
          </TabsTrigger>
          <TabsTrigger value="usuarios" className="text-gray-300">
            Usuários Bloqueados
          </TabsTrigger>
          <TabsTrigger value="firewall" className="text-gray-300">
            Firewall
          </TabsTrigger>
          <TabsTrigger value="configuracoes" className="text-gray-300">
            Configurações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alertas">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Alertas de Segurança</CardTitle>
              <CardDescription className="text-gray-300">
                Monitoramento em tempo real de atividades suspeitas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertasSeguranca.map((alerta) => (
                  <div
                    key={alerta.id}
                    className="flex items-center justify-between p-4 border border-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-full ${
                          alerta.severidade === "Crítica"
                            ? "bg-red-500/20"
                            : alerta.severidade === "Alta"
                              ? "bg-orange-500/20"
                              : "bg-yellow-500/20"
                        }`}
                      >
                        <AlertTriangle
                          className={`h-4 w-4 ${
                            alerta.severidade === "Crítica"
                              ? "text-red-500"
                              : alerta.severidade === "Alta"
                                ? "text-orange-500"
                                : "text-yellow-500"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">{alerta.tipo}</div>
                        <div className="text-sm text-gray-400">{alerta.descricao}</div>
                        <div className="text-xs text-gray-500">
                          IP: {alerta.ip} • {alerta.timestamp}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          alerta.severidade === "Crítica"
                            ? "destructive"
                            : alerta.severidade === "Alta"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {alerta.severidade}
                      </Badge>
                      <Badge variant="outline" className="text-gray-300">
                        {alerta.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Investigar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usuarios">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Usuários Bloqueados</CardTitle>
              <CardDescription className="text-gray-300">Lista de usuários com acesso restrito</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {usuariosBloqueados.map((usuario) => (
                  <div
                    key={usuario.id}
                    className="flex items-center justify-between p-4 border border-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full bg-red-500/20">
                        <UserX className="h-4 w-4 text-red-500" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{usuario.nome}</div>
                        <div className="text-sm text-gray-400">{usuario.email}</div>
                        <div className="text-xs text-gray-500">
                          IP: {usuario.ip} • Bloqueado em {usuario.dataBloqueio}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Bloqueado</Badge>
                      <div className="text-sm text-gray-400">{usuario.motivo}</div>
                      <Button variant="outline" size="sm">
                        Desbloquear
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="firewall">
          <div className="grid gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Configurações de Firewall</CardTitle>
                <CardDescription className="text-gray-300">Gerencie regras de acesso e bloqueios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Firewall Ativo</Label>
                    <p className="text-sm text-gray-400">Proteção contra ataques DDoS e tentativas de invasão</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Bloqueio Automático</Label>
                    <p className="text-sm text-gray-400">Bloquear IPs após múltiplas tentativas falhadas</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Proteção Anti-Bot</Label>
                    <p className="text-sm text-gray-400">Detectar e bloquear tráfego automatizado</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="max-requests" className="text-gray-300">
                      Máximo de Requisições/min
                    </Label>
                    <Input
                      id="max-requests"
                      defaultValue="100"
                      type="number"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="block-duration" className="text-gray-300">
                      Duração do Bloqueio (min)
                    </Label>
                    <Input
                      id="block-duration"
                      defaultValue="30"
                      type="number"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">IPs Bloqueados Recentemente</CardTitle>
                <CardDescription className="text-gray-300">Últimos bloqueios automáticos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { ip: "192.168.1.100", motivo: "Tentativas de login excessivas", tempo: "5 min atrás" },
                    { ip: "203.45.67.89", motivo: "Tráfego suspeito", tempo: "12 min atrás" },
                    { ip: "45.123.67.234", motivo: "SQL Injection", tempo: "1 hora atrás" },
                    { ip: "78.90.123.45", motivo: "DDoS Attack", tempo: "2 horas atrás" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-700 rounded">
                      <div>
                        <div className="font-mono text-white">{item.ip}</div>
                        <div className="text-sm text-gray-400">{item.motivo}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{item.tempo}</div>
                        <Button variant="outline" size="sm">
                          Desbloquear
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="configuracoes">
          <div className="grid gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Configurações de Autenticação</CardTitle>
                <CardDescription className="text-gray-300">Políticas de senha e autenticação</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Autenticação de Dois Fatores</Label>
                    <p className="text-sm text-gray-400">Exigir 2FA para todos os administradores</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Senhas Complexas</Label>
                    <p className="text-sm text-gray-400">Exigir senhas com 8+ caracteres, números e símbolos</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Expiração de Senha</Label>
                    <p className="text-sm text-gray-400">Forçar alteração de senha a cada 90 dias</p>
                  </div>
                  <Switch />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="min-password-length" className="text-gray-300">
                      Tamanho Mínimo da Senha
                    </Label>
                    <Input
                      id="min-password-length"
                      defaultValue="8"
                      type="number"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-login-attempts" className="text-gray-300">
                      Máximo de Tentativas
                    </Label>
                    <Input
                      id="max-login-attempts"
                      defaultValue="5"
                      type="number"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Configurações de Criptografia</CardTitle>
                <CardDescription className="text-gray-300">Proteção de dados sensíveis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Criptografia SSL/TLS</Label>
                    <p className="text-sm text-gray-400">Certificado válido até 15/12/2024</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Criptografia de Banco</Label>
                    <p className="text-sm text-gray-400">AES-256 para dados sensíveis</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Hash de Senhas</Label>
                    <p className="text-sm text-gray-400">bcrypt com salt rounds 12</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <Button className="w-full">
                  <Key className="mr-2 h-4 w-4" />
                  Renovar Certificado SSL
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
