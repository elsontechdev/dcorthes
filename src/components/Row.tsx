
// GridRow.tsx

import React, { ReactNode } from 'react';
interface GridRowProps {
    options?: {
      sm?: string; // Tailwind CSS class for small screens
      md?: string; // Tailwind CSS class for medium screens
      lg?: string; // Tailwind CSS class for large screens
      xl?: string; // Tailwind CSS class for extra-large screens
    };
    additionalClasses?: string[]; // Additional classes to merge with GridRow's classes
    children?: ReactNode;
  }
  
  const GridRow: React.FC<GridRowProps> = ({ options = {}, additionalClasses = [], children }) => {
    // Default column values
    const defaultOptions = {
      sm: `grid-cols-1`, // Small screens
      md: 'grid-cols-2', // Medium screens
      lg: 'grid-cols-3', // Large screens
      xl: 'grid-cols-4', // Extra-large screens
      ...options, // Allow users to override defaults
    };
  
    const gridClasses = `grid ${defaultOptions} ${additionalClasses.join(' ')}`;
  
    return (
      <div className={gridClasses}>
        {children}
      </div>
    );
  };

export default GridRow;
