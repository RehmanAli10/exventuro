"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 10 + 2,
        top: Math.random() * 100,
        left: Math.random() * 100,
        color: i % 3 === 0 ? "#93c5fd" : i % 3 === 1 ? "#c7d2fe" : "#a5b4fc",
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
      }))
    );
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            y: Math.random() * 500 - 250,
            x: Math.random() * 400 - 200,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
        />
      ))}
    </>
  );
};
