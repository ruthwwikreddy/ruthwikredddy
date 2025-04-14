
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
}

const ProgressBar = ({ label, percentage, className }: ProgressBarProps) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{label}</span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#007BFF] font-bold"
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="w-full bg-gray-800 rounded-full h-3 backdrop-blur-sm border border-[#007BFF]/10 overflow-hidden">
        <motion.div 
          className="relative h-full bg-gradient-to-r from-[#0052a8] to-[#007BFF] rounded-full shadow-[0_0_10px_rgba(0,123,255,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.2
          }}
        >
          {/* Animated glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
          
          {/* Indicator dots */}
          {percentage > 70 && (
            <motion.div 
              className="absolute right-2 top-1/2 -translate-y-1/2 h-1.5 w-1.5 bg-white rounded-full shadow-[0_0_5px_white]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>
      
      {/* Data points */}
      <div className="relative w-full mt-1 flex justify-between text-xs text-[#007BFF]/50">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default ProgressBar;
