import { CourseDetail } from "@/components/course-detail"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return <CourseDetail id={params.id} />
}
