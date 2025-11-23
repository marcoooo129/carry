import React from 'react';

export const PianoKeys: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex h-full w-full opacity-5 ${className}`}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex-1 border-r border-white/20 relative">
          {/* Black key simulation */}
          {[1, 2, 4, 5, 6].includes(i % 7) && (
            <div className="absolute top-0 right-[-15%] w-[30%] h-[60%] bg-black z-10 rounded-b-sm" />
          )}
        </div>
      ))}
    </div>
  );
};