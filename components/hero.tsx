import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-16 lg:pt-0">
      <div className="max-w-4xl">
        <div className="space-y-6">
          <p className="text-primary text-sm font-mono">Hi, my name is</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground">Hugo de Mendoza</h1>
          <h2 className="text-3xl lg:text-5xl font-bold text-muted-foreground">I am a mechanical engineering student.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I'm a mechanical engineer specializing in{" "}
            <span className="text-primary">robotics</span>, <span className="text-primary">embedded systems</span>, and{" "}
            <span className="text-primary">controls</span>. Currently pursuing my Master's in Mechanical Engineering and Robotics
            at UC San Diego.
          </p>
          <div className="flex gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
