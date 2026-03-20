import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-16 lg:pt-0">
      <div className="max-w-4xl">
        <div className="space-y-8">
          <p className="text-primary text-sm font-mono tracking-widest uppercase">Hi, my name is</p>
          <div className="space-y-3">
            <h1 className="text-6xl lg:text-8xl font-bold text-foreground tracking-tight leading-none">
              Hugo de Mendoza
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary leading-snug">
              Mechanical Engineer &amp; Robotics Researcher
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light">
            I build systems where{" "}
            <span className="text-foreground font-medium">physical hardware meets computational intelligence</span>
            {" "}— from{" "}
            <span className="text-primary font-medium">CFD-optimized thermal systems</span> to{" "}
            <span className="text-primary font-medium">ROS2-driven autonomous robots</span>.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
