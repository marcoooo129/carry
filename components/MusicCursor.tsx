import React, { useEffect, useState, useRef } from 'react';

interface Note {
  id: number;
  x: number;
  y: number;
  symbol: string;
  rotation: number;
  colorClass: string;
}

const SYMBOLS = ['♪', '♫', '♩', '♭', '♯', '𝄞', '𝅘𝅥𝅯', '𝅘𝅥𝅰'];
const COLORS = [
  'text-piano-gold', 
  'text-zinc-500', 
  'text-white/20', 
  'text-piano-gold/50'
];

export const MusicCursor: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const nextId = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Calculate distance to create space between notes (throttle creation)
      const dist = Math.hypot(clientX - lastPos.current.x, clientY - lastPos.current.y);
      if (dist < 40) return; // Only add note if moved 40px

      lastPos.current = { x: clientX, y: clientY };

      const newNote: Note = {
        id: nextId.current++,
        x: clientX,
        y: clientY,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        rotation: Math.random() * 30 - 15,
        colorClass: COLORS[Math.floor(Math.random() * COLORS.length)],
      };

      setNotes(prev => [...prev.slice(-15), newNote]); // Keep max 15 notes in DOM

      // Auto remove after animation duration (1.2s)
      setTimeout(() => {
        setNotes(prev => prev.filter(n => n.id !== newNote.id));
      }, 1200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden w-full h-full">
      {notes.map(note => (
        <span
          key={note.id}
          className={`absolute ${note.colorClass} font-serif note-anim text-2xl md:text-3xl`}
          style={{
            left: note.x,
            top: note.y,
            '--rot': `${note.rotation}deg`,
            '--rot-end': `${note.rotation * 2}deg`,
          } as React.CSSProperties}
        >
          {note.symbol}
        </span>
      ))}
    </div>
  );
};
