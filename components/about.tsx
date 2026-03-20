export function About() {
  const involvements = [
    "SHPE Member",
    "Triton Neurotech",
    "Engineering World Health",
    "Course Tutor — Mechanical Design & Dynamics",
  ]

  return (
    <section id="about" className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">01.</span>
          <span>About Me</span>
          <span className="h-px flex-1 bg-border ml-4" />
        </h2>

        <div className="space-y-10">
          {/* Three focused paragraphs */}
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base lg:text-lg max-w-3xl">
            <p>
              I&apos;m a mechanical engineering student at UC San Diego pursuing a concurrent BS/MS, with a focus on
              robotics and intelligent systems. My engineering identity is built around one conviction: the most
              impactful systems are those where{" "}
              <span className="text-foreground font-medium">
                physical hardware and computational intelligence are designed together
              </span>
              , not bolted together as an afterthought.
            </p>

            <p>
              What sets my work apart is depth on both sides of that divide. On the hardware side, I can take a
              thermal system from concept through{" "}
              <span className="text-primary font-medium">CFD simulation in ANSYS</span> to fabricated prototype —
              as I did at SwirlX, achieving a 40% pressure drop reduction. On the software side, I can build
              full{" "}
              <span className="text-primary font-medium">ROS2 perception pipelines</span> and deploy real-time
              computer vision on embedded hardware. That dual fluency — in physical fabrication and in simulation
              and code — is rare, and it&apos;s what I bring to every project.
            </p>

            <p>
              I&apos;m currently looking for roles at the intersection of{" "}
              <span className="text-foreground font-medium">
                robotics, embedded systems, and mechanical design
              </span>{" "}
              — where I can contribute to products that move, sense, and adapt in the physical world. I thrive in
              environments that demand both rigorous engineering fundamentals and the creativity to prototype fast.
            </p>
          </div>

          {/* Involvement badges */}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Involvement</p>
            <div className="flex flex-wrap gap-2">
              {involvements.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
