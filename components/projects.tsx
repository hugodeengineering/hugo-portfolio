import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">03.</span>
          <span>Projects</span>
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all group"
            >
              <div className="relative h-64 bg-secondary overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{project.period}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.github && (
                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
