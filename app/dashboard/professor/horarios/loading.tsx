import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function HorariosLoading() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs Skeleton */}
      <div className="space-y-4">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-32" />
          ))}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-12" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-center">
                    <Skeleton className="h-5 w-16 mx-auto mb-1" />
                    <Skeleton className="h-3 w-12 mx-auto" />
                  </div>
                  <div className="space-y-2 min-h-[200px]">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="p-2 border rounded-lg">
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-3 w-16 mb-1" />
                        <Skeleton className="h-3 w-3/4 mb-1" />
                        <Skeleton className="h-3 w-8" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
