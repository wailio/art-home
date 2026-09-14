"use client"

import { motion, type Variants } from "framer-motion"

interface PopTitleProps {
  text: string
  splitBy?: "word" | "char"
  className?: string
  delay?: number
}

export function PopTitle({ text, splitBy = "word", className = "", delay = 0 }: PopTitleProps) {
  const pieces = splitBy === "char" ? Array.from(text) : text.split(" ")
  const stagger = splitBy === "char" ? 0.025 : 0.08

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.4, y: 24 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 11, stiffness: 200, mass: 0.9 },
    },
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {pieces.map((piece, i) => (
        <motion.span key={i} variants={item} className="inline-block">
          {piece}
          {splitBy === "word" && i !== pieces.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  )
}
