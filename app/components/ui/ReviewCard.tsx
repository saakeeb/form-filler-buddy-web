import { ReactNode } from 'react';

interface ReviewCardProps {
  name: string;
  date: string;
  review: string;
  helpful?: number;
}

export function ReviewCard({ name, date, review, helpful }: ReviewCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <span className="text-sm font-semibold">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{review}</p>
      {helpful !== undefined && helpful > 0 && (
        <p className="mt-4 text-xs text-gray-500">
          {helpful} {helpful === 1 ? 'person' : 'people'} found this review helpful
        </p>
      )}
    </div>
  );
}




