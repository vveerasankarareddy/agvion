"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  words: string[]
  delay?: number
  loop?: boolean
  onWordChange?: (index: number) => void
}

const TypewriterEffect = ({ words, delay = 5000, loop = true, onWordChange }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(75)

        if (currentText.length === 0) {
          setIsDeleting(false)
          const nextIndex = (currentWordIndex + 1) % words.length
          setCurrentWordIndex(nextIndex)
          // Notify parent component about word change
          if (onWordChange) {
            onWordChange(nextIndex)
          }
          setTypingSpeed(150)
        }
      } else {
        setCurrentText(word.substring(0, currentText.length + 1))

        if (currentText.length === word.length) {
          setTimeout(() => {
            setIsDeleting(true)
          }, delay)
          return
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, delay, typingSpeed, onWordChange])

  return (
    <div className="text-3xl md:text-4xl font-bold orange-text">
      {currentText}
      <span className="animate-blink">|</span>
    </div>
  )
}

export default TypewriterEffect