"use client"

import { useState, type ReactNode } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Camera } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"
import { useInView } from "@/hooks/use-in-view"

type Project = (typeof portfolioData.projects)[number]

const FILTERS = [
  "All",
  "Robotics & Autonomy",
  "Thermal & Fluids",
  "Research & Biosensors",
] as const

type Filter = (typeof FILTERS)[number]

const CATEGORY_COLORS: Record<string, string> = {
  "Robotics & Autonomy": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Thermal & Fluids": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Research & Biosensors": "bg-green-500/10 text-green-400 border-green-500/20",
}

function FadeInCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ref, isInView } = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const categoryColor = CATEGORY_COLORS[project.category] ?? "bg-primary/10 text-primary border-primary/20"

  return (
    <Card className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group flex flex-col">
      {/* Main image — ~55% of total card height on desktop */}
      <div className="relative h-72 lg:h-[26rem] bg-secondary overflow-hidden shrink-0">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} — main project photo`}
          fill
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        {/* Gradient: dark at bottom to blend into process slot, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${categoryColor}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Process / secondary image slot */}
      <div className="relative h-28 bg-secondary/30 border-t border-dashed border-border/60 overflow-hidden shrink-0 group/process">
        {/* Subtle dot-grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
          <Camera className="h-4 w-4 text-muted-foreground/30" />
          <p className="text-[11px] text-muted-foreground/35 font-mono italic select-none tracking-wide">
            Process documentation coming soon
          </p>
          <p className="text-[10px] text-muted-foreground/25 select-none">
            CAD · CFD contour · assembly photo
          </p>
        </div>
      </div>

      {/* Card body — MIT inverted pyramid */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        {/* 1. Impactful title */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
        </div>

        {/* 2. Outcome summary */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.outcomeSummary}
        </p>

        {/* 3. My role badge (group projects only) */}
        {project.myRole && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">My role:</span>
            <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-medium">
              {project.myRole}
            </span>
          </div>
        )}

        {/* 4. Skills/tools tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-secondary text-muted-foreground border-border"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* 5. Links */}
        {project.github && (
          <div className="flex gap-2 pt-1 mt-auto">
            <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View Code
              </a>
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const filtered = activeFilter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-3">
          <span className="text-primary">03.</span>
          <span>Projects</span>
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        {/* Filter bar — horizontally scrollable on mobile */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 shrink-0
                ${activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <FadeInCard key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </FadeInCard>
          ))}
        </div>
      </div>
    </section>
  )
}
