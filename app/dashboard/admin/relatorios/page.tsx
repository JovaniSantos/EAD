import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Users, DollarSign, Download, Calendar, Star, Target } from "lucide-react"

export default function AdminRelatorios() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Relatórios Gerais</h1>
          <p className="text-gray-300">Análises completas da plataforma e métricas de desempenho.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Período
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">R$ 2.847.320</div>
            <p className="text-xs text-green-500">+18.2% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Usuários Ativos</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">47.832</div>
            <p className="text-xs text-blue-500">+12.5% crescimento</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Taxa de Conclusão</CardTitle>
            <Target className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">73.4%</div>
            <p className="text-xs text-purple-500">+5.2% melhoria</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Satisfação</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4.8/5.0</div>
            <p className="text-xs text-yellow-500">Excelente qualidade</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Crescimento */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Crescimento da Plataforma</CardTitle>
          <CardDescription className="text-gray-300">Evolução dos últimos 12 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-300">Novos Usuários por Mês</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Janeiro</span>
                    <span>2.847</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Fevereiro</span>
                    <span>3.156</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Março</span>
                    <span>4.234</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-300">Receita Mensal</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Janeiro</span>
                    <span>R$ 187.450</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Fevereiro</span>
                    <span>R$ 234.680</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Março</span>
                    <span>R$ 298.750</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-300">Cursos Publicados</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Janeiro</span>
                    <span>12 cursos</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Fevereiro</span>
                    <span>18 cursos</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Março</span>
                    <span>25 cursos</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Relatórios Detalhados */}
      <Tabs defaultValue="financeiro" className="space-y-4">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="financeiro" className="text-gray-300">
            Financeiro
          </TabsTrigger>
          <TabsTrigger value="usuarios" className="text-gray-300">
            Usuários
          </TabsTrigger>
          <TabsTrigger value="cursos" className="text-gray-300">
            Cursos
          </TabsTrigger>
          <TabsTrigger value="performance" className="text-gray-300">
            Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="financeiro">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Receita por Categoria</CardTitle>
                <CardDescription className="text-gray-300">Distribuição de receita por área</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Programação</span>
                    <span className="text-white font-bold">R$ 1.247.890 (43.8%)</span>
                  </div>
                  <Progress value={44} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Design</span>
                    <span className="text-white font-bold">R$ 687.450 (24.1%)</span>
                  </div>
                  <Progress value={24} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Marketing</span>
                    <span className="text-white font-bold">R$ 456.230 (16.0%)</span>
                  </div>
                  <Progress value={16} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Negócios</span>
                    <span className="text-white font-bold">R$ 455.750 (16.1%)</span>
                  </div>
                  <Progress value={16} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Métodos de Pagamento</CardTitle>
                <CardDescription className="text-gray-300">Preferências dos usuários</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cartão de Crédito</span>
                    <span className="text-white font-bold">67.3%</span>
                  </div>
                  <Progress value={67} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">PIX</span>
                    <span className="text-white font-bold">23.8%</span>
                  </div>
                  <Progress value={24} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Boleto</span>
                    <span className="text-white font-bold">8.9%</span>
                  </div>
                  <Progress value={9} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="usuarios">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Demografia dos Usuários</CardTitle>
                <CardDescription className="text-gray-300">Distribuição por faixa etária</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">18-25 anos</span>
                    <span className="text-white font-bold">34.2%</span>
                  </div>
                  <Progress value={34} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">26-35 anos</span>
                    <span className="text-white font-bold">41.7%</span>
                  </div>
                  <Progress value={42} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">36-45 anos</span>
                    <span className="text-white font-bold">18.9%</span>
                  </div>
                  <Progress value={19} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">46+ anos</span>
                    <span className="text-white font-bold">5.2%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Regiões Mais Ativas</CardTitle>
                <CardDescription className="text-gray-300">Usuários por estado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">São Paulo</span>
                    <span className="text-white font-bold">12.847 usuários</span>
                  </div>
                  <Progress value={85} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Rio de Janeiro</span>
                    <span className="text-white font-bold">8.234 usuários</span>
                  </div>
                  <Progress value={55} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Minas Gerais</span>
                    <span className="text-white font-bold">5.678 usuários</span>
                  </div>
                  <Progress value={38} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Outros Estados</span>
                    <span className="text-white font-bold">21.073 usuários</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cursos">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Performance dos Cursos</CardTitle>
              <CardDescription className="text-gray-300">Top 10 cursos mais populares</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { nome: "React do Zero ao Avançado", alunos: 4247, conclusao: 78, receita: "R$ 234.560" },
                  { nome: "Node.js Completo", alunos: 3156, conclusao: 82, receita: "R$ 187.340" },
                  { nome: "Design System com Figma", alunos: 2847, conclusao: 71, receita: "R$ 156.780" },
                  { nome: "Python para Data Science", alunos: 2634, conclusao: 85, receita: "R$ 145.230" },
                  { nome: "Marketing Digital Avançado", alunos: 2156, conclusao: 69, receita: "R$ 123.450" },
                ].map((curso, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                    <div>
                      <div className="font-medium text-white">{curso.nome}</div>
                      <div className="text-sm text-gray-400">
                        {curso.alunos} alunos • {curso.conclusao}% conclusão
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-500">{curso.receita}</div>
                      <Badge variant="outline" className="text-gray-300">
                        #{index + 1}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Métricas de Engajamento</CardTitle>
                <CardDescription className="text-gray-300">Atividade dos usuários</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Tempo médio por sessão</span>
                    <span className="text-white font-bold">47 minutos</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Aulas assistidas por dia</span>
                    <span className="text-white font-bold">2.3 aulas</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Taxa de retorno</span>
                    <span className="text-white font-bold">73.4%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Interações no fórum</span>
                    <span className="text-white font-bold">1.847/dia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Horários de Pico</CardTitle>
                <CardDescription className="text-gray-300">Quando os usuários estão mais ativos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">19h - 22h</span>
                    <span className="text-white font-bold">Pico Principal</span>
                  </div>
                  <Progress value={95} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">14h - 17h</span>
                    <span className="text-white font-bold">Pico Secundário</span>
                  </div>
                  <Progress value={70} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">09h - 12h</span>
                    <span className="text-white font-bold">Manhã</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
