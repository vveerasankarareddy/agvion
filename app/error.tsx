'use client'

import { useEffect } from 'react'

interface ErrorPageProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("App error:", error)
  }, [error])

  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-semibold">Something went wrong!</h2>
      <p className="text-gray-500 mt-2">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  )
}
