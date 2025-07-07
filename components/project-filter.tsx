"use client"

import { Button } from "@/components/ui/button"

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-300 ${
            activeCategory === category
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
              : "hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
