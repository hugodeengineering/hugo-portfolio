import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, FileText } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 lg:px-12 py-24 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">05.</span>
          <span>Get In Touch</span>
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently looking for new opportunities in robotics, embedded systems, and controls systems.
              Whether you have a question, want to collaborate on a project, or just want to say hi, I'll do my best to
              get back to you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">Email</h4>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
              >
                {portfolioData.personal.email}
              </a>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Linkedin className="h-8 w-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">LinkedIn</h4>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
              >
                linkedin.com/in/hugo-de-mendoza
              </a>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <Github className="h-8 w-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">GitHub</h4>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                github.com/hugo-de-mendoza
              </a>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={`mailto:${portfolioData.personal.email}`}>
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.pdf" download>
                <FileText className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <footer className="mt-24 text-center text-sm text-muted-foreground">
          <p>© 2025 Hugo de Mendoza. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
