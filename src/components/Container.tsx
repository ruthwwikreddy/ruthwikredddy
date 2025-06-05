import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ 
  children, 
  className = '' 
}: ContainerProps) => {
  return (
    <div className={`section-content w-[90%] max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
