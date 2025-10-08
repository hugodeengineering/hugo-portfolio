import { Card } from "@/components/ui/card"
import { GraduationCap, Award, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">01.</span>
          <span>About Me</span>
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="space-y-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a mechanical engineer specializing in robotics, embedded systems, and
              controls. Currently pursuing a Master's in Mechanical Engineering and Robotics at UC San Diego, I combine hands-on
              hardware design with advanced software development to create intelligent systems.
            </p>
            <p>
              My work spans from designing heat exchangers and medical devices to building and developing gesture-controlled vehicles
              and self-balancing robots. I'm passionate about bridging the gap between mechanical design and
              computational intelligence, whether that's optimizing thermal systems with CFD simulations or implementing
              real-time computer vision for autonomous navigation.
            </p>
            <p>
              At UC San Diego, I've had the opportunity to work on cutting-edge research in wearable biosensors and soft
              robotics, while also gaining industry experience at companies like Alcon and SwirlX. I'm driven by the
              challenge of solving complex problems that require both deep technical knowledge and creative engineering
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <GraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">UC San Diego</p>
              <p className="text-sm text-muted-foreground">BS Mechanical Engineering & Robotics</p>
              <p className="text-sm text-muted-foreground">MS Mechanical Engineering</p>
              <p className="text-sm text-primary font-mono mt-2">GPA: 3.75</p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Certifications</h3>
              <p className="text-sm text-muted-foreground">Certified SolidWorks Professional (CSWP)</p>
              <p className="text-sm text-muted-foreground mt-2">Advanced CAD & FEA Analysis</p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Involvement</h3>
              <p className="text-sm text-muted-foreground">SHPE Member</p>
              <p className="text-sm text-muted-foreground">Triton Neurotech</p>
              <p className="text-sm text-muted-foreground">Engineering World Health</p>
              <p className="text-sm text-muted-foreground">Course Tutor</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
