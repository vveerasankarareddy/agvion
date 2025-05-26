"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  words: string[]
  delay?: number
  loop?: boolean
}

const TypewriterEffect = ({ words, delay = 3000, loop = true }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting

        // If deleted completely
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(150) // Reset typing speed
        }
      }
      // If typing
      else {
        setCurrentText(word.substring(0, currentText.length + 1))

        // If completed typing
        if (currentText.length === word.length) {
          // Pause at the end of the word
          setTypingSpeed(delay)
          setIsDeleting(true)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, delay, typingSpeed])

  return (
    <div className="text-3xl font-bold text-teal-400">
      {currentText}
      <span className="animate-blink">|</span>
    </div>
  )
}

export default TypewriterEffect
