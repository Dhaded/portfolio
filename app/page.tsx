export default function Home() {
  return (
    <section>
      <h1 className="text-6xl font-bold leading-tight mb-8">
        I build <span className="glow">high-scale backend systems</span><br/>
        that power engineering intelligence.
      </h1>

      <p className="text-xl text-gray-400 max-w-3xl mb-16">
        Certified Kubernetes Application Developer (CKAD) and Elastic Stack certified.
        Architected analytics platform spanning 300+ repositories and 120+ teams.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Impact</h2>
          <p className="text-gray-400">
            45% latency reduction<br/>
            20% infra cost savings<br/>
            30% faster remediation
          </p>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <a href="https://www.credly.com/badges/14c703d9-35d5-4507-8ef2-2f3f697ee36e/public_url"
             target="_blank" className="text-indigo-400 underline block mb-2">
             CKAD – Verify
          </a>
          <a href="https://www.credly.com/badges/03f7988d-6ced-40f4-bbde-054b8324670f/public_url"
             target="_blank" className="text-indigo-400 underline">
             ELK – Verify
          </a>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Expertise</h2>
          <p className="text-gray-400">
            Golang Microservices<br/>
            MongoDB Optimization<br/>
            Event-Driven Architecture
          </p>
        </div>

      </div>

    </section>
  )
}
