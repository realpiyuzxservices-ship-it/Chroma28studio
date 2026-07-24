import React from 'react';
import { motion, Variants } from 'motion/react';

// ─── Animation Variants ────────────────────────────────────────────────────────

const variants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.93 },
    visible: { opacity: 1, scale: 1 },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.07 },
    visible: { opacity: 1, scale: 1 },
  },
  flipUp: {
    hidden: { opacity: 0, rotateX: 15, y: 20 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  foldIn: {
    hidden: { opacity: 0, rotateX: 18, y: 48, transformPerspective: 1200 },
    visible: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1200 },
  },
  foldLeft: {
    hidden: { opacity: 0, rotateY: -16, x: -44, transformPerspective: 1200 },
    visible: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200 },
  },
  foldRight: {
    hidden: { opacity: 0, rotateY: 16, x: 44, transformPerspective: 1200 },
    visible: { opacity: 1, rotateY: 0, x: 0, transformPerspective: 1200 },
  },
};

// ─── Stagger Container ─────────────────────────────────────────────────────────

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}> = ({ children, className, staggerChildren = 0.12, delayChildren = 0 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren,
          delayChildren,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

// ─── Props ─────────────────────────────────────────────────────────────────────

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  duration?: number;
  className?: string;
  /** Use inside a StaggerContainer so it picks up parent stagger timing */
  asChild?: boolean;
  amount?: number;
  once?: boolean;
}

// ─── Main Component ────────────────────────────────────────────────────────────

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'foldIn',
  delay = 0,
  duration = 0.9,
  className,
  asChild = false,
  amount = 0.1,
  once = true,
}) => {
  const ease = [0.16, 1, 0.3, 1];

  if (asChild) {
    // Designed for use inside StaggerContainer — inherits parent stagger
    return (
      <motion.div
        className={className}
        variants={{
          hidden: variants[variant].hidden,
          visible: {
            ...(variants[variant].visible as object),
            transition: { duration, ease, delay },
          },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: variants[variant].hidden,
        visible: {
          ...(variants[variant].visible as object),
          transition: { duration, ease, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// ─── Convenience wrappers ──────────────────────────────────────────────────────

export const FadeIn: React.FC<Omit<ScrollRevealProps, 'variant'>> = (props) => (
  <ScrollReveal {...props} variant="fadeIn" />
);

export const SlideUp: React.FC<Omit<ScrollRevealProps, 'variant'>> = (props) => (
  <ScrollReveal {...props} variant="slideUp" />
);

export const SlideDown: React.FC<Omit<ScrollRevealProps, 'variant'>> = (props) => (
  <ScrollReveal {...props} variant="slideDown" />
);

export const SlideLeft: React.FC<Omit<ScrollRevealProps, 'variant'>> = (props) => (
  <ScrollReveal {...props} variant="slideLeft" />
);

export const SlideRight: React.FC<Omit<ScrollRevealProps, 'variant'>> = (props) => (
  <ScrollReveal {...props} variant="slideRight" />
);

export const ZoomIn: React.FC<Omit<ScrollRevealProps, 'variant'>> = (props) => (
  <ScrollReveal {...props} variant="zoomIn" />
);

export const ZoomOut: React.FC<Omit<ScrollRevealProps, 'variant'>> = (props) => (
  <ScrollReveal {...props} variant="zoomOut" />
);
