import type { ElementType } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Code2, FlaskConical } from "lucide-react"

interface SkillGroup {
  title: string
  icon: ElementType
  accent: string
  skills: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Simulation & Design",
    icon: Cpu,
    accent: "text-orange-400",
    skills: [
      "SolidWorks (CSWP)",
      "ANSYS (FEA + CFD)",
      "COMSOL",
      "Creo Parametric",
      "Fusion 360",
      "AutoCAD",
      "nTop",
    ],
  },
  {
    title: "Software & Robotics",
    icon: Code2,
    accent: "text-blue-400",
    skills: ["Python", "ROS2", "OpenCV", "C++", "MATLAB", "Arduino", "Jetson Nano", "OAK-D"],
  },
  {
    title: "Methods & Domains",
    icon: FlaskConical,
    accent: "text-green-400",
    skills: [
      "Mechanical Design",
      "Thermal Systems",
      "Microfluidics",
      "Embedded Controls",
      "Rapid Prototyping",
      "3D Printing",
      "Six Sigma",
      "Autonomous Vehicles",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 lg:px-12 py-24 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">04.</span>
          <span>Skills &amp; Technologies</span>
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon
            return (
              <Card
                key={group.title}
                className="p-6 bg-card border-border hover:border-primary transition-colors flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 shrink-0 ${group.accent}`} />
                  <h3 className="font-bold text-base">{group.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <Card className="mt-8 p-6 bg-card border-border">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Robotic Planning & Estimation",
              "Intro to Autonomous Vehicles",
              "Embedded Controls & Robotics",
              "Signals, Systems & Linear Control",
              "Computational Methods for Design",
              "Computer Vision",
              "Machine Learning",
            ].map((course) => (
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
