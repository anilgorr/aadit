import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/blog"
import type { Post } from "@/.velite"

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={post.permalink} className="group">
      <Card className="flex h-full flex-col p-6 transition-colors hover:border-primary/50">
        {post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <h3 className="mb-2 text-lg font-bold leading-snug group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-auto flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {Math.max(1, Math.ceil(post.metadata.readingTime))} min read
          </span>
        </div>
      </Card>
    </Link>
  )
}
