
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
          className="text-[#9b87f5] font-bold"
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="w-full bg-gray-800 rounded-full h-3 backdrop-blur-sm border border-[#9b87f5]/10 overflow-hidden">
        <motion.div 
          className="relative h-full bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] rounded-full shadow-[0_0_10px_rgba(155,135,245,0.5)]"
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
          
          {/* Holographic effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#9b87f5]/10 to-transparent opacity-50"></div>
          
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
      
      {/* Data points with futuristic style */}
      <div className="relative w-full mt-1 flex justify-between text-xs text-[#9b87f5]/50">
        <span className="after:content-[''] after:absolute after:w-[1px] after:h-1.5 after:bg-[#9b87f5]/20 after:top-[-6px]">0</span>
        <span className="after:content-[''] after:absolute after:w-[1px] after:h-1.5 after:bg-[#9b87f5]/20 after:top-[-6px]">50</span>
        <span className="after:content-[''] after:absolute after:w-[1px] after:h-1.5 after:bg-[#9b87f5]/20 after:top-[-6px]">100</span>
      </div>
      
      {/* Animated data markers */}
      <div className="relative w-full h-0">
        {percentage > 0 && (
          <motion.div
            className="absolute top-[-12px] h-2 w-2 border border-[#9b87f5]/50 rounded-full bg-black"
            style={{ left: `${percentage}%` }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
