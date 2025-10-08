import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"

export function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 lg:px-12 py-24 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">02.</span>
          <span>Experience</span>
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="space-y-8">
          {portfolioData.experience.map((job, index) => (
            <Card key={job.id} className="p-6 lg:p-8 bg-card border-border hover:border-primary transition-all group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-primary font-medium flex items-center gap-2">
                    {job.company}
                    <ExternalLink className="h-4 w-4" />
                  </p>
                </div>
                <div className="text-sm text-muted-foreground font-mono whitespace-nowrap">{job.period}</div>
              </div>

              <p className="text-muted-foreground mb-4">{job.description}</p>

              <ul className="space-y-2 mb-4">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
