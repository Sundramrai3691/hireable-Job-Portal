import React from 'react';

const Card = ({ children, className = "", hover = false, ...props }) => {
  const baseClasses = "bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200";
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer" : "";
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;