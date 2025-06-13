import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Skeleton className="h-8 w-64 bg-gray-700" />
          <Skeleton className="h-4 w-48 mt-2 bg-gray-700" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-32 bg-gray-700" />
          <Skeleton className="h-10 w-32 bg-gray-700" />
        </div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="p-6 rounded-lg border border-gray-700 bg-gray-800">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 bg-gray-700" />
                  <Skeleton className="h-6 w-16 bg-gray-700" />
                  <Skeleton className="h-3 w-20 bg-gray-700" />
                </div>
                <Skeleton className="h-12 w-12 rounded-full bg-gray-700" />
              </div>
            </div>
          ))}
      </div>

      {/* Active Class Skeleton */}
      <div className="p-6 rounded-lg border-2 border-red-600 bg-gray-800">
        <div className="flex justify-between items-center mb-4">
          <div>
            <Skeleton className="h-5 w-24 bg-gray-700" />
            <Skeleton className="h-6 w-64 mt-2 bg-gray-700" />
            <Skeleton className="h-4 w-48 mt-2 bg-gray-700" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-28 bg-gray-700" />
            <Skeleton className="h-10 w-28 bg-gray-700" />
          </div>
        </div>
        <Skeleton className="h-64 w-full bg-gray-700 rounded-lg mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="h-32 w-full bg-gray-700 rounded-lg" />
            ))}
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="space-y-4">
        <div className="flex border-b border-gray-700">
          <Skeleton className="h-10 w-1/3 bg-gray-700" />
          <Skeleton className="h-10 w-1/3 bg-gray-700" />
          <Skeleton className="h-10 w-1/3 bg-gray-700" />
        </div>
        <div className="p-6 rounded-lg border border-gray-700 bg-gray-800">
          <Skeleton className="h-6 w-48 mb-2 bg-gray-700" />
          <Skeleton className="h-4 w-64 mb-6 bg-gray-700" />
          <div className="space-y-4">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="h-32 w-full bg-gray-700 rounded-lg" />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
