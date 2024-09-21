import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface IRatingProps {
  value: number; // Rating value (e.g., 4.5)
  text?: string; // Optional text to display next to the rating (e.g., '120 reviews')
  totalStars?: number; // Total number of stars (default: 5)
  color?: string; // Color for stars (default: gold)
}

const Rating: React.FC<IRatingProps> = ({
  value,
  text = '',
  totalStars = 5,
  color = '#f8e825', // Default gold color for stars
}) => {
  console.log(...Array(totalStars))
  return (
    <div className="rating">
      {/* Loop over total stars */}
      
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          {value >= index + 1 ? (
            <FaStar color={color} />
          ) : value >= index + 0.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </span>
      ))}
      {/* Display optional text next to the rating */}
      {text && (
        <span className="rating-text" style={{ marginLeft: '10px' }}>
          {text}
        </span>
      )}
    </div>
  );
};

export default Rating;
