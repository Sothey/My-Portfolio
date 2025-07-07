"use client"

import { useEffect, useState } from "react"

interface SkillBarProps {
  skill: string
  percentage: number
  color: string
  description?: string
}

export function SkillBar({ skill, percentage, color, description }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 500)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="mb-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill}</span>
          {description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
        </div>
        <span className="text-lg font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-1000 ease-out ${color} shadow-sm`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
