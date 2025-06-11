"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "zoom-in"
  delay?: number
  duration?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  duration = 1000,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-[${duration}ms]`
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : ""

    if (!isIntersecting) {
      switch (animation) {
        case "slide-up":
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`
        case "slide-left":
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-x-8`
        case "slide-right":
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-x-8`
        case "zoom-in":
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 scale-95`
        default:
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0`
      }
    }

    return `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-x-0 translate-y-0 scale-100`
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}
