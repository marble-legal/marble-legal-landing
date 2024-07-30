"use client";

import { motion } from "framer-motion";
import React, { forwardRef, ReactNode } from "react";

interface AnimatedProps {
  children: ReactNode;
  delay?: number;
  variant?: "opacity" | "moveFromBottom";
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
}

const Animated = forwardRef<HTMLDivElement, AnimatedProps>(
  (
    {
      children,
      delay = 0,
      variant = "opacity",
      as: Component = "div",
      className,
    },
    ref
  ) => {
    const variants = {
      opacity: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      moveFromBottom: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      },
    };

    const MotionComponent = motion(Component);

    return (
      <MotionComponent
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Trigger animation only once when in view
        transition={{ duration: 0.5, delay: delay }}
        variants={variants[variant]}
        className={className}
      >
        {children}
      </MotionComponent>
    );
  }
);

Animated.displayName = "Animated";

export default Animated;
