"use client";

import { cn } from "@/lib/utils";
import { createContext, useContext, useRef, useState } from "react";

const MouseEnterContext = createContext<{
  mouseEnter: boolean;
  setMouseEnter: (value: boolean) => void;
}>({ mouseEnter: false, setMouseEnter: () => { } });

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseEnter, setMouseEnter] = useState(false);

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <MouseEnterContext.Provider value={{ mouseEnter, setMouseEnter }}>
      <div
        className={cn(
          "flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transform: mouseEnter
              ? `rotateY(${position.x}deg) rotateX(${-position.y}deg)`
              : "rotateY(0deg) rotateX(0deg)",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { mouseEnter } = useContext(MouseEnterContext);
  return (
    <div
      className={cn(
        "h-96 [transform-style:preserve-3d]",
        mouseEnter && "[transform:translateZ(75px)]",
        "transition-all duration-200 ease-linear",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  children,
  className,
  translateZ = 0,
}: {
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
}) => {
  const { mouseEnter } = useContext(MouseEnterContext);
  return (
    <div
      className={cn(
        "transition-all duration-200 ease-linear",
        mouseEnter && `[transform:translateZ(${translateZ}px)]`,
        className
      )}
    >
      {children}
    </div>
  );
};