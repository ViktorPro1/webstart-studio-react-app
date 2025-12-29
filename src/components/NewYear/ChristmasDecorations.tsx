/**
 * ChristmasDecorations component
 * Декоративний компонент з новорічною атмосферою.
 *
 * Функціональність:
 * – анімовані сніжинки з випадковими параметрами;
 * – святкова гірлянда з мерехтливими лампочками;
 * – використовує lazy initialization у useState
 *   для генерації даних лише під час першого рендеру;
 * – не взаємодіє з користувачем (pointer-events: none).
 *
 * Використовується як фоновий декоративний шар.
 */


import React, { useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

interface Bulb {
  id: number;
  color: string;
  x: number;
  y: number;
  duration: number;
}

const ChristmasDecorations: React.FC = () => {
  // Використовуємо lazy initialization для стейту.
  // Функції всередині useState виконаються лише 1 раз при ініціалізації.
  const [snowflakes] = useState<Snowflake[]>(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      size: 10 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.7
    }))
  );

  const [bulbs] = useState<Bulb[]>(() => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      x: (i * 100 / 30 * 20),
      y: 20 + Math.sin(i * 0.5) * 10,
      duration: 1 + Math.random()
    }));
  });

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
      zIndex: 9999, 
      overflow: 'hidden' 
    }}>
      {/* Гірлянда */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        zIndex: 10
      }}>
        <svg width="100%" height="60" style={{ position: 'absolute', top: 0 }}>
          <path
            d="M 0,20 Q 50,10 100,20 T 200,20 T 300,20 T 400,20 T 500,20 T 600,20 T 700,20 T 800,20 T 900,20 T 1000,20 T 1100,20 T 1200,20 T 1300,20 T 1400,20 T 1500,20 T 1600,20 T 1700,20 T 1800,20 T 1900,20 T 2000,20"
            stroke="#2d4a2b"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {bulbs.map((bulb) => (
          <div
            key={bulb.id}
            style={{
              position: 'absolute',
              left: `${bulb.x}px`,
              top: `${bulb.y}px`,
              width: '12px',
              height: '18px',
              backgroundColor: bulb.color,
              borderRadius: '0 0 50% 50%',
              boxShadow: `0 0 10px ${bulb.color}, 0 0 20px ${bulb.color}`,
              animationName: 'twinkle',
              animationDuration: `${bulb.duration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${bulb.id * 0.1}s`
            }}
          >
            <div style={{
              width: '8px',
              height: '4px',
              backgroundColor: 'silver',
              margin: '0 auto',
              borderRadius: '2px 2px 0 0'
            }} />
          </div>
        ))}
      </div>

      {/* Сніжинки */}
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          style={{
            position: 'absolute',
            left: `${flake.left}%`,
            top: '-20px',
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            animationName: 'fall',
            animationDuration: `${flake.animationDuration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: `${flake.animationDelay}s`,
            color: '#fff',
            textShadow: '0 0 5px rgba(255,255,255,0.8)'
          }}
        >
          ❄
        </div>
      ))}

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.4; filter: brightness(1.5); }
        }
      `}</style>
    </div>
  );
};

export default ChristmasDecorations;