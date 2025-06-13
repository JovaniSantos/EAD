"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Clock, HelpCircle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type QuestionType = "multiple-choice" | "checkbox" | "text" | "code"

interface Question {
  id: number
  type: QuestionType
  question: string
  options?: string[]
  correctAnswer?: string | string[]
  explanation?: string
}

const quizQuestions: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Qual das seguintes opções é uma linguagem de programação orientada a objetos?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correctAnswer: "JavaScript",
    explanation:
      "JavaScript é uma linguagem de programação que suporta programação orientada a objetos, enquanto HTML e CSS são linguagens de marcação e estilo, respectivamente. SQL é uma linguagem para manipulação de bancos de dados.",
  },
  {
    id: 2,
    type: "checkbox",
    question: "Quais dos seguintes são frameworks JavaScript? (Selecione todas as opções corretas)",
    options: ["React", "Angular", "Vue", "Bootstrap"],
    correctAnswer: ["React", "Angular", "Vue"],
    explanation:
      "React, Angular e Vue são frameworks/bibliotecas JavaScript para desenvolvimento de interfaces. Bootstrap é um framework CSS para design responsivo.",
  },
  {
    id: 3,
    type: "text",
    question: "Explique brevemente o conceito de API RESTful e sua importância no desenvolvimento web moderno.",
    correctAnswer: "",
  },
  {
    id: 4,
    type: "code",
    question: "Escreva uma função JavaScript que receba um array de números e retorne a soma de todos os elementos.",
    correctAnswer: "",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Qual é o protocolo principal utilizado para comunicação na web?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    correctAnswer: "HTTP",
    explanation:
      "HTTP (Hypertext Transfer Protocol) é o protocolo padrão para comunicação na web. FTP é para transferência de arquivos, SMTP para e-mail e SSH para acesso remoto seguro.",
  },
]

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({})
  const [selectedOption, setSelectedOption] = useState<string | string[]>("")
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const question = quizQuestions[currentQuestion]
  const isLastQuestion = currentQuestion === quizQuestions.length - 1
  const isFirstQuestion = currentQuestion === 0

  const handleNext = () => {
    setAnswers({ ...answers, [question.id]: selectedOption })
    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(answers[quizQuestions[currentQuestion + 1].id] || "")
    } else {
      setShowResult(true)
      setQuizSubmitted(true)
    }
  }

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || "")
    }
  }

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
  }

  const handleCheckboxChange = (option: string) => {
    const currentSelection = Array.isArray(selectedOption) ? selectedOption : []
    if (currentSelection.includes(option)) {
      setSelectedOption(currentSelection.filter((item) => item !== option))
    } else {
      setSelectedOption([...currentSelection, option])
    }
  }

  const handleTextChange = (value: string) => {
    setSelectedOption(value)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const calculateScore = () => {
    let correct = 0
    quizQuestions.forEach((q) => {
      if (q.type === "multiple-choice" && answers[q.id] === q.correctAnswer) {
        correct++
      } else if (q.type === "checkbox" && Array.isArray(q.correctAnswer) && Array.isArray(answers[q.id])) {
        const userAnswers = answers[q.id] as string[]
        if (userAnswers.length === q.correctAnswer.length && userAnswers.every((a) => q.correctAnswer?.includes(a))) {
          correct++
        }
      }
      // Text and code questions would need manual evaluation
    })
    return (correct / quizQuestions.length) * 100
  }

  const isAnswerCorrect = (questionId: number) => {
    const q = quizQuestions.find((q) => q.id === questionId)
    if (!q || !answers[questionId]) return false

    if (q.type === "multiple-choice") {
      return answers[questionId] === q.correctAnswer
    } else if (q.type === "checkbox" && Array.isArray(q.correctAnswer) && Array.isArray(answers[questionId])) {
      const userAnswers = answers[questionId] as string[]
      return userAnswers.length === q.correctAnswer.length && userAnswers.every((a) => q.correctAnswer?.includes(a))
    }
    return false
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Quiz Interativo: Fundamentos de Desenvolvimento Web</h2>
        <p className="text-muted-foreground">
          Teste seus conhecimentos sobre conceitos fundamentais de desenvolvimento web.
        </p>
      </div>

      {!showResult ? (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>
                  Questão {currentQuestion + 1} de {quizQuestions.length}
                </CardTitle>
                <CardDescription>
                  {question.type === "multiple-choice"
                    ? "Escolha a alternativa correta"
                    : question.type === "checkbox"
                      ? "Selecione todas as opções corretas"
                      : question.type === "text"
                        ? "Responda com suas próprias palavras"
                        : "Escreva o código solicitado"}
                </CardDescription>
              </div>
              <div className="flex items-center rounded-full bg-muted px-3 py-1 text-sm">
                <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
            <Progress
              value={((currentQuestion + 1) / quizQuestions.length) * 100}
              className="mt-2 bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple"
            />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg font-medium">{question.question}</div>

            {question.type === "multiple-choice" && (
              <RadioGroup value={selectedOption as string} onValueChange={handleOptionChange} className="space-y-3">
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {question.type === "checkbox" && (
              <div className="space-y-3">
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50">
                    <Checkbox
                      id={`checkbox-${index}`}
                      checked={Array.isArray(selectedOption) && selectedOption.includes(option)}
                      onCheckedChange={() => handleCheckboxChange(option)}
                    />
                    <Label htmlFor={`checkbox-${index}`} className="flex-grow cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            )}

            {question.type === "text" && (
              <Textarea
                placeholder="Digite sua resposta aqui..."
                value={selectedOption as string}
                onChange={(e) => handleTextChange(e.target.value)}
                className="min-h-[150px]"
              />
            )}

            {question.type === "code" && (
              <div className="rounded-md border bg-muted p-4">
                <Textarea
                  placeholder="// Escreva seu código aqui"
                  value={selectedOption as string}
                  onChange={(e) => handleTextChange(e.target.value)}
                  className="min-h-[200px] font-mono bg-background"
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              className={cn(isFirstQuestion && "opacity-50")}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>
            <Button onClick={handleNext} className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark">
              {isLastQuestion ? "Finalizar" : "Próxima"}
              {!isLastQuestion && <ChevronRight className="ml-2 h-4 w-4" />}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Resultado do Quiz</CardTitle>
            <CardDescription>Veja como você se saiu neste quiz</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-muted p-6 text-center">
              <div className="text-4xl font-bold text-rocketseat-purple">{Math.round(calculateScore())}%</div>
              <p className="text-muted-foreground">Pontuação Final</p>
              <div className="mt-2 w-full max-w-xs">
                <Progress
                  value={calculateScore()}
                  className="h-3 bg-rocketseat-purple/20 [&>div]:bg-rocketseat-purple"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Revisão das Respostas</h3>
              {quizQuestions.map((q) => (
                <div key={q.id} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">Questão {q.id}</div>
                      <p>{q.question}</p>
                    </div>
                    {q.type === "multiple-choice" || q.type === "checkbox" ? (
                      isAnswerCorrect(q.id) ? (
                        <CheckCircle className="h-5 w-5 text-rocketseat-green" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )
                    ) : (
                      <HelpCircle className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>

                  {(q.type === "multiple-choice" || q.type === "checkbox") && q.explanation && (
                    <div className="mt-3 flex items-start rounded-md bg-muted p-3">
                      <AlertCircle className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
                      <div className="text-sm">{q.explanation}</div>
                    </div>
                  )}

                  {q.type === "text" || q.type === "code" ? (
                    <div className="mt-2">
                      <div className="text-sm font-medium">Sua resposta:</div>
                      <div className="mt-1 rounded-md bg-muted p-3 text-sm">
                        {answers[q.id] ? (
                          <pre className="whitespace-pre-wrap font-mono">{answers[q.id] as string}</pre>
                        ) : (
                          <span className="text-muted-foreground">Sem resposta</span>
                        )}
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Respostas dissertativas e de código serão avaliadas pelo professor.
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Ver Materiais de Estudo</Button>
            <Button className="bg-rocketseat-purple hover:bg-rocketseat-purple-dark">Voltar aos Quizzes</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
