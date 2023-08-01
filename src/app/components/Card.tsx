import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img className="w-40 h-56 object-cover" src={imageSrc} alt={title} />
      <h3 className="text-gray-800 font-medium text-xl mt-4">{title}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};

export default Card;