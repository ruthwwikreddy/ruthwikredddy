
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
}

const ProgressBar = ({ label, percentage, className }: ProgressBarProps) => {
  return (
    <div className={cn("mb-6", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-portfolio-primary font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-portfolio-primary h-2.5 rounded-full transition-all duration-1000" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
