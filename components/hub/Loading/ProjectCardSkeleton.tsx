export default function ProjectCardSkeleton() {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-pulse">
      {/* Screenshot skeleton */}
      <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 bg-white/10 rounded w-3/4" />
          <div className="h-4 bg-white/5 rounded w-1/2" />
        </div>

        {/* Badge */}
        <div className="h-6 bg-white/5 rounded w-20" />

        {/* Tech stack */}
        <div className="flex gap-2">
          <div className="h-6 bg-white/5 rounded w-16" />
          <div className="h-6 bg-white/5 rounded w-20" />
          <div className="h-6 bg-white/5 rounded w-16" />
        </div>

        {/* Button */}
        <div className="h-12 bg-primary/20 rounded-lg w-full" />
      </div>
    </div>
  );
}
