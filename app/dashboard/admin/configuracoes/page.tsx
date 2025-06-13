import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Save, Database, AlertTriangle } from "lucide-react"

export default function AdminConfiguracoes() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Configurações do Sistema</h1>
          <p className="text-gray-300">Gerencie as configurações globais da plataforma.</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>

      {/* Status do Sistema */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Status do Sistema</CardTitle>
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Online</div>
            <p className="text-xs text-gray-400">Uptime: 99.9%</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Versão</CardTitle>
            <Settings className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">v2.4.1</div>
            <p className="text-xs text-blue-500">Atualização disponível</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Backup</CardTitle>
            <Database className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">Hoje</div>
            <p className="text-xs text-purple-500">Último: 03:00</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Manutenção</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">Agendada</div>
            <p className="text-xs text-yellow-500">Dom 02:00-04:00</p>
          </CardContent>
        </Card>
      </div>

      {/* Configurações */}
      <Tabs defaultValue="geral" className="space-y-4">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="geral" className="text-gray-300">
            Geral
          </TabsTrigger>
          <TabsTrigger value="usuarios" className="text-gray-300">
            Usuários
          </TabsTrigger>
          <TabsTrigger value="pagamentos" className="text-gray-300">
            Pagamentos
          </TabsTrigger>
          <TabsTrigger value="notificacoes" className="text-gray-300">
            Notificações
          </TabsTrigger>
          <TabsTrigger value="aparencia" className="text-gray-300">
            Aparência
          </TabsTrigger>
        </TabsList>

        <TabsContent value="geral">
          <div className="grid gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Informações da Plataforma</CardTitle>
                <CardDescription className="text-gray-300">Configurações básicas da plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="platform-name" className="text-gray-300">
                      Nome da Plataforma
                    </Label>
                    <Input
                      id="platform-name"
                      defaultValue="EduPlatform"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="platform-url" className="text-gray-300">
                      URL Principal
                    </Label>
                    <Input
                      id="platform-url"
                      defaultValue="https://eduplatform.com"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platform-description" className="text-gray-300">
                    Descrição
                  </Label>
                  <Textarea
                    id="platform-description"
                    defaultValue="Plataforma de educação online com foco em tecnologia e desenvolvimento profissional."
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="support-email" className="text-gray-300">
                      Email de Suporte
                    </Label>
                    <Input
                      id="support-email"
                      defaultValue="suporte@eduplatform.com"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone" className="text-gray-300">
                      Fuso Horário
                    </Label>
                    <Select defaultValue="america-sao_paulo">
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america-sao_paulo">América/São Paulo (UTC-3)</SelectItem>
                        <SelectItem value="america-new_york">América/Nova York (UTC-5)</SelectItem>
                        <SelectItem value="europe-london">Europa/Londres (UTC+0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Configurações de Sistema</CardTitle>
                <CardDescription className="text-gray-300">Configurações técnicas e de performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Modo de Manutenção</Label>
                    <p className="text-sm text-gray-400">Ativar página de manutenção para todos os usuários</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Cache Ativo</Label>
                    <p className="text-sm text-gray-400">Melhorar performance com cache de conteúdo</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Logs Detalhados</Label>
                    <p className="text-sm text-gray-400">Registrar logs detalhados de atividades</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Backup Automático</Label>
                    <p className="text-sm text-gray-400">Backup diário automático às 03:00</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="usuarios">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Configurações de Usuários</CardTitle>
              <CardDescription className="text-gray-300">Gerencie políticas e permissões de usuários</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Registro Público</Label>
                  <p className="text-sm text-gray-400">Permitir que novos usuários se registrem</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Verificação de Email</Label>
                  <p className="text-sm text-gray-400">Exigir verificação de email no registro</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Login Social</Label>
                  <p className="text-sm text-gray-400">Permitir login com Google, GitHub, etc.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Autenticação 2FA</Label>
                  <p className="text-sm text-gray-400">Exigir autenticação de dois fatores</p>
                </div>
                <Switch />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout" className="text-gray-300">
                    Timeout de Sessão (minutos)
                  </Label>
                  <Input
                    id="session-timeout"
                    defaultValue="120"
                    type="number"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-login-attempts" className="text-gray-300">
                    Máximo de Tentativas de Login
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
        </TabsContent>

        <TabsContent value="pagamentos">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Configurações de Pagamento</CardTitle>
              <CardDescription className="text-gray-300">Gerencie métodos de pagamento e taxas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Cartão de Crédito</Label>
                  <p className="text-sm text-gray-400">Aceitar pagamentos via cartão</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">PIX</Label>
                  <p className="text-sm text-gray-400">Aceitar pagamentos via PIX</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Boleto Bancário</Label>
                  <p className="text-sm text-gray-400">Aceitar pagamentos via boleto</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="platform-fee" className="text-gray-300">
                    Taxa da Plataforma (%)
                  </Label>
                  <Input
                    id="platform-fee"
                    defaultValue="15"
                    type="number"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="min-payout" className="text-gray-300">
                    Saque Mínimo (R$)
                  </Label>
                  <Input
                    id="min-payout"
                    defaultValue="100"
                    type="number"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency" className="text-gray-300">
                  Moeda Padrão
                </Label>
                <Select defaultValue="brl">
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brl">Real Brasileiro (BRL)</SelectItem>
                    <SelectItem value="usd">Dólar Americano (USD)</SelectItem>
                    <SelectItem value="eur">Euro (EUR)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Configurações de Notificações</CardTitle>
              <CardDescription className="text-gray-300">Configure notificações do sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Notificações por Email</Label>
                  <p className="text-sm text-gray-400">Enviar notificações importantes por email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Notificações Push</Label>
                  <p className="text-sm text-gray-400">Enviar notificações push no navegador</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Newsletter Semanal</Label>
                  <p className="text-sm text-gray-400">Enviar resumo semanal para usuários</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Alertas de Sistema</Label>
                  <p className="text-sm text-gray-400">Notificar sobre problemas técnicos</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="smtp-server" className="text-gray-300">
                    Servidor SMTP
                  </Label>
                  <Input
                    id="smtp-server"
                    defaultValue="smtp.gmail.com"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-port" className="text-gray-300">
                    Porta SMTP
                  </Label>
                  <Input
                    id="smtp-port"
                    defaultValue="587"
                    type="number"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="aparencia">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Configurações de Aparência</CardTitle>
              <CardDescription className="text-gray-300">Personalize a aparência da plataforma</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Tema Escuro</Label>
                  <p className="text-sm text-gray-400">Usar tema escuro como padrão</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Modo Compacto</Label>
                  <p className="text-sm text-gray-400">Interface mais compacta</p>
                </div>
                <Switch />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="primary-color" className="text-gray-300">
                    Cor Primária
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="primary-color"
                      defaultValue="#8B5CF6"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                    <div className="w-10 h-10 bg-purple-500 rounded border border-gray-600"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-color" className="text-gray-300">
                    Cor Secundária
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="secondary-color"
                      defaultValue="#10B981"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                    <div className="w-10 h-10 bg-green-500 rounded border border-gray-600"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="logo-url" className="text-gray-300">
                  URL do Logo
                </Label>
                <Input id="logo-url" defaultValue="/logo.png" className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="favicon-url" className="text-gray-300">
                  URL do Favicon
                </Label>
                <Input
                  id="favicon-url"
                  defaultValue="/favicon.ico"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
