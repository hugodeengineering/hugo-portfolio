import type { ElementType } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Code2, FlaskConical } from "lucide-react"

interface Skill {
  name: string
  proficiency?: number // 1–5, omit for no dots
}

interface SkillGroup {
  title: string
  icon: ElementType
  accent: string
  skills: Skill[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Simulation & Design",
    icon: Cpu,
    accent: "text-orange-400",
    skills: [
      { name: "SolidWorks (CSWP)", proficiency: 5 },
      { name: "ANSYS (FEA + CFD)", proficiency: 5 },
      { name: "COMSOL", proficiency: 4 },
      { name: "Creo Parametric", proficiency: 3 },
      { name: "Fusion 360", proficiency: 3 },
      { name: "AutoCAD" },
      { name: "nTop" },
    ],
  },
  {
    title: "Software & Robotics",
    icon: Code2,
    accent: "text-blue-400",
    skills: [
      { name: "Python", proficiency: 5 },
      { name: "ROS2", proficiency: 4 },
      { name: "OpenCV", proficiency: 4 },
      { name: "C++" },
      { name: "MATLAB" },
      { name: "Arduino" },
      { name: "Jetson Nano" },
      { name: "OAK-D" },
    ],
  },
  {
    title: "Methods & Domains",
    icon: FlaskConical,
    accent: "text-green-400",
    skills: [
      { name: "Mechanical Design" },
      { name: "Thermal Systems" },
      { name: "Microfluidics" },
      { name: "Embedded Controls" },
      { name: "Rapid Prototyping" },
      { name: "3D Printing" },
      { name: "Six Sigma" },
      { name: "Autonomous Vehicles" },
    ],
  },
]

function ProficiencyDots({ level }: { level: number }) {
  return (
    <span className="flex gap-0.5 shrink-0" aria-label={`Proficiency: ${level} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`block h-1.5 w-1.5 rounded-full transition-colors ${
            i < level ? "bg-primary" : "bg-border"
          }`}
        />
      ))}
    </span>
  )
}

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
                {/* Header */}
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 shrink-0 ${group.accent}`} />
                  <h3 className="font-bold text-base">{group.title}</h3>
                </div>

                {/* Skills list */}
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3">
                      <span
                        className={`text-sm ${
                          skill.proficiency
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {skill.name}
                      </span>
                      {skill.proficiency && (
                        <ProficiencyDots level={skill.proficiency} />
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        {/* Proficiency legend */}
        <div className="mt-6 flex items-center gap-3 justify-end">
          <span className="text-xs text-muted-foreground/60">Proficiency:</span>
          {[
            { label: "Familiar", level: 1 },
            { label: "Proficient", level: 3 },
            { label: "Expert", level: 5 },
          ].map(({ label, level }) => (
            <span key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <ProficiencyDots level={level} />
              {label}
            </span>
          ))}
        </div>

        {/* Relevant coursework */}
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
