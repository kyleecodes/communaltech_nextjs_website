"use client";

import { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';

interface StarParticle {
  x: number;
  y: number;
  opacity: number;
  id: number;
}

export default function CustomCursor() {
  const [particles, setParticles] = useState<StarParticle[]>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const particleIdCounter = useRef(0);
  
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setParticles(prev => {
        // Increment counter for unique IDs
        particleIdCounter.current += 1;
        
        // Add new particle
        const newParticle = {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          id: particleIdCounter.current
        };
        
        // Update existing particles
        const updatedParticles = prev
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.1
          }))
          .filter(particle => particle.opacity > 0);
        
        return [...updatedParticles, newParticle].slice(-10); // Keep last 10 particles
      });
    };

    document.addEventListener('mousemove', updateCursor);
    return () => document.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button {
          cursor: none;
        }
      `}</style>
      
      {/* Main cursor */}
      <Box
        sx={{
          width: 8,
          height: 8,
          backgroundColor: '#50c8ff',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(80, 200, 255, 0.5)',
          transform: 'translate(-50%, -50%)',
          left: position.x,
          top: position.y,
          transition: 'transform 0.1s ease-out',
          '&:hover': {
            transform: 'translate(-50%, -50%) scale(1.5)',
          }
        }}
      />

      {/* Trailing stars */}
      {particles.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9998,
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            style={{
              opacity: particle.opacity,
              fill: '#50c8ff',
              filter: 'drop-shadow(0 0 4px rgba(80, 200, 255, 0.5))',
            }}
          >
            <path d="M12 0l2.832 9.168H24l-7.416 5.665L19.416 24 12 18.335 4.584 24l2.832-9.167L0 9.168h9.168L12 0z" />
          </svg>
        </Box>
      ))}
    </>
  );
} 