import { FaStar } from "react-icons/fa";

const Stars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center">
      {Array.from({ length: Math.floor(rating) }).map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
      {rating % 1 !== 0 && (
        <div className="relative inline-block w-2.5 overflow-hidden">
          <FaStar className="text-yellow-500" />
          <FaStar className="absolute left-0 top-0 w-1/2 text-gray-300" />
        </div>
      )}
      {Array.from({ length: 5 - Math.ceil(rating) }).map((_, index) => (
        <FaStar key={index + Math.ceil(rating)} className="text-gray-300" />
      ))}
      <span className="ml-3 text-gray-400">({rating}/120)</span>
    </div>
  );
};

export default Stars;
