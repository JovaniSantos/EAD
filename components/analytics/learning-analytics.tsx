"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts"

const activityData = [
  { name: "Segunda", Acessos: 24, Atividades: 18, Avaliações: 12 },
  { name: "Terça", Acessos: 30, Atividades: 22, Avaliações: 10 },
  { name: "Quarta", Acessos: 28, Atividades: 25, Avaliações: 15 },
  { name: "Quinta", Acessos: 32, Atividades: 30, Avaliações: 20 },
  { name: "Sexta", Acessos: 26, Atividades: 18, Avaliações: 8 },
  { name: "Sábado", Acessos: 18, Atividades: 12, Avaliações: 5 },
  { name: "Domingo", Acessos: 12, Atividades: 8, Avaliações: 3 },
]

const performanceData = [
  { name: "Jan", Média: 65, Melhor: 85 },
  { name: "Fev", Média: 68, Melhor: 87 },
  { name: "Mar", Média: 70, Melhor: 88 },
  { name: "Abr", Média: 72, Melhor: 90 },
  { name: "Mai", Média: 75, Melhor: 92 },
  { name: "Jun", Média: 78, Melhor: 95 },
]

const contentEngagementData = [
  { name: "Vídeos", value: 35 },
  { name: "Leituras", value: 25 },
  { name: "Quizzes", value: 20 },
  { name: "Fóruns", value: 15 },
  { name: "Projetos", value: 5 },
]

const COLORS = ["#8257e5", "#996DFF", "#04d361", "#1fdb79", "#6833e4"]

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? "start" : "end"

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="text-sm font-medium">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" className="text-xs">
        {`${value} horas`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" className="text-xs">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

export function LearningAnalytics() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Análise de Aprendizagem</h2>
        <p className="text-muted-foreground">
          Visualize dados detalhados sobre seu desempenho e engajamento na plataforma.
        </p>
      </div>

      <Tabs defaultValue="activity" className="space-y-4">
        <TabsList>
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            <span>Atividade Semanal</span>
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            <span>Desempenho</span>
          </TabsTrigger>
          <TabsTrigger value="engagement" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span>Engajamento</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Atividade Semanal</CardTitle>
              <CardDescription>Análise de suas atividades na plataforma durante a última semana.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={activityData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Acessos" fill="#8257e5" />
                    <Bar dataKey="Atividades" fill="#04d361" />
                    <Bar dataKey="Avaliações" fill="#996DFF" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho Acadêmico</CardTitle>
              <CardDescription>Evolução do seu desempenho nos últimos 6 meses.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={performanceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Média" stroke="#8257e5" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Melhor" stroke="#04d361" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Engajamento por Tipo de Conteúdo</CardTitle>
              <CardDescription>Distribuição do tempo gasto em diferentes tipos de conteúdo.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={contentEngagementData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                    >
                      {contentEngagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
