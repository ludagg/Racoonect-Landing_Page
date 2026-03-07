'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface ScrollingColumnProps {
  images: string[];
  reverse?: boolean;
  duration?: number;
}

export default function ScrollingColumn({
  images,
  reverse = false,
  duration = 40
}: ScrollingColumnProps) {
  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative h-[600px] overflow-hidden rounded-2xl bg-primary/5">
      <motion.div
        animate={{
          y: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-4 p-2"
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              src={src}
              alt="Agriculture showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </motion.div>

      {/* Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background-light via-transparent to-background-light opacity-80"></div>
    </div>
  );
}
