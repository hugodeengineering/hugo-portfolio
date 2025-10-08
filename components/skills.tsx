import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Cpu, Layers } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"

export function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Wrench,
      skills: portfolioData.skills.technical,
    },
    {
      title: "Software Tools",
      icon: Code,
      skills: portfolioData.skills.software,
    },
    {
      title: "Robotics & Perception",
      icon: Cpu,
      skills: portfolioData.skills.robotics,
    },
    {
      title: "Domain Expertise",
      icon: Layers,
      skills: portfolioData.skills.domains,
    },
  ]

  return (
    <section id="skills" className="min-h-screen px-6 lg:px-12 py-24 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">04.</span>
          <span>Skills & Technologies</span>
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="p-6 bg-card border-border hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary text-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="mt-8 p-6 bg-card border-border">
          <h3 className="text-lg font-bold mb-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.education.coursework.map((course) => (
              <Badge key={course} variant="outline" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
