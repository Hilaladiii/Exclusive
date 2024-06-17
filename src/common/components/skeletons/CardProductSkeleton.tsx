export default function CardProductSkeleton() {
  return (
    <div className="w-72 animate-pulse rounded bg-gray-100 shadow-md">
      <div className="top-0 h-64 w-full bg-gray-200"></div>
      <div className="px-5 py-4">
        <div className="h-3 w-full bg-gray-200"></div>
        <div className="mt-2 h-3 w-1/3 bg-gray-200"></div>
        <div className="mt-3 h-3 w-1/2 bg-gray-200"></div>
      </div>
    </div>
  );
}
